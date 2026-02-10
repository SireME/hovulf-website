import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    text: "500+ girls and women empowered through livelihoods programs",
    image: "/assets/images/image2.jpeg",
    alt: "Women empowered through livelihoods initiatives",
    icon: "👥",
    color: "blue",
    metric: "500+"
  },
  {
    text: "10+ communities reached with health and protection services",
    image: "/assets/images/image9.jpeg",
    alt: "Community health outreach and protection services",
    icon: "🏘️",
    color: "purple",
    metric: "10+"
  },
  {
    text: "15+ livelihood projects launched with local partners",
    image: "/assets/images/image11.jpeg",
    alt: "Partners collaborating on livelihood projects",
    icon: "💼",
    color: "emerald",
    metric: "15+"
  },
  {
    text: "30+ health and protection activities delivered annually",
    image: "/assets/images/image6.jpeg",
    alt: "Health and protection activity planning session",
    icon: "❤️",
    color: "orange",
    metric: "30+"
  },
];

const impactAreas = [
  {
    title: "Livelihoods & Economic Empowerment",
    description: "Sustainable income opportunities transforming families",
    icon: "💰",
    stats: [
      { value: "500+", label: "Women trained" },
      { value: "15+", label: "Projects launched" },
      { value: "100+", label: "Poultry units" }
    ]
  },
  {
    title: "Health & Nutrition",
    description: "Essential health services reaching vulnerable communities",
    icon: "🏥",
    stats: [
      { value: "30+", label: "Health activities" },
      { value: "1000+", label: "People reached" },
      { value: "10+", label: "Communities" }
    ]
  },
  {
    title: "Protection & Safety",
    description: "Creating safe spaces and preventing gender-based violence",
    icon: "🛡️",
    stats: [
      { value: "500+", label: "Protected" },
      { value: "20+", label: "Safe spaces" },
      { value: "100%", label: "Follow-up" }
    ]
  }
];

export default function ImpactPage() {
  // Inline Badge Component
  const Badge = ({ 
    children, 
    variant = 'primary',
    icon
  }: { 
    children: React.ReactNode; 
    variant?: 'primary' | 'success' | 'gradient';
    icon?: React.ReactNode;
  }) => {
    const variants = {
      primary: 'bg-blue-100 text-blue-700 border-blue-200',
      success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent',
    };

    return (
      <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wider ${variants[variant]}`}>
        {icon && icon}
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
    },
    purple: {
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      lightBg: 'bg-purple-50',
      gradient: 'from-purple-600 to-purple-700',
    },
    emerald: {
      bg: 'bg-emerald-600',
      text: 'text-emerald-600',
      lightBg: 'bg-emerald-50',
      gradient: 'from-emerald-600 to-emerald-700',
    },
    orange: {
      bg: 'bg-orange-600',
      text: 'text-orange-600',
      lightBg: 'bg-orange-50',
      gradient: 'from-orange-600 to-orange-700',
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/30 pt-32 pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto max-w-7xl px-6">
          
          {/* Header Content */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="gradient" icon="📊">
              Our Impact
            </Badge>
            
            <h1 className="mt-6 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Measuring Success Through
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Real Community Change
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our impact is measured in stronger livelihoods, healthier families, and safer communities. We report outcomes with partners and local leaders to ensure accountability and lasting change.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="relative max-w-6xl mx-auto">
            {/* Decorative blobs around image */}
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-300/30 blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-purple-300/30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="/assets/images/image3.jpeg"
                alt="Community impact and transformation"
                width={1600}
                height={600}
                className="h-[400px] md:h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Creative Overlay Layers */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-purple-900/10 to-transparent" />
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(17, 24, 39, 0.3) 100%)'
              }} />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
              
              {/* Impact Stats Overlay - Top */}
              <div className="absolute top-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg text-center">
                    <p className="text-2xl font-black text-blue-600">500+</p>
                    <p className="text-xs text-gray-600 font-semibold">Empowered</p>
                  </div>
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg text-center">
                    <p className="text-2xl font-black text-purple-600">10+</p>
                    <p className="text-xs text-gray-600 font-semibold">Communities</p>
                  </div>
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg text-center">
                    <p className="text-2xl font-black text-emerald-600">100%</p>
                    <p className="text-xs text-gray-600 font-semibold">Transparent</p>
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                          Evidence-Based Results
                        </p>
                        <p className="text-gray-900 font-bold text-lg">
                          Tracked & Verified Impact
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/donate"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-bold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Amplify Our Impact
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="primary">Key Achievements</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Transforming Lives, Building Futures
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Concrete results from our community-driven interventions
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-8 md:grid-cols-2 mb-20">
            {highlights.map((item, index) => (
              <div
                key={item.text}
                className="group relative overflow-hidden rounded-3xl border-2 border-slate-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.alt} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-900/20 via-transparent to-transparent`} />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`h-14 w-14 rounded-2xl ${colorClasses[item.color as keyof typeof colorClasses].bg} flex items-center justify-center text-3xl shadow-lg`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Metric Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                      <p className={`text-2xl font-black ${colorClasses[item.color as keyof typeof colorClasses].text}`}>
                        {item.metric}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 ${colorClasses[item.color as keyof typeof colorClasses].lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="success">Impact Breakdown</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Where We Make a Difference
            </h2>
          </div>

          {/* Impact Areas Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {impactAreas.map((area, index) => (
              <div
                key={area.title}
                className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{area.icon}</div>
                
                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {area.description}
                </p>

                {/* Stats */}
                <div className="space-y-3">
                  {area.stats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors">
                      <span className="text-sm text-gray-600 font-medium">{stat.label}</span>
                      <span className="text-xl font-black text-blue-600">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 p-12 text-center shadow-2xl">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 border-4 border-white rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-4 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-white rounded-full"></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Help Us Grow Our Impact
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Every contribution helps us reach more communities and create lasting change for vulnerable populations.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link 
                    href="/donate" 
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Make a Donation
                  </Link>
                  <Link 
                    href="/annual-reports" 
                    className="inline-flex items-center gap-2 rounded-full bg-transparent border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Annual Reports
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}