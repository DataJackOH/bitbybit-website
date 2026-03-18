import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage opacity-[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-[200px] w-[200px] rounded-full bg-coral opacity-[0.06] blur-3xl" />

      <div className="relative text-center">
        <p className="font-heading text-[8rem] font-bold leading-none text-sage/15 md:text-[10rem]">
          404
        </p>
        <div className="-mt-12 md:-mt-16">
          <h1 className="font-heading text-2xl font-bold text-charcoal md:text-3xl">
            Page not found
          </h1>
          <p className="mt-3 max-w-sm text-charcoal/55">
            This page doesn&apos;t exist. It might have been moved, or maybe the
            URL has a typo.
          </p>
          <Link
            href="/"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sage-dark"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
