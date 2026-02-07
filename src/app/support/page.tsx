import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with bit by bit. Find answers to frequently asked questions.",
};

const faqs = [
  {
    question: "What is bit by bit?",
    answer:
      "bit by bit is a calisthenics training app that creates personalized workout plans based on your fitness level and goals. Whether you want to do your first pull-up or master advanced bodyweight skills, the app builds a plan just for you and adapts it as you progress.",
  },
  {
    question: "How much does it cost?",
    answer:
      "bit by bit requires a subscription to use. We offer a free trial so you can try the full experience before committing. Subscriptions are billed through the Apple App Store — you can view pricing and trial details on the subscription page within the app.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "Most exercises require no equipment at all — just your body and some floor space. For pull-up training, you'll need access to a pull-up bar (a park bar, doorframe bar, or gym bar all work). That's it.",
  },
  {
    question: "How does the app personalize workouts?",
    answer:
      "When you start, you tell the app your goals and current ability. The app then generates a plan tailored to you. After each workout, the progression engine analyzes your performance and adjusts future sessions — making them harder when you're ready, and easier when you need recovery.",
  },
  {
    question: "Can I use it offline?",
    answer:
      "Yes! bit by bit is offline-first. Your workout data is always stored on your device first, so you can train anywhere without an internet connection. When you're online and signed in, your data syncs to the cloud so it's backed up and available across devices.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can delete your account from Profile > Settings within the app. This permanently removes your profile, workout history, and progress data from our servers, along with your authentication account. Remember to cancel your subscription through Apple Settings before deleting your account.",
  },
  {
    question: "What devices are supported?",
    answer:
      "bit by bit is launching on iOS first (iPhone). Android support is planned for a future release.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* FAQ Section */}
      <section className="px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-charcoal md:text-5xl">
              Support
            </h1>
            <p className="mt-5 text-lg text-charcoal/60">
              Find answers to common questions below.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-charcoal">
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              {faqs.map((faq) => (
                <FAQAccordion
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
