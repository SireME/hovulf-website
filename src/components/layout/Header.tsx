"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/projects", label: "Projects" },
  { href: "/impact", label: "Impact" },
  { href: "/leadership", label: "Leadership" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Inline Button Component
  const Button = ({ 
    children, 
    variant = 'primary',
    href,
    icon,
    onClick,
    className = ''
  }: { 
    children: React.ReactNode; 
    variant?: 'primary' | 'gradient';
    href?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }) => {
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600 shadow-sm hover:shadow-md',
      gradient: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40',
    };

    const Component = href ? Link : 'button';

    return (
      <Component
        {...(href ? { href } : {})}
        {...(onClick ? { onClick } : {})}
        className={`inline-flex items-center justify-center gap-2 rounded-lg border font-bold transition-all duration-200 px-5 py-2.5 text-sm hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      >
        {children}
        {icon && icon}
      </Component>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo Section */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                <Image
                  src="/assets/images/image1.png"
                  alt="HOVULF logo"
                  width={44}
                  height={44}
                  className="relative h-11 w-11 rounded-full bg-white object-contain ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all duration-200"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-blue-600">HOVULF</span>
                <span className="text-xs font-semibold text-gray-500 -mt-1">Hope Foundation</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Section - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className={`text-sm font-semibold transition-colors duration-200 ${
                  pathname === "/contact" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact
              </Link>
              <Button
                variant="gradient"
                href="/donate"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                }
              >
                Donate Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative h-10 w-10 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-200 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`h-0.5 w-5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Secondary Info Bar - Desktop Only */}
        <div className="hidden lg:block border-t border-slate-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center justify-between py-2 text-xs">
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">Kumba, Cameroon</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">
                    <a
                      href="mailto:hovulfcameroon@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-beige-400 transition-colors"
                    >
                      hovulfcameroon@gmail.com
                    </a>
                  </span>

                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-blue-600">🌟 500+ Lives Impacted</span>
                <div className="flex gap-2">
                  <a href="#" className="h-6 w-6 rounded-full bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-colors duration-200">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="h-6 w-6 rounded-full bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-colors duration-200">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="#" className="h-6 w-6 rounded-full bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-colors duration-200">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-2xl animate-in slide-in-from-top duration-300">
            <nav className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-1">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? "bg-blue-50 text-blue-600" 
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      <span className="font-semibold">{link.label}</span>
                      <svg 
                        className={`w-5 h-5 transition-all duration-200 ${
                          isActive ? "text-blue-600 translate-x-1" : "text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1"
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  );
                })}
              </div>
              
              {/* Mobile CTA Section */}
              <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                <Button
                  variant="gradient"
                  href="/donate"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  }
                >
                  Donate Now
                </Button>
                
                {/* Contact Info */}
                <div className="bg-slate-50 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">Kumba, Cameroon</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">
                          <a
                            href="mailto:hovulfcameroon@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-beige-400 transition-colors"
                          >
                            hovulfcameroon@gmail.com
                          </a>
                        </span>

                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}