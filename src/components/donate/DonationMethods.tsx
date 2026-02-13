'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DonationMethods() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const router = useRouter();

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(label);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const methods = [
    {
      title: "Mobile Money",
      subtitle: "Cameroon",
      icon: "📱",
      color: "blue",
      gradient: "from-blue-600 to-blue-700",
      lightBg: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
      details: [
        { label: "MTN MoMo", value: "237 677 35 75 44" },
        { label: "Orange Money", value: "237 656 47 52 04" },
      ],
      accountName: "Yelluma Bihnwi Tayoh Perpetua",
      action: {
        label: "Copy Number",
        copyText: "237 677 35 75 44",
        copyLabel: "MTN MoMo",
      },
    },
    {
      title: "Bank Transfer",
      subtitle: "Local & International",
      icon: "🏦",
      color: "purple",
      gradient: "from-purple-600 to-purple-700",
      lightBg: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      details: [
        { label: "Bank", value: "ECOBANK" },
        { label: "Account Name", value: "Yelluma Bihnwi Tayoh Perpetua" },
        { label: "Account No", value: "30700009937" },
      ],
      action: {
        label: "Copy Account",
        copyText: "30700009937",
        copyLabel: "Account",
      },
    },
    {
      title: "International Donation",
      subtitle: "PayPal & Cards",
      icon: "🌍",
      color: "emerald",
      gradient: "from-emerald-600 to-emerald-700",
      lightBg: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-600",
      details: [
        {
          label: "Secure Payment",
          value: "Support our work from anywhere in the world via PayPal."
        },
      ],
      comingSoon: true,
      action: {
        label: "Donate Securely (PayPal)",
      },
    },
  ];

  const Badge = ({
    children,
    variant = 'primary'
  }: {
    children: React.ReactNode;
    variant?: 'primary' | 'gradient';
  }) => {
    const variants = {
      primary: 'bg-blue-100 text-blue-700 border-blue-200',
      gradient: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent',
    };

    return (
      <span className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${variants[variant]}`}>
        {children}
      </span>
    );
  };

  return (
    <div className="mb-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge variant="gradient">Donation Options</Badge>
        <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
          Ways to Donate
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose your preferred method to make a secure contribution
        </p>
      </div>

      {/* Donation Methods Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {methods.map((method) => (
          <div
            key={method.title}
            className="group relative overflow-hidden rounded-3xl border-2 border-slate-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className={`relative bg-gradient-to-br ${method.gradient} p-6`}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-20 h-20 border-4 border-white rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-4 border-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl mb-4 shadow-lg">
                  {method.icon}
                </div>

                <h3 className="text-2xl font-black text-white mb-1">
                  {method.title}
                </h3>
                <p className="text-sm font-semibold text-white/80">
                  {method.subtitle}
                </p>
              </div>

              {method.comingSoon && (
                <div className="absolute top-4 right-4">
                  <Badge variant="primary">Coming Soon</Badge>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="space-y-4 mb-6">
                {method.details.map((detail, i) => (
                  <div key={i}>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                      {detail.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 leading-relaxed">
                      {detail.value}
                    </p>
                  </div>
                ))}

                {method.accountName && (
                  <div className={`mt-4 pt-4 border-t ${method.borderColor}`}>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Account Name
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                      {method.accountName}
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={() => method.action.copyText && handleCopy(method.action.copyText, method.action.copyLabel!)}
                disabled={method.comingSoon}
                className={`w-full flex items-center justify-center gap-2 rounded-lg border-2 ${method.borderColor} ${method.textColor} px-6 py-3 font-bold transition-all duration-200 group-hover:gap-3 ${
                  method.comingSoon
                    ? 'opacity-50 cursor-not-allowed'
                    : `hover:bg-gradient-to-r ${method.gradient} hover:text-white hover:border-transparent`
                }`}
              >
                {copiedItem === method.action.copyLabel ? 'Copied!' : method.action.label}
              </button>

              {method.comingSoon && (
                <p className="text-xs text-center text-gray-500 mt-3">
                  We're working on enabling international payments
                </p>
              )}
            </div>

            <div className={`absolute inset-0 ${method.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div className="mt-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-50 to-slate-100 p-8 border-2 border-slate-200">
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need Help with Your Donation?
            </h3>

            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is here to assist you with any questions about the donation process or payment methods.
            </p>

            {/* ✅ UPDATED BUTTON WITH ROUTER PUSH */}
            <button
              onClick={() => router.push('/contact')}
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact Support
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
