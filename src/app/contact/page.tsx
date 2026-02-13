import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
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

  // Inline Card Component
  const Card = ({ 
    children, 
    className = ''
  }: { 
    children: React.ReactNode; 
    className?: string;
  }) => {
    return (
      <div className={`rounded-2xl bg-white border-2 border-slate-100 shadow-lg ${className}`}>
        {children}
      </div>
    );
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      detail: "Kake I, Mbonge Road",
      subDetail: "Kumba, South West Region, Cameroon",
      color: "blue",
      action: "Get Directions",
      link: "https://www.google.com/maps/search/?api=1&query=Kumba,Cameroon"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      detail: "237 675 10 05 37 / 237 651 51 04 48",
      subDetail: "Available during office hours",
      color: "emerald",
      action: "Call Now",
      link: "tel:+237675100537"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      detail: "hovulfcameroon@gmail.com",
      subDetail: "We'll respond within 24 hours",
      color: "purple",
      action: "Send Email",
      link: "mailto:hovulfcameroon@gmail.com"
    },
  ];

  const quickLinks = [
    { label: "Partnership Inquiries", icon: "🤝" },
    { label: "Volunteer Applications", icon: "🙋" },
    { label: "Donation Questions", icon: "💝" },
    { label: "Media & Press", icon: "📰" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50/30 to-white pt-32 pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto max-w-7xl px-6">
          
          {/* Header Content */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="gradient" icon="💬">
              Contact Us
            </Badge>
            
            <h1 className="mt-6 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Let's Start a
              <span className="block mt-2 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Have a question, partnership proposal, or want to learn more about our work? We'd love to hear from you.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="relative max-w-6xl mx-auto">
            {/* Decorative blobs around image */}
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-teal-300/30 blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-cyan-300/30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="/assets/images/image3.jpeg"
                alt="Team meeting with partners"
                width={1600}
                height={600}
                className="h-[400px] md:h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Creative Overlay Layers */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/30 via-cyan-900/10 to-transparent" />
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(17, 24, 39, 0.3) 100%)'
              }} />
              <div className="absolute inset-0 bg-teal-600/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-transparent" />
              
              {/* Response Time Badge */}
              <div className="absolute top-8 right-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl">
                  <div className="text-center">
                    <p className="text-3xl font-black text-teal-600">24hrs</p>
                    <p className="text-xs text-gray-600 font-semibold">Response Time</p>
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                          We're Here to Help
                        </p>
                        <p className="text-gray-900 font-bold text-lg">
                          Available Monday - Friday, 9AM - 5PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods & Form Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Contact Methods */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="primary">Get In Touch</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
                Multiple Ways to Reach Us
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {contactMethods.map((method, index) => (
                <Card key={method.title} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8">
                  <div className={`h-16 w-16 mx-auto rounded-2xl bg-${method.color}-100 text-${method.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-4 text-center">{method.title}</h3>
                  
                  {/* Special layout for phone numbers */}
                  {method.title === "Call Us" ? (
                    <div className="space-y-3 mb-4">
                      <a
                        href="tel:+237675100537"
                        className="block p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-400 transition-all group/phone"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-emerald-600 font-semibold mb-1">Primary</p>
                            <p className="text-gray-900 font-bold">237 675 10 05 37</p>
                          </div>
                          <svg className="w-5 h-5 text-emerald-600 group-hover/phone:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                      </a>
                      <a
                        href="tel:+237651510448"
                        className="block p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-400 transition-all group/phone"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-emerald-600 font-semibold mb-1">Secondary</p>
                            <p className="text-gray-900 font-bold">237 651 51 04 48</p>
                          </div>
                          <svg className="w-5 h-5 text-emerald-600 group-hover/phone:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                      </a>
                      <p className="text-sm text-gray-500 text-center">{method.subDetail}</p>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-900 font-semibold mb-1 text-center">{method.detail}</p>
                      <p className="text-sm text-gray-500 mb-4 text-center">{method.subDetail}</p>
                      <a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 text-sm font-bold text-${method.color}-600 hover:gap-3 transition-all`}
                      >
                        {method.action}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Form & Info Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <ContactForm />
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              
              {/* Quick Links */}
              <Card className="p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Popular Topics
                </h4>
                <div className="space-y-3">
                  {quickLinks.map((link, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer">
                      <span className="text-xl">{link.icon}</span>
                      <span className="text-sm text-gray-700 font-medium">{link.label}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Office Hours */}
              <Card className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Office Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">9AM - 5PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">Closed</span>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="#" className="h-10 w-10 rounded-full bg-teal-100 hover:bg-teal-600 text-teal-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-teal-100 hover:bg-teal-600 text-teal-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-teal-100 hover:bg-teal-600 text-teal-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}