import Image from "next/image";
import Link from "next/link";
import ProgramsCarousel from "@/components/home/ProgramsCarousel";
import { programSections } from "@/content/siteAssets";

const programs = [
  {
    title: "Health & Nutrition",
    description:
      "Community health outreach, HIV & SRHR education, and nutrition support for vulnerable households.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Livelihoods & Economic Empowerment",
    description:
      "Income-generating activities including poultry farming and vocational skills for women and youth.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "purple",
  },
  {
    title: "Protection & Gender Equality",
    description:
      "Prevention of gender-based violence and safe spaces for girls and women.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "emerald",
  },
];

const programItems = programSections.flatMap((section) => section.items);
const previewItems = programItems.slice(0, 4);

export default function ProgramsPreview() {
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
      <span className={`inline-flex items-center rounded-full border font-semibold px-3 py-1 text-sm uppercase tracking-wide ${variants[variant]}`}>
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
      primary: 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600 shadow-sm hover:shadow-md',
      accent: 'bg-orange-500 text-white hover:bg-orange-600 border-orange-500 shadow-sm hover:shadow-md',
      outline: 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50',
    };

    const Component = href ? Link : 'button';

    return (
      <Component
        {...(href ? { href } : {})}
        className={`inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition-all duration-200 px-6 py-3 text-base ${variants[variant]}`}
      >
        {children}
        {icon && icon}
      </Component>
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
      elevated: 'bg-white shadow-xl border border-slate-100',
    };

    const hoverEffect = hover 
      ? 'transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200' 
      : '';

    return (
      <div className={`rounded-2xl p-6 ${variants[variant]} ${hoverEffect} ${className}`}>
        {children}
      </div>
    );
  };

  const colorClasses = {
    blue: {
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      lightBg: 'bg-blue-50',
      border: 'border-blue-200',
      hover: 'hover:bg-blue-50',
    },
    purple: {
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      lightBg: 'bg-purple-50',
      border: 'border-purple-200',
      hover: 'hover:bg-purple-50',
    },
    emerald: {
      bg: 'bg-emerald-600',
      text: 'text-emerald-600',
      lightBg: 'bg-emerald-50',
      border: 'border-emerald-200',
      hover: 'hover:bg-emerald-50',
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-white py-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge variant="primary">Our Programs</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">What We Do</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Integrated programs that amplify local resilience, create income,
            and promote safe, inclusive communities.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="mb-16">
          <ProgramsCarousel />
        </div>

        {/* Main Programs Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              variant="default"
              hover
              className="group relative"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl ${colorClasses[program.color as keyof typeof colorClasses].lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon Circle */}
                <div className={`mb-6 h-16 w-16 rounded-2xl ${colorClasses[program.color as keyof typeof colorClasses].bg} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>

                {/* Number Badge */}
                <div className="absolute top-0 right-0">
                  <div className={`h-10 w-10 rounded-full ${colorClasses[program.color as keyof typeof colorClasses].lightBg} ${colorClasses[program.color as keyof typeof colorClasses].text} flex items-center justify-center text-lg font-bold border-2 ${colorClasses[program.color as keyof typeof colorClasses].border}`}>
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {program.description}
                </p>
                
                <Link
                  href="/programs"
                  className={`inline-flex items-center gap-2 font-semibold ${colorClasses[program.color as keyof typeof colorClasses].text} transition-all group-hover:gap-3`}
                >
                  Learn more 
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* General Activities Section */}
        <div className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <Badge variant="info">Activities</Badge>
              <h3 className="text-3xl font-bold text-gray-900 mt-3">General Activities</h3>
              <p className="text-gray-600 mt-2">Explore our diverse range of community programs</p>
            </div>
            <Button 
              variant="outline" 
              href="/programs#all-activities"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              }
            >
              View all activities
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {previewItems.map((item, index) => (
              <Card
                key={item.image}
                variant="default"
                hover
                className="group overflow-hidden p-0"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Number badge on image */}
                  <div className="absolute top-4 left-4">
                    <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card variant="gradient" className="p-10">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Join us in creating lasting change in vulnerable communities. Every contribution counts.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  variant="accent"
                  href="/get-involved"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  }
                >
                  Get Involved
                </Button>
                <Button 
                  variant="primary"
                  href="/programs"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  }
                >
                  Explore All Programs
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}