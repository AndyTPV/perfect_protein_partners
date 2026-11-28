"use server";
import { Resend } from "resend";
import { createContactHandler } from "@/lib/contact.mjs";
export async function sendContactEmail(_previousState, formData) {
 const handler = createContactHandler({
  preview: process.env.VERCEL_ENV !== "production",
  verifyChallenge: async token => {
   if (!process.env.TURNSTILE_SECRET_KEY) return false;
   const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ secret: process.env.TURNSTILE_SECRET_KEY, response: token }), signal: AbortSignal.timeout(10000) });
   if (!result.ok) return false; const verification = await result.json(); return verification.success === true;
  },
  sendEmail: async data => {
   if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) throw new Error("Contact delivery is not configured.");
   return new Resend(process.env.RESEND_API_KEY).emails.send({ from: process.env.CONTACT_FROM_EMAIL, to: [process.env.CONTACT_TO_EMAIL], replyTo: data.email, subject: `PPP enquiry: ${data.interest} — ${data.name}`, text: [`Name: ${data.name}`, `Company: ${data.company || "Not supplied"}`, `Email: ${data.email}`, `Interest: ${data.interest}`, "", data.message, "", `Submitted: ${new Date().toISOString()}`].join("\n") });
  },
 }); return handler(formData);
}
