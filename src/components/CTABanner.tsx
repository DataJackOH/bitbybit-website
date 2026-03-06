import { Apple } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-sage px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-white opacity-[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-white opacity-[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          Your bodyweight. Your goals. Your pace.
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Start training smarter today — download free on iOS.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://apps.apple.com/app/bit-by-bit/id6756225068"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-sage transition-colors duration-200 hover:bg-white/90"
          >
            <Apple size={18} />
            Download Free on iOS
          </a>
        </div>
      </div>
    </section>
  );
}
