"use client";

import { useState, useEffect } from "react";

type FocusKey = "vision" | "mission";

const statements: Record<FocusKey, { title: string; text: string }> = {
  vision: {
    title: "Our Vision",
    text: "A community where every vulnerable person lives in dignity, safety, and equality, with access to opportunities for a better life.",
  },
  mission: {
    title: "Our Mission",
    text: "To empower and support vulnerable groups—particularly girls, women, children, and the elderly—through inclusive programs that promote health, education, protection, gender equality, and sustainable livelihoods.",
  },
};

export default function VisionMissionCards() {
  const [active, setActive] = useState<FocusKey | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    
    if (active) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision Card */}
          <button
            type="button"
            onClick={() => setActive("vision")}
            className="group relative overflow-hidden rounded-none text-left transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-primary/30"
          >
            <div className="grid md:grid-cols-2 min-h-[400px]">
              {/* Left side - Text */}
              <div className="bg-white p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  See the future we are working to create for every vulnerable person.
                </p>
                <div className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  READ MORE
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Right side - Image with Blue Overlay */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                  alt="Vision"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/80"></div>
              </div>
            </div>
          </button>

          {/* Mission Card */}
          <button
            type="button"
            onClick={() => setActive("mission")}
            className="group relative overflow-hidden rounded-none text-left transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-primary/30"
          >
            <div className="grid md:grid-cols-2 min-h-[400px]">
              {/* Left side - Text */}
              <div className="bg-white p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Understand how we deliver meaningful change every day through inclusive programs.
                </p>
                <div className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  READ MORE
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Right side - Image with Blue Overlay */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80"
                  alt="Mission"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-700/80"></div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  {active === "vision" ? (
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
                <h3 id="dialog-title" className="text-3xl font-bold text-slate-900">
                  {statements[active].title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close dialog"
              >
                ✕ Close
              </button>
            </div>
            <p className="text-lg leading-relaxed text-slate-700">
              {statements[active].text}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}