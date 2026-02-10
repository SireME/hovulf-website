import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V10H8v3h2.6v8h2.9Z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M6.5 8A1.5 1.5 0 1 1 6.5 5a1.5 1.5 0 0 1 0 3ZM5 9h3v10H5V9Zm5 0h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.6 2 3.6 4.7V19h-3v-4.9c0-1.2 0-2.6-1.6-2.6-1.6 0-1.8 1.2-1.8 2.5V19h-3V9Z"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M23 12c0 2.7-.3 4.5-.7 5.4-.4.8-1 1.4-1.8 1.8-.9.4-2.7.7-5.4.7h-6c-2.7 0-4.5-.3-5.4-.7-.8-.4-1.4-1-1.8-1.8C1.3 16.5 1 14.7 1 12s.3-4.5.7-5.4c.4-.8 1-1.4 1.8-1.8C4.4 4.3 6.2 4 8.9 4h6c2.7 0 4.5.3 5.4.7.8.4 1.4 1 1.8 1.8.4.9.7 2.7.7 5.5ZM10 9v6l5-3-5-3Z"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    ),
  },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/projects", label: "Projects" },
  { href: "/impact", label: "Our Impact" },
  { href: "/leadership", label: "Leadership" },
  { href: "/get-involved", label: "Get Involved" },
];

const supportLinks = [
  { href: "/donate", label: "Donate Now" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

const resourceLinks = [
  { href: "/policies/privacy", label: "Privacy Policy" },
  { href: "/policies/transparency", label: "Financial Transparency" },
  { href: "/policies/terms", label: "Terms of Service" },
  { href: "/annual-reports", label: "Annual Reports" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-slate-900 to-gray-950 text-gray-300">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
                <Image
                  src="/assets/images/image1.png"
                  alt="HOVULF logo"
                  width={48}
                  height={48}
                  className="relative h-12 w-12 rounded-full bg-white object-contain ring-2 ring-blue-500/20"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white">HOVULF</span>
                <span className="text-xs font-semibold text-gray-400 -mt-1">Hope Foundation</span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed mb-6">
              Restoring hope and protecting dignity for vulnerable communities across Cameroon through sustainable programs and partnerships.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                <p className="text-2xl font-bold text-blue-400">500+</p>
                <p className="text-xs text-gray-400">Lives Impacted</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                <p className="text-2xl font-bold text-emerald-400">10+</p>
                <p className="text-xs text-gray-400">Communities</p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-4 border border-blue-500/20">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Stay Updated
              </h4>
              <p className="text-xs text-gray-400 mb-3">Get our monthly impact newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-full"></div>
              Get Involved
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full"></div>
              Resources
            </h3>
            <ul className="space-y-3 mb-8">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <h4 className="text-sm font-bold text-white mb-3">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">Kumba, South West Region, Cameroon</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hovulfcameroon@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    hovulfcameroon@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+237 675 100 536</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Connect With Us
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="group h-10 w-10 rounded-full border-2 border-gray-700 bg-gray-800 flex items-center justify-center text-gray-400 transition-all duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:scale-110"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-700/50">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs font-semibold text-gray-300">Verified Nonprofit</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-700/50">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-semibold text-gray-300">100% Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950/50">
        <div className="container mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-gray-500">
            <p>
              © {new Date().getFullYear()} Hope for the Vulnerable Foundation (HOVULF). All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span>Made with ❤️ for vulnerable communities</span>
              <span className="hidden md:inline">•</span>
              <Link href="/sitemap" className="hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}