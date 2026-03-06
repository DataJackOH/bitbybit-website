import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Target, Footprints, Trophy, ClipboardList, Dumbbell, TrendingUp } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import AppShowcase from "@/components/AppShowcase";

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
    availability: "https://schema.org/InStock",
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
              <p className="mt-5 text-lg leading-relaxed text-charcoal/70">
                Personalized calisthenics plans that adapt to your level.
                Pull-ups, push-ups, planches, and more — no trainer needed.
              </p>
              <p className="mt-3 text-sm font-medium text-charcoal/60">
                7 days free · Then from $9.99/mo · Cancel anytime
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
                <a
                  href="https://apps.apple.com/app/bit-by-bit/id6756225068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                >
                  Download on the App Store
                </a>
                <a
                  href="#see-it-in-action"
                  className="inline-flex items-center justify-center gap-1 rounded-full border border-charcoal/15 px-5 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:border-charcoal/30 hover:text-charcoal"
                >
                  See how it works
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>

            {/* Real app screenshot in device frame */}
            <div className="relative shrink-0 animate-float">
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

      {/* How It Works */}
      <section id="see-it-in-action" className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-charcoal">
              How it works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-charcoal/70">
              Get started in under a minute. No account required.
            </p>
          </ScrollReveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <ScrollReveal>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/10 text-sage">
                  <ClipboardList size={24} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-charcoal">
                  1. Set your goals
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  Choose from pull-ups, push-ups, dips, squats, or handstands. Tell
                  the app your level and equipment.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                  <Dumbbell size={24} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-charcoal">
                  2. Follow your plan
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  Get a personalized workout built for you. Log sets, swap exercises,
                  and rate difficulty as you go.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/10 text-sage">
                  <TrendingUp size={24} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-charcoal">
                  3. Watch yourself progress
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  The app adapts after every session. Track streaks, personal records,
                  and progression toward your goals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* App in Action */}
      <section className="bg-offwhite px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-charcoal">
              See It in Action
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-charcoal/70">
              Set your goals, follow workouts that adapt to you, and track real
              improvement over time.
            </p>
          </ScrollReveal>

          <AppShowcase />
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="bg-offwhite-warm px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-charcoal">
              Why bit by bit?
            </h2>
          </ScrollReveal>
          <div className="mt-12 space-y-10">
            {/* Differentiator 1 */}
            <ScrollReveal>
              <div className="rounded-2xl border border-charcoal/[0.06] bg-white p-8 transition-shadow duration-300 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/10 text-sage">
                    <Target size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-charcoal">
                      It actually adapts to you
                    </h3>
                    <p className="mt-2 leading-relaxed text-charcoal/70">
                      Most apps give you the same program everyone else gets. bit
                      by bit builds your plan around your goals, your fitness
                      level, and your equipment. Performed well? The next session
                      gets harder. Had a tough day? It dials back. Your plan
                      evolves with every workout.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Differentiator 2 */}
            <ScrollReveal delay={100}>
              <div className="rounded-2xl border border-charcoal/[0.06] bg-white p-8 transition-shadow duration-300 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral/10 text-coral">
                    <Footprints size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-charcoal">
                      Built for calisthenics progression
                    </h3>
                    <p className="mt-2 leading-relaxed text-charcoal/70">
                      Can&apos;t do a pull-up yet? The app starts you with dead
                      hangs and scapular pulls, then builds through rows and
                      negatives until you get there. Every skill has a progression
                      chain — the app knows exactly what comes next, but
                      you&apos;re always free to swap in something you enjoy more.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Differentiator 3 */}
            <ScrollReveal delay={200}>
              <div className="rounded-2xl border border-charcoal/[0.06] bg-white p-8 transition-shadow duration-300 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/10 text-sage">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-charcoal">
                      Adapts to your equipment
                    </h3>
                    <p className="mt-2 leading-relaxed text-charcoal/70">
                      No bands? No problem — the app swaps in alternatives you
                      can do. Only have a pull-up bar? It builds around that. Tell
                      it what you&apos;ve got and every workout fits your setup.
                      No gear required to start, but a bar goes a long way if
                      pull-ups are the goal.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
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
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-12 md:gap-20">
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-sage">525</p>
                <p className="mt-1 text-sm text-charcoal/60">Exercises</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-sage">50+</p>
                <p className="mt-1 text-sm text-charcoal/60">
                  Progression Chains
                </p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-sage">5</p>
                <p className="mt-1 text-sm text-charcoal/60">Skill Goals</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Built By — Founder Story */}
      <section className="bg-offwhite-warm px-6 py-20 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border-l-4 border-sage/40 bg-white px-8 py-10 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
                The story
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-charcoal">
                Built by someone who needed it
              </h2>
              <blockquote className="mt-6 text-lg leading-relaxed text-charcoal/70">
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
        </ScrollReveal>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
