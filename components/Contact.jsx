"use client";

import { useActionState, useEffect } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { sendContactEmail } from "@/app/actions";

const initialState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

function inputClass(hasError) {
  return [
    "w-full bg-surface rounded-sm px-4 py-3 font-sans text-sm text-ink",
    "placeholder:text-faint focus:outline-none focus:ring-1 transition-colors",
    hasError
      ? "border border-error focus:ring-error focus:border-error"
      : "border border-border focus:ring-forest focus:border-forest",
  ].join(" ");
}

const labelClass =
  "font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted";

const fieldErrorClass = "font-sans text-xs text-error mt-1";

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    sendContactEmail,
    initialState
  );

  const fe = state.fieldErrors ?? {};

  useEffect(() => {
    if (state.status === "error") {
      window.turnstile?.reset();
    }
  }, [state]);

  return (
    <section id="contact" className="px-6 md:px-10 py-28 bg-parchment">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-gold mb-8">
          Contact
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-ink leading-[1.1] mb-12">
          Every solution starts with an inquiry
        </h2>

        {state.status === "success" ? (
          <p className="font-sans text-base text-muted">{state.message}</p>
        ) : (
          <form action={formAction} noValidate className="flex flex-col gap-7">
            {/* Honeypot: off-screen, invisible to humans, left in DOM for spam bots */}
            <div className="honeypot-field" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Global submission error */}
            {state.status === "error" && state.message && (
              <p role="alert" className="font-sans text-sm text-error">
                {state.message}
              </p>
            )}

            {/* Company (optional) */}
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className={labelClass}>
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                autoComplete="organization"
                className={inputClass(false)}
              />
            </div>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelClass}>
                First &amp; Last Name <span aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                className={inputClass(!!fe.name)}
              />
              {fe.name && (
                <p role="alert" className={fieldErrorClass}>
                  {fe.name}
                </p>
              )}
            </div>

            {/* Preferred method of contact (optional) */}
            <div className="flex flex-col gap-2">
              <label htmlFor="preferred_contact" className={labelClass}>
                Preferred Method of Contact
              </label>
              <input
                type="text"
                id="preferred_contact"
                name="preferred_contact"
                placeholder="e.g. email, phone, text"
                autoComplete="off"
                className={inputClass(false)}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>
                Email <span aria-label="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className={inputClass(!!fe.email)}
              />
              {fe.email && (
                <p role="alert" className={fieldErrorClass}>
                  {fe.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className={labelClass}>
                Message <span aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`${inputClass(!!fe.message)} resize-none`}
              />
              {fe.message && (
                <p role="alert" className={fieldErrorClass}>
                  {fe.message}
                </p>
              )}
            </div>

            {/* Turnstile challenge widget — auto-populates cf-turnstile-response */}
            <div
              className="cf-turnstile"
              data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
              data-theme="light"
            />

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={pending}
                className="inline-block px-8 py-3 bg-forest text-cream text-sm font-sans font-medium rounded-sm hover:bg-forest-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {pending ? "Sending..." : "Inquire"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}
