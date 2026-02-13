import Image from "next/image";

const impacts = [
  {
    amount: "10,000 CFA",
    usd: "~$17",
    description:
      "Sanitary pads for girls, basic nutrition support for a vulnerable person.",
    icon: "🎀",
    color: "blue",
    items: ["Sanitary pads", "Basic nutrition", "Essential supplies"],
    image: "/assets/images/image6.jpeg",
    alt: "Community support and protection activities"
  },
  {
    amount: "25,000 CFA",
    usd: "~$45",
    description:
      "Training materials for income-generating activities or poultry feed for a girls' group.",
    icon: "📚",
    color: "purple",
    items: ["Training materials", "Poultry feed", "Group supplies"],
    image: "/assets/images/image2.jpeg",
    alt: "Livelihood training and skills development"
  },
  {
    amount: "50,000 CFA",
    usd: "~$90",
    description:
      "Startup kit for one beneficiary in poultry farming or livelihood skills.",
    icon: "🌱",
    color: "emerald",
    items: ["Startup kit", "Poultry farming", "Livelihood tools"],
    image: "/assets/images/image11.jpeg",
    alt: "Poultry farming project startup"
  },
  {
    amount: "100,000+ CFA",
    usd: "~$180+",
    description:
      "Scale up projects, support education for young mothers and orphans, or fund research.",
    icon: "🚀",
    color: "orange",
    items: ["Scale projects", "Education support", "Research funding"],
    image: "/assets/images/image9.jpeg",
    alt: "Community health and education programs"
  },
];

export default function DonationImpact() {
  // Inline Badge Component
  const Badge = ({ 
    children, 
    variant = 'primary'
  }: { 
    children: React.ReactNode; 
    variant?: 'primary' | 'gradient';
  }) => {
    const variants = {
      primary: 'bg-blue-100 text-blue-700 border-blue-200',
      gradient: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent',
    };

    return (
      <span className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${variants[variant]}`}>
        {children}
      </span>
    );
  };

  const colorClasses = {
    blue: {
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      lightBg: 'bg-blue-50',
      gradient: 'from-blue-600 to-blue-700',
      border: 'border-blue-200',
    },
    purple: {
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      lightBg: 'bg-purple-50',
      gradient: 'from-purple-600 to-purple-700',
      border: 'border-purple-200',
    },
    emerald: {
      bg: 'bg-emerald-600',
      text: 'text-emerald-600',
      lightBg: 'bg-emerald-50',
      gradient: 'from-emerald-600 to-emerald-700',
      border: 'border-emerald-200',
    },
    orange: {
      bg: 'bg-orange-600',
      text: 'text-orange-600',
      lightBg: 'bg-orange-50',
      gradient: 'from-orange-600 to-orange-700',
      border: 'border-orange-200',
    },
  };

  return (
    <div className="mb-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge variant="gradient">Impact Breakdown</Badge>
        <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
          What Your Donation Supports
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every contribution makes a tangible difference in vulnerable communities
        </p>
      </div>

      {/* Impact Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {impacts.map((impact, index) => (
          <div
            key={impact.amount}
            className="group relative overflow-hidden rounded-3xl border-2 border-slate-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={impact.image}
                alt={impact.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-br from-${impact.color}-900/20 via-transparent to-transparent`} />
              
              {/* Icon Badge */}
              <div className="absolute top-4 left-4">
                <div className={`h-14 w-14 rounded-2xl ${colorClasses[impact.color as keyof typeof colorClasses].bg} flex items-center justify-center text-3xl shadow-lg`}>
                  {impact.icon}
                </div>
              </div>

              {/* Tier Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="primary">Tier {index + 1}</Badge>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Amount */}
              <div className="mb-4">
                <h3 className={`text-3xl font-black ${colorClasses[impact.color as keyof typeof colorClasses].text} mb-1`}>
                  {impact.amount}
                </h3>
                <p className="text-sm font-semibold text-gray-500">{impact.usd}</p>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {impact.description}
              </p>

              {/* Items List */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Includes:</p>
                {impact.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${colorClasses[impact.color as keyof typeof colorClasses].bg}`}></div>
                    <p className="text-sm text-gray-600 font-medium">{item}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full flex items-center justify-center gap-2 rounded-lg border-2 ${colorClasses[impact.color as keyof typeof colorClasses].border} ${colorClasses[impact.color as keyof typeof colorClasses].text} px-6 py-3 font-bold hover:${colorClasses[impact.color as keyof typeof colorClasses].bg} hover:text-white transition-all duration-200 group-hover:gap-3`}
              >
                Donate {impact.amount}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 ${colorClasses[impact.color as keyof typeof colorClasses].lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
          </div>
        ))}
      </div>

      {/* Custom Amount CTA */}
      <div className="mt-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 p-8 md:p-12 text-center shadow-2xl">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-4 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Want to Donate a Custom Amount?
              </h3>
            </div>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Every contribution, regardless of size, makes a meaningful difference in our communities.
            </p>
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-purple-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Choose Your Amount
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="font-semibold">Secure Donation</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="font-semibold">Tax Deductible</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="font-semibold">100% Transparent</span>
        </div>
      </div>
    </div>
  );
}