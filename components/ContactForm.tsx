"use client";

import { useState } from "react";

const inputClass =
  "mt-1.5 w-full rounded-[4px] border border-primary/15 bg-section-warm px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60 invalid:border-red-400/60 invalid:focus:border-red-400 invalid:focus:ring-red-400/20";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleReset() {
    setStatus("idle");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");

    // Template form — no backend. Simulates submission for UX feedback.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
    form.reset();
  }

  return (
    <form
      className="rounded-[8px] border border-primary/10 bg-white p-6 sm:p-8"
      onSubmit={handleSubmit}
    >
      <h3 className="font-serif text-xl font-medium text-text">Send us a message</h3>
      <p className="mt-1 text-sm text-text-muted">
        Fill in the form below and we&apos;ll be in touch shortly.
      </p>

      {status === "success" && (
        <p
          className="mt-4 rounded-[4px] border border-accent/25 bg-accent/10 px-4 py-3 text-sm font-medium text-accent-text"
          role="status"
          aria-live="polite"
        >
          Thank you — your message has been received. We&apos;ll respond within one business day.
        </p>
      )}

      <fieldset disabled={status === "submitting"} className="mt-6 disabled:opacity-80">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-text">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              autoComplete="given-name"
              className={inputClass}
              placeholder="Jane"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-text">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              autoComplete="family-name"
              className={inputClass}
              placeholder="Smith"
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="block text-sm font-medium text-text">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="jane@example.com"
          />
        </div>

        <div className="mt-5">
          <label htmlFor="businessType" className="block text-sm font-medium text-text">
            Business type
          </label>
          <select
            id="businessType"
            name="businessType"
            className={inputClass}
          >
            <option value="sole-trader">Sole trader</option>
            <option value="small-business">Small business</option>
            <option value="limited-company">Limited company</option>
            <option value="other">Other / Not sure</option>
          </select>
        </div>

        <div className="mt-5">
          <label htmlFor="message" className="block text-sm font-medium text-text">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={inputClass}
            placeholder="Tell us about your business and what you're looking for..."
          />
        </div>

        <button
          type={status === "success" ? "button" : "submit"}
          disabled={status === "submitting"}
          onClick={status === "success" ? handleReset : undefined}
          className="mt-6 w-full rounded-full bg-accent-button py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-button-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
        >
          {status === "submitting"
            ? "Sending…"
            : status === "success"
              ? "Send another message"
              : "Send message"}
        </button>
      </fieldset>

      {status !== "success" && (
        <p className="mt-4 text-xs text-text-muted">
          By submitting this form, you agree to be contacted about our services.
          We never share your details with third parties.
        </p>
      )}
    </form>
  );
}
