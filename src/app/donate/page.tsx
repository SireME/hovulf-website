import Image from "next/image";
import DonationMethods from "@/components/donate/DonationMethods";
import DonationImpact from "@/components/donate/DonationImpact";
import Transparency from "@/components/donate/Transparency";

export default function DonatePage() {
  // Inline Badge Component
  const Badge = ({ 
    children, 
    variant = 'primary'
  }: { 
    children: React.ReactNode; 
    variant?: 'primary' | 'gradient';
  }) => {
    const variants = {
      primary: 'bg-blue-100 text-blue-700 border-blue-200',
      gradient: 'bg-gradient-to-r from-orange-500 to-pink-600 text-white border-transparent',
    };

    return (
      <span className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${variants[variant]}`}>
        {children}
      </span>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="gradient">Make a Difference</Badge>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-4 mb-6">
            Support Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your donation helps restore dignity, create livelihoods, improve
            health, and protect vulnerable girls, women, children, and families
            in Cameroon.
          </p>
        </div>

        {/* Hero Image Card */}
        <div className="mb-16 relative group">
          <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1708347456805-b7f83316a8ba?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Volunteers supporting community families"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
                    <span className="text-white/90 font-semibold text-sm uppercase tracking-wider">
                      Community Impact
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                    Every Contribution Creates Lasting Change
                  </h2>
                  <p className="text-white/90 text-lg">
                    Join us in empowering communities across Cameroon through sustainable programs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 blur-2xl -z-10"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-2xl -z-10"></div>
        </div>

        {/* Quick Stats Bar */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg">
                  💙
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900">100%</p>
                  <p className="text-sm font-semibold text-gray-600">Transparent</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-2xl shadow-lg">
                  ✅
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900">Secure</p>
                  <p className="text-sm font-semibold text-gray-600">Verified Payments</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg">
                  🎯
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900">Direct</p>
                  <p className="text-sm font-semibold text-gray-600">To Communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Components */}
        <DonationMethods />
        <DonationImpact />
        <Transparency />

        {/* Final CTA */}
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-12 text-center shadow-2xl">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-1/4 w-64 h-64 border-4 border-white rounded-full"></div>
              <div className="absolute bottom-0 right-1/4 w-48 h-48 border-4 border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6">
                <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <h3 className="text-3xl md:text-4xl font-black text-white">
                  Ready to Make an Impact?
                </h3>
              </div>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Your generosity transforms lives. Choose your donation method above and start making a difference today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 px-8 py-4 font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Donate Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 font-bold text-white hover:bg-white/20 transition-all duration-300">
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}