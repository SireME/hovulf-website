import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  // Inline Badge Component
  const Badge = ({ 
    children, 
    variant = 'default',
    icon
  }: { 
    children: React.ReactNode; 
    variant?: 'default' | 'primary' | 'success' | 'warning';
    icon?: React.ReactNode;
  }) => {
    const variants = {
      default: 'bg-slate-100 text-slate-700 border-slate-200',
      primary: 'bg-blue-100 text-blue-700 border-blue-200',
      success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      warning: 'bg-amber-100 text-amber-700 border-amber-200',
    };

    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium ${variants[variant]}`}>
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
      primary: 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600 shadow-lg shadow-blue-200/50',
      accent: 'bg-orange-500 text-white hover:bg-orange-600 border-orange-500 shadow-lg shadow-orange-200/50',
      outline: 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50',
    };

    const buttonClassName = `inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition-all duration-200 px-6 py-3 text-base hover:-translate-y-0.5 ${variants[variant]}`;

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

  // Inline Card Component
  const Card = ({ 
    children, 
    className = ''
  }: { 
    children: React.ReactNode; 
    className?: string;
  }) => {
    return (
      <div className={`rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg ${className}`}>
        {children}
      </div>
    );
  };

  const projectStats = [
    { 
      icon: "👥", 
      label: "Beneficiaries", 
      value: "50+",
      color: "text-blue-600"
    },
    { 
      icon: "🐔", 
      label: "Poultry Units", 
      value: "100+",
      color: "text-purple-600"
    },
    { 
      icon: "💰", 
      label: "Income Generated", 
      value: "$5K+",
      color: "text-emerald-600"
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-amber-50/50 to-yellow-50/30 py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            {/* Partnership Badge */}
            <div className="absolute -top-4 left-6 z-10">
              <Card className="px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-600 uppercase">Partnership</p>
                    <p className="text-sm font-bold text-gray-900">UNICEF · 2025</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="/assets/images/image11.jpeg"
                alt="Poultry farming project participants"
                width={840}
                height={520}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent" />
              
              {/* Featured Badge on Image */}
              <div className="absolute top-6 right-6">
                <Badge variant="warning" icon="⭐">
                  Featured Project
                </Badge>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-3">
                  {projectStats.map((stat) => (
                    <Card key={stat.label} className="p-3 text-center">
                      <p className="text-2xl mb-1">{stat.icon}</p>
                      <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                      <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative accent blobs */}
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-orange-300/30 blur-2xl" />
            <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-amber-300/30 blur-2xl" />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <Badge variant="primary" icon="🌟">
              Flagship Initiative
            </Badge>
            
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-2">
              Featured Project
            </h2>
            
            <h3 className="text-3xl font-bold text-blue-600 mb-6">
              Poultry Farming for Adolescent Girls & Young Women
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In partnership with UNICEF and the Kumba North Health District, this
              project empowers adolescent girls and young women through poultry
              farming as a sustainable income-generating activity.
            </p>

            {/* Key Highlights */}
            <Card className="p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Highlights
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">✓</span>
                  <span>Sustainable income generation for 50+ young women</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">✓</span>
                  <span>Comprehensive training in poultry farming techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">✓</span>
                  <span>Business management and entrepreneurship skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">✓</span>
                  <span>Ongoing mentorship and community support</span>
                </li>
              </ul>
            </Card>

            {/* Project Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="default" icon="📍">
                Kumba North
              </Badge>
              <Badge variant="success" icon="🐔">
                Livelihoods
              </Badge>
              <Badge variant="primary" icon="🤝">
                UNICEF Partnership
              </Badge>
              <Badge variant="warning" icon="📅">
                2025
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="accent"
                href="/projects/poultry-farming-kumba-north"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                }
              >
                View Project Details
              </Button>
              <Button 
                variant="outline"
                href="/get-involved"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                }
              >
                Support This Project
              </Button>
            </div>

            {/* Impact Statement */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-gray-700 italic">
                <span className="font-bold text-blue-600">"</span>
                This project is transforming lives by providing young women with the skills and resources to become financially independent and contribute to their communities.
                <span className="font-bold text-blue-600">"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}