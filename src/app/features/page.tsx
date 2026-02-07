import type { Metadata } from "next";
import {
  Target,
  Dumbbell,
  TrendingUp,
  Trophy,
  Timer,
  WifiOff,
  Medal,
  BookOpen,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Features — Calisthenics Training App",
  description:
    "Explore all the features of bit by bit — personalized plans, real-time adaptation, progress tracking, achievements, and more.",
};

const features = [
  {
    icon: <Target size={24} />,
    title: "Personalized Plans",
    description:
      "Every workout is built around your current fitness level. No cookie-cutter programs — the app meets you where you are and progresses with you.",
  },
  {
    icon: <Dumbbell size={24} />,
    title: "Goal-Focused Training",
    description:
      "Choose the bodyweight skills you want to develop — pull-ups, push-ups, squats, dips, or handstands. Your plan is structured around your goals.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Real-Time Adaptation",
    description:
      "Performed well? The next session increases the challenge. Had a tough day? It adjusts accordingly. Your plan evolves with every workout.",
  },
  {
    icon: <Trophy size={24} />,
    title: "Progress Tracking",
    description:
      "Charts, personal records, streaks, and milestone badges. See exactly how far you've come and what's next.",
  },
  {
    icon: <Timer size={24} />,
    title: "Rest Timer",
    description:
      "Built-in rest timer with audio cues so you can focus on form without watching the clock between sets.",
  },
  {
    icon: <WifiOff size={24} />,
    title: "Works Offline",
    description:
      "Your data is stored on your device and synced to the cloud when signed in. Train anywhere — park, gym, or home — with or without an internet connection.",
  },
  {
    icon: <Medal size={24} />,
    title: "Achievement System",
    description:
      "Earn badges for hitting milestones like your first pull-up, a 30-day streak, or logging 100 workouts. Celebrate progress along the way.",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Exercise Library",
    description:
      "Hundreds of exercises with detailed instructions for every movement. Learn proper form so you can train safely and effectively.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 md:pb-24 md:pt-28">
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

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
