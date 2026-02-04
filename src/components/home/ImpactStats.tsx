import Image from "next/image";

export default function ImpactStats() {
  const stats = [
    { label: "Girls & Women Empowered", value: "500+" },
    { label: "Communities Reached", value: "10+" },
    { label: "Livelihood Projects", value: "15+" },
    { label: "Health & Protection Activities", value: "30+" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Impact that grows with every community partnership
          </h2>
          <p className="mt-4 text-gray-600">
            We collaborate with local leaders to deliver measurable change,
            ensuring every project expands opportunities and protects dignity.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-8 h-20 w-20 rounded-full bg-emerald-200/60 blur-2xl" />
          <div className="absolute bottom-6 right-0 h-24 w-24 rounded-full bg-pink-200/60 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Village landscape representing community impact"
              width={820}
              height={520}
              className="animate-fade-up h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
