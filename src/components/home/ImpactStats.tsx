import Image from "next/image";

export default function ImpactStats() {
  const stats = [
    { label: "Girls & Women Empowered", value: "500+" },
    { label: "Communities Reached", value: "10+" },
    { label: "Livelihood Projects", value: "15+" },
    { label: "Health & Protection Activities", value: "30+" },
  ];

  return (
    <section className="bg-[#eef7ff] py-16">
      <div className="container mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Proven field impact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            Results that grow with every partnership
          </h2>
          <p className="mt-4 text-gray-600">
            We collaborate with local leaders to deliver measurable change,
            ensuring every project expands opportunities and protects dignity.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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
              src="/assets/images/image9.jpeg"
              alt="Community health sensitization session"
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
