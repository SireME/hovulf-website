import Image from "next/image";
import Link from "next/link";
import VisionMission from "@/components/about/VisionMission";
import Values from "@/components/about/Values";
import FocusAreas from "@/components/about/FocusAreas";
import Geography from "@/components/about/Geography";
import Partners from "@/components/about/Partners";

export default function AboutPage() {
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

  // Stats data
  const quickStats = [
    {
      value: "2020",
      label: "Established",
      icon: "📅",
      color: "from-blue-600 to-blue-700"
    },
    {
      value: "500+",
      label: "Lives Impacted",
      icon: "👥",
      color: "from-purple-600 to-purple-700"
    },
    {
      value: "10+",
      label: "Communities",
      icon: "🏘️",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      value: "100%",
      label: "Transparency",
      icon: "✓",
      color: "from-orange-600 to-orange-700"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50/30 to-white pt-32 pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto max-w-7xl px-6">
          
          {/* Header Content */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="gradient" icon="✨">
              About HOVULF
            </Badge>
            
            <h1 className="mt-6 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Empowering Vulnerable
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Communities in Cameroon
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Hope for the Vulnerable Foundation (HOVULF) is a community-based, non-profit organization dedicated to improving lives through inclusive, community-driven interventions.
            </p>

            {/* Quick Stats Bar */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl bg-white border-2 border-slate-100 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <p className="text-2xl font-black text-gray-900 group-hover:text-white transition-colors duration-300">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-600 group-hover:text-white/90 transition-colors duration-300 font-semibold">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative max-w-6xl mx-auto">
            {/* Decorative blobs around image */}
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-300/30 blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-purple-300/30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80"
                alt="HOVULF team engaging with community members"
                width={1400}
                height={600}
                className="h-[400px] md:h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Creative Overlay Layers */}
              
              {/* Base gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-purple-900/10 to-transparent" />
              
              {/* Vignette effect */}
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(17, 24, 39, 0.3) 100%)'
              }} />
              
              {/* Color enhancement overlay */}
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
              
              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
              
              {/* Info Badge Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                          Our Mission
                        </p>
                      </div>
                      <p className="text-gray-900 font-bold text-lg leading-tight">
                        Supporting vulnerable communities with dignity and sustainable solutions
                      </p>
                    </div>
                    <Link
                      href="/get-involved"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-bold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Get Involved
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

      {/* Main Content Sections */}
      <div className="bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <VisionMission />
          <Values />
          <FocusAreas />
          <Geography />
          <Partners />
        </div>
      </div>
    </>
  );
}