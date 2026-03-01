import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Target, Footprints, Trophy } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "bit by bit",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Fitness",
  operatingSystem: "iOS",
  description:
    "Personalized calisthenics training app that adapts to your progress. Pull-ups, push-ups, squats, handstands, and more.",
  url: "https://bitbybit.fit",
  image: "https://bitbybit.fit/og-image.png",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    price: "0",
    priceCurrency: "AUD",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-sage opacity-[0.07] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/4 rounded-full bg-coral opacity-[0.07] blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
            <div className="max-w-xl text-center md:text-left">
              <h1 className="font-heading text-4xl font-bold leading-tight text-charcoal md:text-5xl lg:text-6xl">
                Master Calisthenics,{" "}
                <span className="text-sage">Your Way</span>
              </h1>
              <p className="mt-5 text-lg text-charcoal/60">
                Free personalized calisthenics plans that adapt to your level.
                Pull-ups, push-ups, planches, and more — no trainer needed.
              </p>
              <p className="mt-3 text-sm font-medium text-charcoal/40">
                525 exercises · Infinite progressions · Fully personalized
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href="https://apps.apple.com/app/bit-by-bit/id6756225068"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={150}
                    height={50}
                    className="h-[50px] w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Real app screenshot in device frame */}
            <div className="relative shrink-0">
              <div className="overflow-hidden rounded-[2.5rem] border-2 border-charcoal/10 bg-charcoal shadow-xl">
                <Image
                  src="/screenshots/active-workout-hero.png"
                  alt="Active workout screen showing Band Push Up with exercise animation, logged sets, and Finish Workout button"
                  width={603}
                  height={1191}
                  className="w-[240px] rounded-[2.3rem] md:w-[280px]"
                  priority
                  sizes="(max-width: 768px) 240px, 280px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Show Don't Tell — App in Action */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold text-charcoal">
            See It in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-charcoal/60">
            Set your goals, follow workouts that adapt to you, and track real
            improvement over time.
          </p>

          {/* Mobile: horizontal scroll, Desktop: 3-col grid */}
          <div className="scrollbar-hide -mx-6 mt-16 flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 pb-4 md:pb-0">
            {/* Step 1 */}
            <div className="min-w-[75vw] flex-shrink-0 snap-center md:min-w-0 md:flex-shrink">
              <div className="flex flex-col items-center text-center">
                <div className="overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg">
                  <Image
                    src="/screenshots/home.png"
                    alt="Home screen showing today's workout, upcoming sessions, and your goals"
                    width={603}
                    height={1191}
                    className="w-full"
                    sizes="(max-width: 768px) 75vw, 33vw"
                  />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-charcoal">
                  Your Daily Plan
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  See today&apos;s workout, what&apos;s coming next, and your
                  current goals — all in one place.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="min-w-[75vw] flex-shrink-0 snap-center md:min-w-0 md:flex-shrink">
              <div className="flex flex-col items-center text-center">
                <div className="overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg">
                  <Image
                    src="/screenshots/progress.png"
                    alt="Goals screen showing progression, top movements, and muscles worked"
                    width={603}
                    height={1191}
                    className="w-full"
                    sizes="(max-width: 768px) 75vw, 33vw"
                  />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-charcoal">
                  Watch Yourself Improve
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  Track your goals, see which muscles you&apos;re working, and
                  watch your top movements grow.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="min-w-[75vw] flex-shrink-0 snap-center md:min-w-0 md:flex-shrink">
              <div className="flex flex-col items-center text-center">
                <div className="overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg">
                  <Image
                    src="/screenshots/explore.png"
                    alt="Exercise library with 525 exercises, search, and category filters"
                    width={603}
                    height={1191}
                    className="w-full"
                    sizes="(max-width: 768px) 75vw, 33vw"
                  />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-charcoal">
                  525 Exercises
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  Browse by category, difficulty, or search for any movement.
                  Every exercise has detailed instructions.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll indicators — mobile only */}
          <div className="mt-4 flex justify-center gap-2 md:hidden">
            <span className="h-1.5 w-1.5 rounded-full bg-charcoal/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-charcoal/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-charcoal/20" />
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="bg-offwhite-warm px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl font-bold text-charcoal">
            Why bit by bit?
          </h2>
          <div className="mt-12 space-y-10">
            {/* Differentiator 1 */}
            <div className="rounded-2xl border border-charcoal/[0.06] bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/10 text-sage">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-charcoal">
                    It actually adapts to you
                  </h3>
                  <p className="mt-2 leading-relaxed text-charcoal/60">
                    Most apps give you the same program everyone else gets. bit
                    by bit builds your plan around your goals, your fitness
                    level, and your equipment. Performed well? The next session
                    gets harder. Had a tough day? It dials back. Your plan
                    evolves with every workout.
                  </p>
                </div>
              </div>
            </div>

            {/* Differentiator 2 */}
            <div className="rounded-2xl border border-charcoal/[0.06] bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral/10 text-coral">
                  <Footprints size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-charcoal">
                    Built for calisthenics progression
                  </h3>
                  <p className="mt-2 leading-relaxed text-charcoal/60">
                    Can&apos;t do a pull-up yet? The app starts you with dead
                    hangs and scapular pulls, then builds through rows and
                    negatives until you get there. Every skill has a progression
                    chain — the app knows exactly what comes next.
                  </p>
                </div>
              </div>
            </div>

            {/* Differentiator 3 */}
            <div className="rounded-2xl border border-charcoal/[0.06] bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/10 text-sage">
                  <Trophy size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-charcoal">
                    Set a goal, follow the ladder
                  </h3>
                  <p className="mt-2 leading-relaxed text-charcoal/60">
                    Pick a skill — pull-ups, handstands, pistol squats — and get
                    a clear progression ladder from beginner to advanced. The app
                    tracks where you are and moves you forward one step at a
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/features"
              className="group inline-flex items-center gap-1.5 rounded-full border border-sage/30 px-6 py-2.5 text-sm font-semibold text-sage transition-all hover:border-sage hover:bg-sage/5"
            >
              See all features
              <ChevronRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — Social Proof */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-12 md:gap-20">
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-sage">525</p>
              <p className="mt-1 text-sm text-charcoal/50">Exercises</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-sage">50+</p>
              <p className="mt-1 text-sm text-charcoal/50">
                Progression Chains
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-sage">100%</p>
              <p className="mt-1 text-sm text-charcoal/50">Personalized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Built By — Founder Story */}
      <section className="bg-offwhite-warm px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border-l-4 border-sage/40 bg-white px-8 py-10 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
              The story
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-charcoal">
              Built by someone who needed it
            </h2>
            <blockquote className="mt-6 text-lg leading-relaxed text-charcoal/60">
              I started calisthenics with no idea how to progress beyond basic
              push-ups. Every app I tried either gave me the same generic program
              or wanted $30/month for a coach. So I built the training app I wished
              existed — one that actually understands bodyweight progressions, adapts
              to how you perform, and doesn&apos;t charge a premium for
              personalization.
            </blockquote>
            <p className="mt-6 font-heading text-base font-bold text-sage">
              — Tobey, founder of bit by bit
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
