import Image from "next/image";
import Link from "next/link";
import { leadershipBySlug } from "@/content/siteAssets";

export default function LeadershipPage() {
  // Inline Badge Component
  const Badge = ({ 
    children, 
    variant = 'primary',
    icon
  }: { 
    children: React.ReactNode; 
    variant?: 'primary' | 'gradient';
    icon?: React.ReactNode;
  }) => {
    const variants = {
      primary: 'bg-blue-100 text-blue-700 border-blue-200',
      gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent',
    };

    return (
      <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wider ${variants[variant]}`}>
        {icon && icon}
        {children}
      </span>
    );
  };

  // Inline LeaderCard Component
  const LeaderCard = ({ 
    leader,
    index
  }: { 
    leader: any;
    index: number;
  }) => {
    const colors = ['blue', 'purple', 'emerald'];
    const currentColor = colors[index % colors.length];
    
    const colorClasses = {
      blue: {
        gradient: 'from-blue-600 to-blue-700',
        light: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        ring: 'ring-blue-500',
      },
      purple: {
        gradient: 'from-purple-600 to-purple-700',
        light: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
        ring: 'ring-purple-500',
      },
      emerald: {
        gradient: 'from-emerald-600 to-emerald-700',
        light: 'bg-emerald-50',
        text: 'text-emerald-600',
        border: 'border-emerald-200',
        ring: 'ring-emerald-500',
      },
    };

    const colors_type = colorClasses[currentColor as keyof typeof colorClasses];

    return (
      <article className="group relative">
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-slate-100 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-transparent hover:ring-4 hover:ring-opacity-50">
          
          {/* Decorative Background Pattern */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className={`w-full h-full rounded-full bg-gradient-to-br ${colors_type.gradient} opacity-10 blur-3xl`}></div>
          </div>

          {/* Image Section */}
          <div className="relative h-80 overflow-hidden">
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
            
            {/* Profile Image */}
            <Image 
              src={leader.image} 
              alt={leader.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />

            {/* Badge on Image */}
            <div className="absolute top-4 left-4 z-20">
              <Badge variant="gradient">
                Leadership
              </Badge>
            </div>

            {/* Quote or Vision Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-3">
                <div className={`h-1 w-12 bg-gradient-to-r ${colors_type.gradient} rounded-full`}></div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Vision</p>
              </div>
              <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                "Leading with purpose to create lasting impact in our communities."
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative p-6">
            {/* Position Badge */}
            <div className="mb-3">
              <Badge variant="primary">
                {index === 0 ? "Founder" : index === 1 ? "Director" : "Team Lead"}
              </Badge>
            </div>

            {/* Name */}
            <h3 className={`text-2xl font-bold text-gray-900 mb-2 group-hover:${colors_type.text} transition-colors duration-300`}>
              {leader.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
              {leader.description}
            </p>

            {/* Stats/Achievements */}
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100">
              <div className="text-center">
                <p className={`text-xl font-bold ${colors_type.text}`}>5+</p>
                <p className="text-xs text-gray-500">Years</p>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="text-center">
                <p className={`text-xl font-bold ${colors_type.text}`}>10+</p>
                <p className="text-xs text-gray-500">Projects</p>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="text-center">
                <p className={`text-xl font-bold ${colors_type.text}`}>500+</p>
                <p className="text-xs text-gray-500">Lives</p>
              </div>
            </div>

            {/* Social Links & CTA */}
            <div className="flex items-center justify-between">
              {/* Social Icons */}
              <div className="flex gap-2">
                <button className={`h-9 w-9 rounded-full ${colors_type.light} ${colors_type.text} flex items-center justify-center hover:scale-110 transition-transform duration-200`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
                <button className={`h-9 w-9 rounded-full ${colors_type.light} ${colors_type.text} flex items-center justify-center hover:scale-110 transition-transform duration-200`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
              </div>

              {/* Read Profile Link */}
              <Link 
                href={`/leadership/${leader.slug}`}
                className={`group/link inline-flex items-center gap-2 font-semibold ${colors_type.text} hover:gap-3 transition-all duration-200`}
              >
                View Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-32 pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto max-w-7xl px-6">
          
          {/* Header Section */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              
              {/* Left Side - Title & Description */}
              <div className="max-w-2xl">
                <Badge variant="primary">Meet Our Team</Badge>
                
                <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-4">
                  Leadership Team
                </h1>
                
                <div className="flex items-start gap-4">
                  <div className="h-20 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-emerald-600 rounded-full mt-1"></div>
                  <div>
                    <p className="text-xl text-gray-600 leading-relaxed mb-4">
                      Our leadership and management team steers strategy, governance, and operational excellence to serve vulnerable communities with dignity.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span>{leadershipBySlug.length} Leaders</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>15+ Years Combined Experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>Driven by Impact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Stats */}
              <div className="flex flex-col items-start lg:items-end gap-4">
                <Link 
                  href="/get-involved" 
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Join Our Mission</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                {/* Stats */}
                <div className="flex gap-6 text-right">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">500+</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Lives Impacted</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-600">10+</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadershipBySlug.map((leader, index) => (
              <LeaderCard key={leader.slug} leader={leader} index={index} />
            ))}
          </div>

          {/* Bottom CTA Section */}
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
                  Join Our Mission
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Want to work with our leadership team? We're always looking for passionate individuals to join our cause.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link 
                    href="/careers" 
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Explore Opportunities
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 rounded-full bg-transparent border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    Get in Touch
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
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