import RegionalPrice from "@/components/RegionalPrice";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-sage px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-white opacity-[0.12] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-white opacity-[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          Ready to start training?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          1 month free. Then from <RegionalPrice />. Cancel anytime.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://apps.apple.com/app/bit-by-bit/id6756225068"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-sage shadow-lg transition-opacity duration-200 hover:opacity-90"
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
