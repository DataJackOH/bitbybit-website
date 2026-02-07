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
          We&apos;re building the training app we wished existed. Launching soon
          on iOS.
        </p>
      </div>
    </section>
  );
}
