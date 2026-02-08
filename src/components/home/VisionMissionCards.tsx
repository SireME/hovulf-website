"use client";

import { useState } from "react";

type FocusKey = "vision" | "mission";

const statements: Record<FocusKey, { title: string; text: string }> = {
  vision: {
    title: "Vision Statement",
    text: "A community where every vulnerable person lives in dignity, safety, and equality, with access to opportunities for a better life.",
  },
  mission: {
    title: "Mission Statement",
    text: "To empower and support vulnerable groups—particularly girls, women, children, and the elderly—through inclusive programs that promote health, education, protection, gender equality, and sustainable livelihoods.",
  },
};

export default function VisionMissionCards() {
  const [active, setActive] = useState<FocusKey | null>(null);

  return (
    <section className="bg-[#f6f3ff] pb-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            What we stand for
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Vision & Mission</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={() => setActive("vision")}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">Our Vision</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">Tap to view full vision</p>
              <p className="mt-2 text-sm text-slate-600">See the future we are working to create.</p>
            </button>

            <button
              type="button"
              onClick={() => setActive("mission")}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">Our Mission</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">Tap to view full mission</p>
              <p className="mt-2 text-sm text-slate-600">Understand how we deliver change every day.</p>
            </button>
          </div>
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-3xl font-bold text-slate-900">{statements[active].title}</h3>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="rounded-md border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">{statements[active].text}</p>
          </div>
        </div>
      )}
    </section>
  );
}
