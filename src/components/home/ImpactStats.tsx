export default function ImpactStats() {
  const stats = [
    { label: "Girls & Women Empowered", value: "500+" },
    { label: "Communities Reached", value: "10+" },
    { label: "Livelihood Projects", value: "15+" },
    { label: "Health & Protection Activities", value: "30+" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

