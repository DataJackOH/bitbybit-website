import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";

const steps = [
  {
    number: "1",
    title: "Set Your Goals",
    description:
      "Pick the bodyweight skills you want to master — pull-ups, push-ups, squats, or handstands.",
  },
  {
    number: "2",
    title: "Train Smart",
    description:
      "Follow workouts that adapt to your performance and progress automatically.",
  },
  {
    number: "3",
    title: "Track Progress",
    description:
      "See personal records, streaks, milestones, and real improvement over time.",
  },
];

const features = [
  {
    icon: "🎯",
    title: "Personalized Plans",
    description:
      "Workouts that adapt to YOUR fitness level — not a one-size-fits-all program.",
  },
  {
    icon: "📈",
    title: "Real-Time Adaptation",
    description:
      "The app adjusts your next workout based on how you performed today.",
  },
  {
    icon: "🏆",
    title: "Achievement System",
    description:
      "Earn badges and hit milestones that keep you motivated and consistent.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
            <div className="max-w-xl text-center md:text-left">
              <h1 className="font-heading text-4xl font-bold leading-tight text-charcoal md:text-5xl lg:text-6xl">
                Master Calisthenics,{" "}
                <span className="text-sage">Your Way</span>
              </h1>
              <p className="mt-5 text-lg text-charcoal/60">
                Personalized workout plans that adapt to your progress. No
                trainer needed.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <span className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-3 text-sm font-semibold text-white">
                  Coming Soon to the App Store
                </span>
              </div>
            </div>

            {/* Phone mockup placeholder */}
            <div className="flex h-[480px] w-[240px] shrink-0 items-center justify-center rounded-[2.5rem] border-2 border-charcoal/10 bg-white shadow-lg">
              <p className="px-6 text-center text-sm text-charcoal/30">
                Screenshots coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold text-charcoal">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold text-charcoal">
            Why bit by bit?
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/features"
              className="text-sm font-semibold text-sage transition-colors hover:text-sage-dark"
            >
              See all features &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
