'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PlaceholderPageProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function PlaceholderPage({ title, subtitle, backgroundImage }: PlaceholderPageProps) {
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.banner-content', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 });
    }, bannerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="page-transition">
      <section
        ref={bannerRef}
        className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined, backgroundColor: !backgroundImage ? '#3273dc' : undefined }}
      >
        {backgroundImage && <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-primary/60" />}
        <div className="banner-content relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">{subtitle}</p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-dark mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-8">We are working on bringing you exciting content for this page. Check back soon!</p>
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all">
              Go Back Home
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
