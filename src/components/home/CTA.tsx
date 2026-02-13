import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  // Inline Badge Component
  const Badge = ({ 
    children, 
    variant = 'default',
    icon
  }: { 
    children: React.ReactNode; 
    variant?: 'default' | 'gradient';
    icon?: React.ReactNode;
  }) => {
    const variants = {
      default: 'bg-white/15 text-white border-white/20',
      gradient: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent',
    };

    return (
      <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wider backdrop-blur-sm ${variants[variant]}`}>
        {icon && <span className="text-base">{icon}</span>}
        {children}
      </span>
    );
  };

  // Inline Button Component
  const Button = ({ 
    children, 
    variant = 'primary',
    href,
    icon
  }: { 
    children: React.ReactNode; 
    variant?: 'primary' | 'outline' | 'accent';
    href?: string;
    icon?: React.ReactNode;
  }) => {
    const variants = {
      primary: 'bg-white text-blue-700 hover:bg-gray-50 shadow-2xl shadow-white/30',
      accent: 'bg-orange-500 text-white hover:bg-orange-600 shadow-2xl shadow-orange-500/30',
      outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-700',
    };

    const buttonClassName = `group inline-flex items-center justify-center gap-3 rounded-xl border-0 font-bold transition-all duration-300 px-8 py-4 text-lg hover:-translate-y-1 hover:scale-105 ${variants[variant]}`;

    if (href) {
      return (
        <Link href={href} className={buttonClassName}>
          {children}
          {icon && icon}
        </Link>
      );
    }

    return (
      <button type="button" className={buttonClassName}>
        {children}
        {icon && icon}
      </button>
    );
  };

  // Impact Stats Component
  const ImpactStat = ({ 
    value, 
    label,
    icon
  }: { 
    value: string; 
    label: string;
    icon: React.ReactNode;
  }) => {
    return (
      <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <p className="text-3xl font-bold text-white">{value}</p>
          <p className="text-sm text-white/80">{label}</p>
        </div>
      </div>
    );
  };

  const impactStats = [
    {
      value: "500+",
      label: "Lives Changed",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      value: "10+",
      label: "Communities",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      value: "15+",
      label: "Active Projects",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  const ways = [
    {
      title: "Donate Monthly",
      description: "Join our community of recurring donors",
      amount: "$10/month",
      impact: "Provides nutrition support for 2 children",
      icon: "💝",
      href: "/donate?type=monthly"
    },
    {
      title: "One-Time Gift",
      description: "Make an immediate impact today",
      amount: "$50",
      impact: "Supplies educational materials for 5 students",
      icon: "🎁",
      href: "/donate?type=one-time"
    },
    {
      title: "Volunteer",
      description: "Share your time and skills",
      amount: "2-4 hrs/week",
      impact: "Mentorship that transforms lives",
      icon: "🤝",
      href: "/volunteer"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-purple-700 py-24">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white/20 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white/20 rounded-full"></div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Content Section */}
          <div>
            {/* Header Badge */}
            <Badge variant="default" icon="✨">
              Stand with vulnerable communities
            </Badge>
            
            {/* Main Headline */}
            <h2 className="text-5xl font-bold text-white mt-6 mb-6 leading-tight">
              Transform Lives,
              <span className="block text-orange-300">Restore Hope</span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Your support creates lasting change for vulnerable girls, women, children, 
              and families in Cameroon. Every contribution—big or small—makes a real difference.
            </p>

            {/* Impact Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {impactStats.map((stat) => (
                <ImpactStat key={stat.label} {...stat} />
              ))}
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="accent"
                href="/donate"
                icon={
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                }
              >
                Give Hope Today
              </Button>

              <Button 
                variant="outline"
                href="/get-involved"
                icon={
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                }
              >
                Explore Ways to Help
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium">100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">Tax Deductible</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium">Instant Impact</span>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="/assets/images/image7.jpeg"
                alt="Sanitary pad outreach with community members"
                width={760}
                height={520}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              
              {/* Floating Impact Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-2xl border border-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">
                        Current Campaign
                      </p>
                      <h4 className="text-xl font-bold text-gray-900">
                        Sanitary Pad Distribution
                      </h4>
                    </div>
                    <Badge variant="gradient" icon="🔥">
                      Active
                    </Badge>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span className="font-medium">$3,750 raised</span>
                      <span className="font-bold text-blue-600">75% of $5,000</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-3/4 rounded-full transition-all duration-500"></div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    Help us reach 200 more girls with essential hygiene supplies.
                  </p>

                  <Link 
                    href="/campaigns/sanitary-pads"
                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
                  >
                    Support This Campaign
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative Accent Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-orange-400/30 backdrop-blur-sm border border-white/20 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-purple-400/30 backdrop-blur-sm border border-white/20 -z-10"></div>
          </div>
        </div>

        {/* Ways to Help Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">
              Choose Your Impact
            </h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Every form of support makes a difference. Pick the option that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ways.map((way) => (
              <Link
                key={way.title}
                href={way.href}
                className="group block"
              >
                <div className="h-full rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <div className="text-5xl mb-4">{way.icon}</div>
                  <h4 className="text-2xl font-bold text-white mb-2">{way.title}</h4>
                  <p className="text-white/70 mb-4">{way.description}</p>
                  
                  <div className="mb-4 pb-4 border-b border-white/20">
                    <p className="text-orange-300 text-2xl font-bold">{way.amount}</p>
                  </div>
                  
                  <div className="flex items-start gap-2 mb-4">
                    <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-white/90">{way.impact}</p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
