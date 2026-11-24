const interests = new Set(["seal", "testing", "transparency", "formulation", "general"]);
const messages = { failed: "We couldn’t send your enquiry. Please try again shortly.", challenge: "Please complete the security check and try again.", success: "Thank you. Your enquiry has been sent to PPP." };
export function validateContact(form) {
 const text = key => String(form.get(key) ?? "").trim();
 const data = { name: text("name"), email: text("email"), company: text("company"), message: text("message"), interest: text("interest") || "general", token: text("cf-turnstile-response"), website: text("website") };
 const errors = {};
 if (!data.name) errors.name = "Please enter your name."; else if (data.name.length > 100 || /[\r\n]/.test(data.name)) errors.name = "Please enter a name of up to 100 characters on one line.";
 if (!data.email || data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
 if (data.company.length > 150) errors.company = "Please keep the company name under 150 characters.";
 if (!data.message) errors.message = "Please tell us a little about your product or question."; else if (data.message.length > 6000) errors.message = "Please keep your enquiry under 6,000 characters.";
 if (!interests.has(data.interest)) errors.interest = "Please select an area of interest.";
 return { data, errors };
}
export function createContactHandler({ preview = false, verifyChallenge, sendEmail }) {
 return async form => {
  const { data, errors } = validateContact(form);
  if (data.website) return { status: "success", message: messages.success, fieldErrors: {} };
  if (Object.keys(errors).length) return { status: "error", message: "Please check the highlighted fields.", fieldErrors: errors };
  if (preview) return { status: "preview", message: "Enquiry preview complete. This review build does not send or store messages.", fieldErrors: {} };
  try {
   if (!data.token || !await verifyChallenge(data.token)) return { status: "error", message: messages.challenge, fieldErrors: {} };
   const result = await sendEmail(data);
   if (result?.error || !result?.data?.id) return { status: "error", message: messages.failed, fieldErrors: {} };
   return { status: "success", message: messages.success, fieldErrors: {} };
  } catch { return { status: "error", message: messages.failed, fieldErrors: {} }; }
 };
}
