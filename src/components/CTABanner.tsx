"use client";

import { useState } from "react";

export default function CTABanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  }

  return (
    <section className="bg-sage px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-white">
          Coming Soon to the App Store
        </h2>
        <p className="mt-3 text-white/80">
          Be the first to know when bit by bit launches. Drop your email and
          we&apos;ll notify you.
        </p>

        {submitted ? (
          <p className="mt-6 font-medium text-white">
            You&apos;re on the list! We&apos;ll be in touch.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border-0 px-4 py-3 text-sm text-charcoal shadow-sm outline-none placeholder:text-charcoal/40 sm:w-72"
            />
            <button
              type="submit"
              className="rounded-lg bg-coral px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
