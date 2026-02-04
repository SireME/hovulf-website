import Image from "next/image";

const highlights = [
  "500+ girls and women empowered through livelihoods programs",
  "10+ communities reached with health and protection services",
  "15+ livelihood projects launched with local partners",
  "30+ health and protection activities delivered annually",
];

export default function ImpactPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <h1 className="mb-6 text-4xl font-bold">Impact</h1>

        <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
            alt="Landscape representing community impact"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
            priority
          />
        </div>

        <p className="mb-10 text-lg text-gray-700">
          Our impact is measured in stronger livelihoods, healthier families,
          and safer communities. We report outcomes with partners and local
          leaders to ensure accountability and lasting change.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
