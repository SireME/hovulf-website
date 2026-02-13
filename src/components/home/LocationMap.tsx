import Link from "next/link";

export default function LocationMap() {
  // Inline Badge Component
  const Badge = ({ 
    children, 
    variant = 'default',
    icon
  }: { 
    children: React.ReactNode; 
    variant?: 'default' | 'primary' | 'success';
    icon?: React.ReactNode;
  }) => {
    const variants = {
      default: 'bg-slate-100 text-slate-700 border-slate-200',
      primary: 'bg-blue-100 text-blue-700 border-blue-200',
      success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    };

    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold ${variants[variant]}`}>
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
    target,
    rel,
    icon,
    iconPosition = 'right'
  }: { 
    children: React.ReactNode; 
    variant?: 'primary' | 'outline' | 'white';
    href?: string;
    target?: string;
    rel?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
  }) => {
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600 shadow-lg shadow-blue-200/50',
      outline: 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50',
      white: 'bg-white text-blue-600 border-white hover:bg-slate-50',
    };

    const buttonClassName = `inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition-all duration-200 px-6 py-3 text-base hover:-translate-y-0.5 ${variants[variant]}`;

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} className={buttonClassName}>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </Link>
      );
    }

    return (
      <button type="button" className={buttonClassName}>
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
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
      <div className={`rounded-2xl bg-white border border-slate-200 shadow-sm ${className}`}>
        {children}
      </div>
    );
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Main Office",
      detail: "Kumba, South West Region",
      subDetail: "Cameroon",
      color: "blue",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      detail: "+237 675 100 536",
      subDetail: "Mon-Fri, 9am-5pm",
      color: "emerald",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      detail: "hovulfcameroon@gmail.com",
      subDetail: "We'll respond within 24hrs",
      color: "purple",
    },
  ];

  const communityAreas = [
    "Kumba North Health District",
    "Kumba South Region",
    "Surrounding Rural Communities",
    "Mobile Outreach Areas",
  ];

  return (
    <section className="relative bg-gradient-to-b from-emerald-50/50 via-teal-50/30 to-white py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      
      <div className="container relative mx-auto max-w-7xl px-6">
        
        {/* Header Section */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <Badge variant="success" icon="📍">
            Our Location
          </Badge>
          
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            Find Us in Kumba
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            We work with communities in and around Kumba, Cameroon. Visit us, reach out, or explore the areas where we make an impact.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Map Section - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden p-0 shadow-xl">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6 text-white">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Interactive Map</h3>
                      <p className="text-sm text-white/80">Kumba, South West Region, Cameroon</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Badge variant="success" icon="✓">
                      Active Location
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="relative group">
                <iframe
                  title="HOVULF location map"
                  src="https://www.google.com/maps?q=Kumba,+Cameroon&output=embed"
                  className="h-[400px] w-full md:h-[500px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Overlay hint */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-gray-700 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Click and drag to explore • Scroll to zoom
                  </p>
                </div>
              </div>

              {/* Map Actions */}
              <div className="p-6 bg-slate-50 border-t border-slate-200">
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="primary"
                    href="https://www.google.com/maps/search/?api=1&query=Kumba,+Cameroon"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    }
                  >
                    Open in Google Maps
                  </Button>
                  <Button
                    variant="outline"
                    href="https://www.google.com/maps/dir/?api=1&destination=Kumba,Cameroon"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    }
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className={`h-12 w-12 rounded-xl bg-${info.color}-100 text-${info.color}-600 flex items-center justify-center mb-4`}>
                  {info.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                <p className="text-gray-900 font-semibold mb-1">{info.detail}</p>
                <p className="text-sm text-gray-500">{info.subDetail}</p>
              </Card>
            ))}

            {/* Quick Contact CTA */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-emerald-50 border-blue-200">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Need Help?
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Our team is here to answer your questions
              </p>
              <Button
                variant="primary"
                href="/contact"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                }
              >
                Contact Us
              </Button>
            </Card>
          </div>
        </div>

        {/* Community Areas Section */}
        <Card className="p-8">
          <div className="flex items-start gap-6">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Communities We Serve
              </h3>
              <p className="text-gray-600 mb-6">
                Our programs reach multiple communities across the Kumba region, ensuring comprehensive support for vulnerable populations.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {communityAreas.map((area, index) => (
                  <div key={area} className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                    <div className="h-8 w-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
}