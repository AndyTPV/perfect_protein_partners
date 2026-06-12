"use server";

import { Resend } from "resend";

async function verifyTurnstile(token) {
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export async function sendContactEmail(prevState, formData) {
  // Honeypot: bots fill this field, humans never see it
  if (formData.get("website")) {
    // Silent success so bots don't know they were rejected
    return {
      status: "success",
      message: "Thanks. Your message has been sent, and we'll be in touch soon.",
      fieldErrors: {},
    };
  }

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const preferredContact = formData.get("preferred_contact")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  // Server-side field validation runs first so the user sees actionable errors fast
  const fieldErrors = {};
  if (!name) fieldErrors.name = "Name is required.";
  if (!email) {
    fieldErrors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!message) fieldErrors.message = "Message is required.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "", fieldErrors };
  }

  // Turnstile: fail closed if the secret key is missing
  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.error("Contact form: TURNSTILE_SECRET_KEY is not set.");
    return {
      status: "error",
      message: "Something went wrong. Please try again or email us directly.",
      fieldErrors: {},
    };
  }

  const turnstileToken =
    formData.get("cf-turnstile-response")?.toString() ?? "";
  const turnstileOk = await verifyTurnstile(turnstileToken);
  if (!turnstileOk) {
    return {
      status: "error",
      message:
        "Security check failed. Please complete the challenge and try again.",
      fieldErrors: {},
    };
  }

  // Guard: Resend env vars must be present before touching the email API
  if (
    !process.env.RESEND_API_KEY ||
    !process.env.CONTACT_TO_EMAIL ||
    !process.env.CONTACT_FROM_EMAIL
  ) {
    console.error("Contact form: missing required environment variables.");
    return {
      status: "error",
      message: "Something went wrong. Please try again or email us directly.",
      fieldErrors: {},
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: [
        company ? `Company: ${company}` : null,
        `Name:    ${name}`,
        preferredContact ? `Preferred contact: ${preferredContact}` : null,
        `Email:   ${email}`,
        "",
        "Message:",
        message,
        "",
        `Submitted: ${new Date().toUTCString()}`,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });

    return {
      status: "success",
      message: "Thanks. Your message has been sent, and we'll be in touch soon.",
      fieldErrors: {},
    };
  } catch (err) {
    console.error("Resend send error:", err?.message ?? err);
    return {
      status: "error",
      message: "Something went wrong. Please try again or email us directly.",
      fieldErrors: {},
    };
  }
}
