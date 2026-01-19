'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    dropdown: [
      { label: 'Vision & Mission', href: '/about/vision-mission' },
      { label: 'Core Values', href: '/about/core-values' },
      { label: 'Incorporation & Governance', href: '/about/incorporation' },
    ],
  },
  {
    label: 'Our Work',
    href: '/our-work',
    dropdown: [
      { label: 'Problem We Address', href: '/our-work/problem' },
      { label: 'Thematic Areas', href: '/our-work/thematic-areas' },
      { label: 'Programs & Initiatives', href: '/our-work/programs' },
    ],
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    dropdown: [
      { label: 'Volunteer', href: '/get-involved/volunteer' },
      { label: 'Partner With Us', href: '/get-involved/partner' },
      { label: 'Careers', href: '/get-involved/careers' },
    ],
  },
  {
    label: 'Media & Stories',
    href: '/media',
    dropdown: [
      { label: 'Gallery', href: '/media/gallery' },
      { label: 'Testimonials', href: '/media/testimonials' },
      { label: 'Success Stories', href: '/media/success-stories' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    dropdown: [
      { label: 'Reports', href: '/resources/reports' },
      { label: 'Blog & Articles', href: '/resources/blog' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { x: '100%', opacity: 0 },
          { x: '0%', opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          x: '100%',
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        });
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/girl-Logo.svg"
              alt="RNF Logo"
              width={50}
              height={50}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className={`text-2xl font-bold font-heading transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              RNF
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 font-medium transition-colors duration-200 rounded-lg hover:bg-white/10 ${
                    isScrolled ? 'text-dark hover:text-primary' : 'text-white'
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className="inline-block ml-1 w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl overflow-hidden transform origin-top animate-dropdown">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-3 text-dark hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Donate CTA */}
            <Link
              href="/donate"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-pink-400 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 btn-hover-effect animate-pulse-glow"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ opacity: isMobileMenuOpen ? 1 : 0 }}
      >
        <div className="p-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-dark"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="mt-12 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-lg font-medium text-dark hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 text-gray-600 hover:text-primary transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/donate"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-6 px-6 py-3 bg-gradient-to-r from-primary to-pink-400 text-white font-semibold rounded-full text-center"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
