import type { Metadata } from "next";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all the features of bit by bit — personalized plans, real-time adaptation, progress tracking, achievements, and more.",
};

const features = [
  {
    icon: "🎯",
    title: "Personalized Plans",
    description:
      "Every workout is built around YOUR current fitness level. No cookie-cutter programs — the app meets you where you are and grows with you.",
  },
  {
    icon: "💪",
    title: "Goal-Focused Training",
    description:
      "Pick the bodyweight skills you want to master — pull-ups, push-ups, squats, dips, or handstands. Your plan is built around your goals.",
  },
  {
    icon: "📈",
    title: "Real-Time Adaptation",
    description:
      "Crushed your workout? The app makes the next one harder. Struggled today? It dials things back. Your plan evolves with every session.",
  },
  {
    icon: "🏆",
    title: "Progress Tracking",
    description:
      "Charts, personal records, streaks, and milestone badges. See exactly how far you've come and what's next.",
  },
  {
    icon: "⏱️",
    title: "Rest Timer",
    description:
      "Built-in rest timer with audio cues so you can focus on form without watching the clock between sets.",
  },
  {
    icon: "📴",
    title: "Offline First",
    description:
      "All your workouts and data are stored on your device. Train anywhere — park, gym, or home — with or without internet.",
  },
  {
    icon: "🏅",
    title: "Achievement System",
    description:
      "Earn badges for hitting milestones like your first pull-up, a 30-day streak, or logging 100 workouts. Stay motivated by celebrating wins.",
  },
  {
    icon: "📖",
    title: "Exercise Library",
    description:
      "24+ exercises with detailed instructions for every movement. Learn proper form so you can train safely and effectively.",
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
