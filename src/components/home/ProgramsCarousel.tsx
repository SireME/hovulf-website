"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/assets/images/image9.jpeg",
    alt: "HIV sensitization session",
    label: "Health outreach teams",
  },
  {
    src: "/assets/images/image6.jpeg",
    alt: "Sanitary pad distribution outreach",
    label: "Community protection programs",
  },
  {
    src: "/assets/images/image3.jpeg",
    alt: "Dry fish training group activity",
    label: "Livelihoods & skills training",
  },
];

export default function ProgramsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl shadow-xl">
      <div className="relative h-[320px] sm:h-[380px]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/40 via-transparent to-sky-500/40" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 rounded-full bg-white/80 px-4 py-1 text-xs font-semibold text-gray-700 shadow-lg backdrop-blur">
        {slides[activeIndex].label}
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
