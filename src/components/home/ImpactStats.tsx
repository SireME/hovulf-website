import Image from "next/image";

export default function ImpactStats() {
  const stats = [
    { label: "Girls & Women Empowered", value: "500+" },
    { label: "Communities Reached", value: "10+" },
    { label: "Livelihood Projects", value: "15+" },
    { label: "Health & Protection Activities", value: "30+" },
  ];

  // Inline Badge Component
  const Badge = ({ 
    children, 
    variant = 'primary' 
  }: { 
    children: React.ReactNode; 
    variant?: 'primary' | 'success' | 'info' 
  }) => {
    const variants = {
      primary: 'bg-blue-100 text-blue-700 border-blue-200',
      success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      info: 'bg-sky-100 text-sky-700 border-sky-200',
    };

    return (
      <span className={`inline-flex items-center rounded-full border font-medium px-3 py-1 text-sm ${variants[variant]}`}>
        {children}
      </span>
    );
  };

  // Inline Button Component
  const Button = ({ 
    children, 
    variant = 'primary',
    onClick,
    icon
  }: { 
    children: React.ReactNode; 
    variant?: 'primary' | 'outline' | 'accent';
    onClick?: () => void;
    icon?: React.ReactNode;
  }) => {
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600 shadow-sm hover:shadow-md',
      accent: 'bg-orange-500 text-white hover:bg-orange-600 border-orange-500 shadow-sm hover:shadow-md',
      outline: 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50',
    };

    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition-all duration-200 px-5 py-2.5 text-base ${variants[variant]}`}
      >
        {children}
        {icon && icon}
      </button>
    );
  };

  // Inline Card Component
  const Card = ({ 
    children, 
    variant = 'default',
    hover = false,
    className = ''
  }: { 
    children: React.ReactNode; 
    variant?: 'default' | 'gradient' | 'elevated';
    hover?: boolean;
    className?: string;
  }) => {
    const variants = {
      default: 'bg-white border border-slate-200',
      gradient: 'bg-gradient-to-br from-white to-slate-50 border border-slate-100',
      elevated: 'bg-white shadow-lg border border-slate-100',
    };

    const hoverEffect = hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg' : '';

    return (
      <div className={`rounded-2xl p-6 ${variants[variant]} ${hoverEffect} ${className}`}>
        {children}
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-b from-[#eef7ff] to-white py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <Badge variant="primary">Proven field impact</Badge>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4 mt-4">
                Results that grow with every partnership
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We collaborate with local leaders to deliver measurable change,
                ensuring every project expands opportunities and protects dignity.
              </p>
            </div>

            {/* Stats Grid using Card component */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  variant="default"
                  hover
                  className="group relative"
                >
                  {/* Gradient accent */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <p className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-700 font-medium leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button 
                variant="accent"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                }
              >
                Learn More About Our Impact
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative blobs */}
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-200/40 blur-3xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-purple-200/40 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-0 h-24 w-24 rounded-full bg-emerald-200/40 blur-2xl" />
            
            {/* Main image container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/assets/images/image9.jpeg"
                alt="Community health sensitization session"
                width={820}
                height={520}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/10" />
            </div>

            {/* Stats badge overlay on image */}
            <Card 
              variant="elevated" 
              className="absolute -bottom-6 -left-6 hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-xs text-gray-600 font-medium">Lives Changed</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}