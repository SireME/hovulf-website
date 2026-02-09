import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";

const projectImages = [
  {
    src: "/assets/images/image11.jpeg",
    alt: "Poultry farming project in action",
  },
  {
    src: "/assets/images/image12.jpeg",
    alt: "Community program support session",
  },
];

export default function ProjectsPage() {
  // Inline Badge Component
  const Badge = ({ 
    children, 
    variant = 'primary',
    icon
  }: { 
    children: React.ReactNode; 
    variant?: 'primary' | 'success' | 'gradient' | 'warning';
    icon?: React.ReactNode;
  }) => {
    const variants = {
      primary: 'bg-blue-100 text-blue-700 border-blue-200',
      success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      warning: 'bg-orange-100 text-orange-700 border-orange-200',
      gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent',
    };

    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${variants[variant]}`}>
        {icon && icon}
        {children}
      </span>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50/30 to-white pt-32 pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto max-w-7xl px-6">
          
          {/* Header Content */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="gradient" icon="🚀">
              Our Projects
            </Badge>
            
            <h1 className="mt-6 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Transforming Lives Through
              <span className="block mt-2 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Sustainable Interventions
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our projects focus on empowering vulnerable girls, women, children, and communities through sustainable, community-driven interventions that create lasting impact.
            </p>

            {/* Quick Stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="bg-white rounded-2xl border-2 border-orange-100 p-4 shadow-sm min-w-[140px]">
                <p className="text-3xl font-black text-orange-600">{projects.length}</p>
                <p className="text-xs text-gray-600 font-semibold">Active Projects</p>
              </div>
              <div className="bg-white rounded-2xl border-2 border-orange-100 p-4 shadow-sm min-w-[140px]">
                <p className="text-3xl font-black text-purple-600">500+</p>
                <p className="text-xs text-gray-600 font-semibold">Beneficiaries</p>
              </div>
              <div className="bg-white rounded-2xl border-2 border-orange-100 p-4 shadow-sm min-w-[140px]">
                <p className="text-3xl font-black text-emerald-600">10+</p>
                <p className="text-xs text-gray-600 font-semibold">Communities</p>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative max-w-6xl mx-auto">
            {/* Decorative blobs around image */}
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-orange-300/30 blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-amber-300/30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
                alt="Community development project in action"
                width={1600}
                height={600}
                className="h-[400px] md:h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Creative Overlay Layers */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/30 via-amber-900/10 to-transparent" />
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(17, 24, 39, 0.3) 100%)'
              }} />
              <div className="absolute inset-0 bg-orange-600/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/60 via-transparent to-transparent" />
              
              {/* Featured Badge */}
              <div className="absolute top-8 left-8">
                <Badge variant="warning" icon="⭐">
                  Featured Projects
                </Badge>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                          Making Impact
                        </p>
                        <p className="text-gray-900 font-bold text-lg">
                          Community-Driven Solutions
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/get-involved"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-bold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Support a Project
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

      {/* Projects Grid Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="primary">Active Initiatives</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Current Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our ongoing initiatives making real differences in communities across Cameroon
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="group relative overflow-hidden rounded-3xl border-2 border-slate-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={projectImages[index % projectImages.length].src}
                    alt={projectImages[index % projectImages.length].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent" />
                  
                  {/* Project Number Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="h-12 w-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-lg font-black shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="warning" icon="📅">
                      {project.year}
                    </Badge>
                  </div>

                  {/* Bottom Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-black text-white leading-tight">
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Project Meta Info */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="primary" icon="📍">
                      {project.location}
                    </Badge>
                    {project.partner && (
                      <Badge variant="success" icon="🤝">
                        {project.partner}
                      </Badge>
                    )}
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all group-hover:text-orange-700"
                  >
                    View Full Details
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </article>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 p-12 text-center shadow-2xl">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 border-4 border-white rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-4 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-white rounded-full"></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Want to Support Our Projects?
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Your contribution helps us expand our reach and create lasting impact in vulnerable communities.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link 
                    href="/donate" 
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Donate Now
                  </Link>
                  <Link 
                    href="/get-involved" 
                    className="inline-flex items-center gap-2 rounded-full bg-transparent border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-orange-600 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Become a Volunteer
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