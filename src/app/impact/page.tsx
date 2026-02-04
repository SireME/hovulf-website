import Image from "next/image";

const highlights = [
  {
    text: "500+ girls and women empowered through livelihoods programs",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
    alt: "Women empowered through livelihoods initiatives",
  },
  {
    text: "10+ communities reached with health and protection services",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    alt: "Community health outreach and protection services",
  },
  {
    text: "15+ livelihood projects launched with local partners",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    alt: "Partners collaborating on livelihood projects",
  },
  {
    text: "30+ health and protection activities delivered annually",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    alt: "Health and protection activity planning session",
  },
];

export default function ImpactPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="relative mb-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
            alt="Landscape representing community impact"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-white/70 px-6 py-2 text-center text-3xl font-bold text-gray-900 backdrop-blur">
              Impact
            </div>
          </div>
        </div>

        <p className="mb-10 text-lg text-gray-700">
          Our impact is measured in stronger livelihoods, healthier families,
          and safer communities. We report outcomes with partners and local
          leaders to ensure accountability and lasting change.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.text}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              <div className="relative h-40">
                <Image src={item.image} alt={item.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-gray-700">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
