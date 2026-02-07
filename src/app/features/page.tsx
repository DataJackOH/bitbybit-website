import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Dumbbell,
  TrendingUp,
  Timer,
  WifiOff,
  BookOpen,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Features — Calisthenics Training App",
  description:
    "Explore all the features of bit by bit — personalized plans, real-time adaptation, progress tracking, achievements, and more.",
};

const secondaryFeatures = [
  {
    icon: <Timer size={20} />,
    title: "Rest Timer",
    description:
      "Built-in timer with audio cues between sets.",
    accent: "sage" as const,
  },
  {
    icon: <WifiOff size={20} />,
    title: "Works Offline",
    description:
      "Train anywhere. Data syncs when you're back online.",
    accent: "coral" as const,
  },
  {
    icon: <BookOpen size={20} />,
    title: "Exercise Library",
    description:
      "443 exercises with detailed instructions for every movement.",
    accent: "coral" as const,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-4xl font-bold text-charcoal md:text-5xl">
              Everything you need to master calisthenics
            </h1>
            <p className="mt-5 text-lg text-charcoal/60">
              Built for beginners and intermediates who want structured,
              adaptive training without paying for a coach.
            </p>
          </div>

          {/* Hero Feature 1 — Personalized Plans */}
          <div className="mt-20 flex flex-col items-center gap-10 md:flex-row">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold text-sage">
                <Target size={14} />
                Core Feature
              </div>
              <h2 className="mt-4 font-heading text-2xl font-bold text-charcoal md:text-3xl">
                Personalized Plans
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal/60">
                Every workout is built around your current fitness level. No
                cookie-cutter programs — the app meets you where you are and
                progresses with you. Choose from pull-ups, push-ups, squats,
                dips, or handstands and get a plan structured around your goals.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="mx-auto max-w-[280px] overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg">
                <Image
                  src="/screenshots/workout.png"
                  alt="Personalized workout plan showing exercises tailored to your level"
                  width={603}
                  height={1191}
                  className="w-full"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Hero Feature 2 — Real-Time Adaptation */}
          <div className="mt-24 flex flex-col-reverse items-center gap-10 md:flex-row">
            <div className="md:w-1/2">
              <div className="mx-auto max-w-[280px] overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg">
                <Image
                  src="/screenshots/progress.png"
                  alt="Progress tracking with stats, goals, and weekly volume chart"
                  width={603}
                  height={1191}
                  className="w-full"
                  unoptimized
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
                <TrendingUp size={14} />
                Smart Training
              </div>
              <h2 className="mt-4 font-heading text-2xl font-bold text-charcoal md:text-3xl">
                Adapts as You Improve
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal/60">
                Performed well? The next session increases the challenge. Had a
                tough day? It adjusts accordingly. Your plan evolves with every
                workout — tracking streaks, personal records, and weekly volume
                so you can see real progress.
              </p>
            </div>
          </div>

          {/* Hero Feature 3 — Goal-Focused Progression */}
          <div className="mt-24 flex flex-col items-center gap-10 md:flex-row">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold text-sage">
                <Dumbbell size={14} />
                Progression System
              </div>
              <h2 className="mt-4 font-heading text-2xl font-bold text-charcoal md:text-3xl">
                From Zero to Pull-Up
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal/60">
                Every skill has a progression chain. Can&apos;t do a pull-up
                yet? Start with dead hangs and scapular pulls, then build
                through rows and negatives. The app knows exactly what comes
                next and when you&apos;re ready to move up.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="mx-auto max-w-[280px] overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg">
                <Image
                  src="/screenshots/home.png"
                  alt="Home screen showing goal progress and bit goals progression chain"
                  width={603}
                  height={1191}
                  className="w-full"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Secondary Features — compact grid */}
          <div className="mt-24">
            <h2 className="text-center font-heading text-2xl font-bold text-charcoal">
              Also Included
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {secondaryFeatures.map((f) => {
                const accentBg =
                  f.accent === "coral" ? "bg-coral/10" : "bg-sage/10";
                const accentText =
                  f.accent === "coral" ? "text-coral" : "text-sage";
                return (
                  <div
                    key={f.title}
                    className="rounded-xl border border-charcoal/[0.06] bg-white p-5"
                  >
                    <div
                      className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${accentBg} ${accentText}`}
                    >
                      {f.icon}
                    </div>
                    <h3 className="font-heading text-base font-bold text-charcoal">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal/60">
                      {f.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
