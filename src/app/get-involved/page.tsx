import Image from "next/image";
import Link from "next/link";

const opportunities = [
  {
    title: "Volunteer",
    description:
      "Join our team in community outreach, training, research, and advocacy activities.",
    link: "/contact",
    linkLabel: "Sign up",
    image: "/assets/images/image6.jpeg",
    alt: "Volunteers supporting community outreach",
    icon: "🤝",
    color: "blue",
    benefits: ["Hands-on experience", "Community impact", "Skill development"]
  },
  {
    title: "Partner With Us",
    description:
      "We collaborate with NGOs, donors, institutions, and private sector partners.",
    link: "/contact",
    linkLabel: "Become a partner",
    image: "/assets/images/image9.jpeg",
    alt: "Partners meeting with NGO team",
    icon: "🤝",
    color: "purple",
    benefits: ["Strategic collaboration", "Shared impact", "Network expansion"]
  },
  {
    title: "Sponsor a Project",
    description:
      "Support a specific project and directly impact vulnerable communities.",
    link: "/projects",
    linkLabel: "View projects",
    image: "/assets/images/image11.jpeg",
    alt: "Community project collaboration",
    icon: "💝",
    color: "emerald",
    benefits: ["Direct impact", "Full transparency", "Progress reports"]
  },
];

const impactWays = [
  {
    icon: "💰",
    title: "Make a Donation",
    description: "Financial support helps us expand our reach and impact",
    action: "Donate Now",
    link: "/donate"
  },
  {
    icon: "📢",
    title: "Spread the Word",
    description: "Share our mission on social media and with your network",
    action: "Follow Us",
    link: "#social"
  },
  {
    icon: "💼",
    title: "Corporate Partnership",
    description: "Engage your organization in meaningful community work",
    action: "Partner",
    link: "/contact"
  },
  {
    icon: "🎓",
    title: "Internships",
    description: "Gain experience while making a difference",
    action: "Apply",
    link: "/contact"
  }
];

export default function GetInvolvedPage() {
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

  const colorClasses = {
    blue: {
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      lightBg: 'bg-blue-50',
      gradient: 'from-blue-600 to-blue-700',
      border: 'border-blue-200',
    },
    purple: {
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      lightBg: 'bg-purple-50',
      gradient: 'from-purple-600 to-purple-700',
      border: 'border-purple-200',
    },
    emerald: {
      bg: 'bg-emerald-600',
      text: 'text-emerald-600',
      lightBg: 'bg-emerald-50',
      gradient: 'from-emerald-600 to-emerald-700',
      border: 'border-emerald-200',
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50/30 to-white pt-32 pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto max-w-7xl px-6">
          
          {/* Header Content */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="gradient" icon="💪">
              Get Involved
            </Badge>
            
            <h1 className="mt-6 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Join Us in Creating
              <span className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Lasting Community Change
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              There are many ways to support our mission and make a tangible difference in the lives of vulnerable communities across Cameroon.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="relative max-w-6xl mx-auto">
            {/* Decorative blobs around image */}
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-purple-300/30 blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-pink-300/30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="/assets/images/image2.jpeg"
                alt="Volunteers coordinating community outreach"
                width={1600}
                height={600}
                className="h-[400px] md:h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Creative Overlay Layers */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-pink-900/10 to-transparent" />
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(17, 24, 39, 0.3) 100%)'
              }} />
              <div className="absolute inset-0 bg-purple-600/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent" />
              
              {/* Impact Stats Overlay */}
              <div className="absolute top-8 left-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-purple-600">100+</p>
                      <p className="text-xs text-gray-600 font-semibold">Volunteers</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                          Make an Impact Today
                        </p>
                        <p className="text-gray-900 font-bold text-lg">
                          Every contribution matters
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/donate"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-bold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Donate Now
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

      {/* Main Opportunities Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="primary">Ways to Help</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Choose Your Path to Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the opportunity that best matches your interests and resources
            </p>
          </div>

          {/* Opportunities Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-20">
            {opportunities.map((item, index) => (
              <div
                key={item.title}
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
                    <div className={`h-16 w-16 rounded-2xl ${colorClasses[item.color as keyof typeof colorClasses].bg} flex items-center justify-center text-3xl shadow-lg`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Benefits List */}
                  <div className="mb-6 space-y-2">
                    {item.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className={`w-4 h-4 ${colorClasses[item.color as keyof typeof colorClasses].text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={item.link}
                    className={`inline-flex items-center gap-2 font-bold ${colorClasses[item.color as keyof typeof colorClasses].text} group-hover:gap-3 transition-all`}
                  >
                    {item.linkLabel}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 ${colorClasses[item.color as keyof typeof colorClasses].lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Ways Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto max-w-7xl px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              More Ways to Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every action, big or small, contributes to our mission
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {impactWays.map((way, index) => (
              <Link
                key={way.title}
                href={way.link}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-200"
              >
                <div className="text-4xl mb-4">{way.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {way.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {way.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600">
                  {way.action}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-12 text-center shadow-2xl">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 border-4 border-white rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-4 border-white rounded-full"></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Make a Difference?
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Join hundreds of supporters who are creating lasting change in vulnerable communities.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link 
                    href="/donate" 
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-purple-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Start Contributing
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 rounded-full bg-transparent border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-purple-600 transition-all duration-300"
                  >
                    Contact Us
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