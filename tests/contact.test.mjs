import test from "node:test";
import assert from "node:assert/strict";
import { createContactHandler } from "../lib/contact.mjs";
function form(overrides = {}) { const f = new FormData(); Object.entries({ name: "Demo Reviewer", email: "review@example.com", company: "Demo Brand", interest: "seal", message: "Please explain testing options.", "cf-turnstile-response": "test-token", ...overrides }).forEach(([k, v]) => f.set(k, v)); return f; }
test("invalid data does not contact either external service", async () => { let calls = 0; const run = createContactHandler({ verifyChallenge: async () => { calls++; return true; }, sendEmail: async () => { calls++; } }); const r = await run(form({ email: "invalid", message: "" })); assert.equal(r.status, "error"); assert.ok(r.fieldErrors.email); assert.ok(r.fieldErrors.message); assert.equal(calls, 0); });
test("review build never verifies a challenge or sends an email", async () => { const unexpected = async () => { throw new Error("External service must not be called"); }; const run = createContactHandler({ preview: true, verifyChallenge: unexpected, sendEmail: unexpected }); assert.equal((await run(form())).status, "preview"); });
test("failed challenge prevents sending", async () => { let sent = false; const run = createContactHandler({ verifyChallenge: async () => false, sendEmail: async () => { sent = true; } }); assert.equal((await run(form())).status, "error"); assert.equal(sent, false); });
test("Resend returned errors are never shown as success", async () => { const run = createContactHandler({ verifyChallenge: async () => true, sendEmail: async () => ({ data: null, error: { message: "Rejected" } }) }); assert.equal((await run(form())).status, "error"); });
test("missing provider receipt is treated as failed delivery", async () => { const run = createContactHandler({ verifyChallenge: async () => true, sendEmail: async () => ({}) }); assert.equal((await run(form())).status, "error"); });
test("accepted provider receipt completes the enquiry", async () => { const run = createContactHandler({ verifyChallenge: async () => true, sendEmail: async () => ({ data: { id: "example-receipt" }, error: null }) }); assert.equal((await run(form())).status, "success"); });
test("provider timeout is a recoverable error", async () => { const run = createContactHandler({ verifyChallenge: async () => true, sendEmail: async () => { throw new Error("timeout"); } }); assert.equal((await run(form())).status, "error"); });
test("honeypot prevents service calls", async () => { let called = false; const run = createContactHandler({ verifyChallenge: async () => { called = true; }, sendEmail: async () => { called = true; } }); await run(form({ website: "spam.example" })); assert.equal(called, false); });
test("header newlines and unrecognized interests are rejected", async () => { const run = createContactHandler({ preview: true }); const r = await run(form({ name: "Demo\nInjected", interest: "unknown" })); assert.ok(r.fieldErrors.name); assert.ok(r.fieldErrors.interest); });
test("cost enquiries are accepted in preview without calling providers", async () => {
 const unexpected = async () => { throw new Error("No providers in preview"); };
 const run = createContactHandler({ preview: true, verifyChallenge: unexpected, sendEmail: unexpected });
 const result = await run(form({ interest: "cost" }));
 assert.equal(result.status, "preview");
 assert.deepEqual(result.fieldErrors, {});
});
