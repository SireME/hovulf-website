import Image from "next/image";
import Link from "next/link";
import { programSections } from "@/content/siteAssets";

const programs = [
  {
    title: "Health & Nutrition",
    description:
      "Community health outreach, maternal care, SRHR education, and nutrition support for vulnerable households.",
    image: "/assets/images/image9.jpeg",
    alt: "Health outreach team supporting community members",
    icon: "❤️",
    color: "blue",
    stats: { value: "30+", label: "Activities" }
  },
  {
    title: "Livelihoods & Economic Empowerment",
    description:
      "Income-generating activities including poultry farming, vocational skills, and entrepreneurship for women and youth.",
    image: "/assets/images/image2.jpeg",
    alt: "Women participating in livelihood skills training",
    icon: "💼",
    color: "purple",
    stats: { value: "15+", label: "Projects" }
  },
  {
    title: "Protection & Gender Equality",
    description:
      "Prevention of gender-based violence, child safeguarding, and safe spaces for girls and women.",
    image: "/assets/images/image6.jpeg",
    alt: "Community protection program meeting",
    icon: "🛡️",
    color: "emerald",
    stats: { value: "500+", label: "Protected" }
  },
];

const allActivities = programSections.flatMap((section) => section.items);

export default function ProgramsPage() {
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
      border: 'border-blue-200',
      gradient: 'from-blue-600 to-blue-700',
    },
    purple: {
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      lightBg: 'bg-purple-50',
      border: 'border-purple-200',
      gradient: 'from-purple-600 to-purple-700',
    },
    emerald: {
      bg: 'bg-emerald-600',
      text: 'text-emerald-600',
      lightBg: 'bg-emerald-50',
      border: 'border-emerald-200',
      gradient: 'from-emerald-600 to-emerald-700',
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50/30 to-white pt-32 pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto max-w-7xl px-6">
          
          {/* Header Content */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="gradient" icon="🌟">
              Our Programs
            </Badge>
            
            <h1 className="mt-6 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Building Resilience Through
              <span className="block mt-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                Community-Driven Solutions
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our programs are designed with communities to meet urgent needs while building long-term resilience and opportunity for vulnerable populations.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="relative max-w-6xl mx-auto">
            {/* Decorative blobs around image */}
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-emerald-300/30 blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-teal-300/30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="/assets/images/image3.jpeg"
                alt="HOVULF program beneficiaries during training"
                width={1400}
                height={600}
                className="h-[400px] md:h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Creative Overlay Layers */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/30 via-teal-900/10 to-transparent" />
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(17, 24, 39, 0.3) 100%)'
              }} />
              <div className="absolute inset-0 bg-emerald-600/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
              
              {/* Program Count Badge */}
              <div className="absolute top-8 right-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl">
                  <div className="text-center">
                    <p className="text-3xl font-black text-emerald-600">3</p>
                    <p className="text-xs text-gray-600 font-semibold">Core Programs</p>
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                          Impact Focus
                        </p>
                        <p className="text-gray-900 font-bold text-lg">
                          Health • Livelihoods • Protection
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/get-involved"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 font-bold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Support Our Work
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

      {/* Main Programs Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="primary">Core Programs</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Our Three Pillars of Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs addressing the most critical needs in our communities
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-20">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="group relative overflow-hidden rounded-3xl border-2 border-slate-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlays */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-${program.color}-900/60 via-transparent to-transparent`} />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`h-14 w-14 rounded-2xl ${colorClasses[program.color as keyof typeof colorClasses].bg} flex items-center justify-center text-3xl shadow-lg`}>
                      {program.icon}
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                      <p className={`text-lg font-black ${colorClasses[program.color as keyof typeof colorClasses].text}`}>
                        {program.stats.value}
                      </p>
                      <p className="text-xs text-gray-600 font-semibold">
                        {program.stats.label}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {program.description}
                  </p>
                  
                  <div className={`inline-flex items-center gap-2 font-semibold ${colorClasses[program.color as keyof typeof colorClasses].text} group-hover:gap-3 transition-all`}>
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 ${colorClasses[program.color as keyof typeof colorClasses].lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Activities Section */}
      <section id="all-activities" className="scroll-mt-20 bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="success">Complete Catalog</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              All Program Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the full range of our community-driven interventions and initiatives
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allActivities.map((item, index) => (
              <div 
                key={item.image} 
                className="group overflow-hidden rounded-2xl bg-white border-2 border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}