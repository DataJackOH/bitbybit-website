import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Dumbbell,
  TrendingUp,
  Timer,
  PlayCircle,
  Trophy,
  SlidersHorizontal,
  ArrowLeftRight,
  ClipboardList,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Features — Calisthenics Training App",
  description:
    "Explore all the features of bit by bit — personalized plans, real-time adaptation, progress tracking, achievements, and more.",
  alternates: {
    canonical: "/features",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://bitbybit.fit",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Features",
      item: "https://bitbybit.fit/features",
    },
  ],
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
    icon: <PlayCircle size={20} />,
    title: "Exercise Videos",
    description:
      "Video demo for every exercise so you can check form.",
    accent: "coral" as const,
  },
  {
    icon: <SlidersHorizontal size={20} />,
    title: "Training Setup",
    description:
      "Equipment, schedule, and injuries — the app builds around your real life.",
    accent: "sage" as const,
  },
  {
    icon: <Trophy size={20} />,
    title: "Personal Records",
    description:
      "Tracks your best set for every exercise.",
    accent: "coral" as const,
  },
  {
    icon: <ClipboardList size={20} />,
    title: "Workout History",
    description:
      "See every past workout — exercises, sets, reps, and when you trained.",
    accent: "sage" as const,
  },
  {
    icon: <Target size={20} />,
    title: "Goal Tracking",
    description:
      "Set a skill goal and watch your progress toward it.",
    accent: "coral" as const,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-4xl font-bold text-charcoal md:text-5xl">
              Everything you need to master calisthenics
            </h1>
            <p className="mt-5 text-lg text-charcoal/70">
              Built for beginners and intermediates who want structured,
              adaptive training — no equipment or coach required.
            </p>
          </div>

          {/* Hero Feature 1 — Personalized Plans */}
          <div className="mt-20">
            <div className="flex flex-col items-center gap-10 md:flex-row">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold text-sage">
                  <Target size={14} />
                  Core Feature
                </div>
                <h2 className="mt-4 font-heading text-2xl font-bold text-charcoal md:text-3xl">
                  Personalized Plans
                </h2>
                <p className="mt-4 leading-relaxed text-charcoal/70">
                  Every workout is built around your current fitness level. No
                  cookie-cutter programs — the app meets you where you are and
                  progresses with you. Choose from pull-ups, push-ups, squats,
                  dips, or handstands and get a plan structured around your goals.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="mx-auto max-w-[280px] overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/screenshots/workout.png"
                    alt="Personalized workout plan showing exercises tailored to your level"
                    width={603}
                    height={1191}
                    className="w-full"
                    sizes="(max-width: 768px) 280px, 280px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Feature 2 — Real-Time Adaptation */}
          <div className="mt-24">
            <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
              <div className="md:w-1/2">
                <div className="mx-auto max-w-[280px] overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/screenshots/progress.png"
                    alt="Goals screen showing progression, top movements, and muscles worked"
                    width={603}
                    height={1191}
                    className="w-full"
                    sizes="(max-width: 768px) 280px, 280px"
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
                <p className="mt-4 leading-relaxed text-charcoal/70">
                  Performed well? The next session increases the challenge. Had a
                  tough day? It adjusts accordingly. Your plan evolves with every
                  workout — tracking streaks, personal records, and weekly volume
                  so you can see real progress.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Feature 3 — Goal-Focused Progression */}
          <div className="mt-24">
            <div className="flex flex-col items-center gap-10 md:flex-row">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold text-sage">
                  <Dumbbell size={14} />
                  Progression System
                </div>
                <h2 className="mt-4 font-heading text-2xl font-bold text-charcoal md:text-3xl">
                  From Zero to Pull-Up
                </h2>
                <p className="mt-4 leading-relaxed text-charcoal/70">
                  Every skill has a progression chain. Can&apos;t do a pull-up
                  yet? Start with dead hangs and scapular pulls, then build
                  through rows and negatives. Too hard? Swap to an easier
                  alternative. Too easy? Level up. The app knows exactly what
                  comes next.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="mx-auto max-w-[280px] overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/screenshots/swap.png"
                    alt="Push-ups progress screen showing bit goals progression chain and workout stats"
                    width={603}
                    height={1191}
                    className="w-full"
                    sizes="(max-width: 768px) 280px, 280px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Feature 4 — Swap Exercises */}
          <div className="mt-24">
            <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
              <div className="md:w-1/2">
                <div className="mx-auto flex max-w-[560px] gap-4">
                  <div className="flex-1 overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src="/screenshots/workout-preview-swap.png"
                      alt="Workout preview with Swap button visible on an exercise"
                      width={603}
                      height={1191}
                      className="w-full"
                      sizes="(max-width: 768px) 140px, 260px"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src="/screenshots/swap-exercise.png"
                      alt="Swap Exercise screen showing easier and harder alternatives with difficulty labels"
                      width={603}
                      height={1191}
                      className="w-full"
                      sizes="(max-width: 768px) 140px, 260px"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
                  <ArrowLeftRight size={14} />
                  Flexibility
                </div>
                <h2 className="mt-4 font-heading text-2xl font-bold text-charcoal md:text-3xl">
                  Swap any exercise, instantly
                </h2>
                <p className="mt-4 leading-relaxed text-charcoal/70">
                  Too hard? Too easy? Don&apos;t have the equipment? Swipe any
                  exercise to see easier and harder alternatives — each with
                  difficulty labels and rep counts. Pick the one that fits and
                  keep going.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Feature 5 — Exercise Demos */}
          <div className="mt-24">
            <div className="flex flex-col items-center gap-10 md:flex-row">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold text-sage">
                  <PlayCircle size={14} />
                  Exercise Library
                </div>
                <h2 className="mt-4 font-heading text-2xl font-bold text-charcoal md:text-3xl">
                  Every exercise, explained
                </h2>
                <p className="mt-4 leading-relaxed text-charcoal/70">
                  Video demos, step-by-step instructions, and muscles worked for
                  all 525 exercises. Never wonder if your form is right — just
                  tap any movement and see exactly how it&apos;s done.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="mx-auto max-w-[280px] overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/screenshots/exercise-detail.png"
                    alt="Standard Push-ups exercise detail showing video demo, step-by-step instructions, and difficulty level"
                    width={603}
                    height={1191}
                    className="w-full"
                    sizes="(max-width: 768px) 280px, 280px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Feature 6 — Workout Feedback */}
          <div className="mt-24">
            <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
              <div className="md:w-1/2">
                <div className="mx-auto max-w-[280px] overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/screenshots/workout-summary.png"
                    alt="Workout summary screen with difficulty rating, streak tracking, and session stats"
                    width={603}
                    height={1191}
                    className="w-full"
                    sizes="(max-width: 768px) 280px, 280px"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
                  <TrendingUp size={14} />
                  Smart Feedback
                </div>
                <h2 className="mt-4 font-heading text-2xl font-bold text-charcoal md:text-3xl">
                  Log it, rate it, improve
                </h2>
                <p className="mt-4 leading-relaxed text-charcoal/70">
                  After every workout, rate the difficulty — Too Easy, Just Right,
                  or Tough. The app uses your feedback to calibrate the next
                  session, tracks your streak, and keeps you moving in the right
                  direction.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Features — compact grid */}
          <div className="mt-24">
            <h2 className="text-center font-heading text-2xl font-bold text-charcoal">
              Built for Real Training
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {secondaryFeatures.map((f) => {
                const accentBg =
                  f.accent === "coral" ? "bg-coral/10" : "bg-sage/10";
                const accentText =
                  f.accent === "coral" ? "text-coral" : "text-sage";
                return (
                  <div
                    key={f.title}
                    className="rounded-xl border border-charcoal/[0.06] bg-white p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <div
                      className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${accentBg} ${accentText}`}
                    >
                      {f.icon}
                    </div>
                    <h3 className="font-heading text-base font-bold text-charcoal">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal/70">
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
