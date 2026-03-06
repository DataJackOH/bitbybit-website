"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/screenshots/home.png",
    alt: "Home screen showing today's workout, upcoming sessions, and your goals",
    title: "A plan built just for you",
    description:
      "Your workouts adapt to your goals, fitness level, and equipment \u2014 updated after every session.",
  },
  {
    src: "/screenshots/progress.png",
    alt: "Goals screen showing progression, top movements, and muscles worked",
    title: "Track real progress",
    description:
      "See your streaks, personal records, and progression toward skills like your first pull-up.",
  },
  {
    src: "/screenshots/explore.png",
    alt: "Exercise library with 525 exercises, search, and category filters",
    title: "525 exercises and counting",
    description:
      "Browse by category or difficulty. Every exercise has video demos and step-by-step instructions.",
  },
];

export default function AppShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-slide]");
    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (!bestEntry ||
              entry.intersectionRatio > bestEntry.intersectionRatio)
          ) {
            bestEntry = entry;
          }
        }
        if (bestEntry) {
          const index = Number(
            (bestEntry.target as HTMLElement).dataset.slide
          );
          setActiveIndex(index);
        }
      },
      { root: container, threshold: [0.3, 0.6, 0.9] }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector(`[data-slide="${index}"]`);
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  return (
    <>
      <div
        ref={scrollRef}
        tabIndex={0}
        role="region"
        aria-label="App screenshots"
        className="scrollbar-hide -mx-6 mt-16 flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 pb-4 md:pb-0"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            data-slide={i}
            className="min-w-[65vw] flex-shrink-0 snap-center md:min-w-0 md:flex-shrink"
          >
            <div className="flex flex-col items-center text-center">
              <div className="overflow-hidden rounded-3xl border border-charcoal/[0.06] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={603}
                  height={1191}
                  className="w-full"
                  sizes="(max-width: 768px) 65vw, 33vw"
                />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-charcoal md:mt-6 md:text-xl">
                {slide.title}
              </h3>
              <p className="mt-1 max-w-[60vw] text-xs leading-relaxed text-charcoal/70 md:mt-2 md:max-w-none md:text-sm">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicators — mobile only */}
      <div className="mt-4 flex justify-center gap-2 md:hidden" aria-hidden="true">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            onClick={() => scrollToSlide(i)}
            tabIndex={-1}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === i
                ? "w-4 bg-sage"
                : "w-1.5 bg-charcoal/20"
            }`}
          />
        ))}
      </div>
    </>
  );
}
