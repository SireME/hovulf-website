import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  // Inline Badge Component
  const Badge = ({ 
    children, 
    variant = 'default',
    icon
  }: { 
    children: React.ReactNode; 
    variant?: 'default' | 'gradient' | 'white';
    icon?: React.ReactNode;
  }) => {
    const variants = {
      default: 'bg-white/20 backdrop-blur-sm text-white border-white/30',
      gradient: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent',
      white: 'bg-white text-blue-600 border-white',
    };

    return (
      <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider ${variants[variant]}`}>
        {icon && icon}
        {children}
      </span>
    );
  };

  // Inline Button Component
  const Button = ({ 
    children, 
    variant = 'primary',
    href,
    icon,
    iconPosition = 'right',
    size = 'md'
  }: { 
    children: React.ReactNode; 
    variant?: 'primary' | 'outline' | 'white' | 'gradient';
    href?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
  }) => {
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600 shadow-lg shadow-blue-900/30',
      gradient: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent shadow-lg shadow-orange-500/40 hover:shadow-xl hover:shadow-orange-500/50',
      outline: 'bg-transparent text-white border-white/40 hover:bg-white hover:text-blue-900',
      white: 'bg-white text-orange-600 border-white hover:bg-orange-50',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const Component = href ? Link : 'button';

    return (
      <Component
        {...(href ? { href } : {})}
        className={`inline-flex items-center justify-center gap-2 rounded-lg border font-bold transition-all duration-300 hover:-translate-y-1 ${variants[variant]} ${sizes[size]}`}
      >
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </Component>
    );
  };

  // Stats data
  const stats = [
    { 
      value: "500+", 
      label: "Lives Empowered",
      icon: "👥",
      color: "from-blue-600 to-blue-700"
    },
    { 
      value: "10+", 
      label: "Communities",
      icon: "🏘️",
      color: "from-purple-600 to-purple-700"
    },
    { 
      value: "30+", 
      label: "Active Programs",
      icon: "❤️",
      color: "from-emerald-600 to-emerald-700"
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 border-4 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Full-width Container */}
      <div className="w-full">
        <div className="grid lg:grid-cols-2 min-h-screen">
          
          {/* Left Content Section */}
          <div className="relative flex items-center px-6 py-20 md:px-12 lg:px-16 xl:px-24">
            <div className="relative z-10 max-w-2xl">
              
              {/* Top Badge */}
              <Badge variant="default" icon="✨">
                Hope for the Vulnerable Foundation
              </Badge>

              {/* Main Headline */}
              <h1 className="mt-8 text-5xl leading-tight font-black text-white md:text-6xl xl:text-7xl">
                Empowering Lives Through
                <span className="block mt-3 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Dignity & Opportunity
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mt-8 text-lg text-white/90 leading-relaxed md:text-xl">
                Supporting vulnerable girls, women, children, and the elderly through practical programs in health, education, protection, and sustainable livelihoods.
              </p>

              {/* Trust Elements */}
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-lg"></div>
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white shadow-lg"></div>
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white shadow-lg"></div>
                  </div>
                  <div>
                    <p className="text-sm text-white/80">
                      <span className="font-bold text-white">500+</span> lives impacted
                    </p>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-white/80 font-medium">Trusted partner</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  variant="gradient"
                  href="/donate"
                  size="lg"
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  }
                >
                  Donate Now
                </Button>
                <Button
                  variant="outline"
                  href="/programs"
                  size="lg"
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  }
                >
                  Explore Programs
                </Button>
              </div>

              {/* Partnership Badges */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
                  Trusted Partners
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="default">UNICEF</Badge>
                  <Badge variant="default">Health Districts</Badge>
                  <Badge variant="default">Communities</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative min-h-[600px] lg:min-h-screen">
            {/* Main Image - Full coverage */}
            <div className="absolute inset-0">
              <Image
                src="/assets/images/image6.jpeg"
                alt="HOVULF outreach supporting girls in community"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlays for depth and readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/40 to-transparent lg:from-blue-900/80 lg:via-blue-900/30 lg:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating Impact Badge - Top Right */}
            <div className="absolute top-8 right-8 hidden lg:block">
              <div className="bg-white rounded-2xl p-4 shadow-2xl animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Active Now</p>
                    <p className="text-sm font-bold text-gray-900">10+ Projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats - Positioned in middle area */}
            <div className="absolute bottom-32 left-6 right-6 md:bottom-36 md:left-12 md:right-12 lg:bottom-40">
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="group relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md p-4 text-center shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white md:p-6"
                  >
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 md:text-4xl">
                        {stat.icon}
                      </div>
                      <p className="text-3xl font-black text-blue-600 group-hover:text-white transition-colors duration-300 mb-1 md:text-4xl">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-600 group-hover:text-white/90 transition-colors duration-300 font-semibold md:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Banner - Overlapping bottom of image */}
            <div className="absolute -bottom-6 left-6 right-6 md:left-12 md:right-12 lg:left-1/2 lg:right-auto lg:transform lg:-translate-x-1/2 lg:w-[calc(100%-6rem)]">
              <div className="rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 p-6 text-white shadow-2xl md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/90">
                        Our Mission
                      </p>
                    </div>
                    <p className="text-lg font-bold md:text-xl leading-tight">
                      Every vulnerable person deserves dignity, safety, and a chance to thrive.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="white"
                      href="/get-involved"
                      size="sm"
                      icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      }
                    >
                      Volunteer
                    </Button>
                    <Button
                      variant="outline"
                      href="/contact"
                      size="sm"
                      icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      }
                    >
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}