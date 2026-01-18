'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

function PartnerHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative py-32 bg-secondary overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/images/home/community-health-fair.png')] bg-cover bg-center opacity-15 mix-blend-overlay" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <span className="hero-anim text-6xl block mb-6">🏢</span>
        <h1 className="hero-anim text-5xl md:text-7xl font-bold mb-4">Partner With Us</h1>
        <p className="hero-anim text-xl md:text-2xl font-light opacity-90">
          Collaborate with RNF to create strategic, sustainable impact for girls across Kenya.
        </p>
      </div>
    </section>
  );
}

const partnerTypes = [
  { title: 'Corporate Partnerships', icon: '🏛️', desc: 'Engage your employees, fund programs, or sponsor events aligned with your CSR goals.' },
  { title: 'Foundation Grants', icon: '📜', desc: 'Provide grant funding to support specific initiatives or scale existing programs.' },
  { title: 'Academic Collaboration', icon: '🎓', desc: 'Partner for research, internships, or capacity building in girls\' education.' },
  { title: 'Government & NGOs', icon: '🌐', desc: 'Collaborate on policy advocacy and joint community development projects.' },
];

function PartnerTypesSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.partner-card', { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-dark mb-16">Partnership Opportunities</h2>
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerTypes.map((type, i) => (
            <div key={i} className="partner-card bg-light p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow text-center">
              <span className="text-5xl block mb-6">{type.icon}</span>
              <h3 className="text-xl font-bold text-dark mb-3">{type.title}</h3>
              <p className="text-gray-600 text-sm">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
          <Image src="/images/teams/profile-pic-3.jpg" alt="Partnership Benefits" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-dark mb-6">Why Partner With RNF?</h2>
          <ul className="space-y-4">
            {[
              'Measurable social impact aligned with SDGs.',
              'Brand visibility and co-branding opportunities.',
              'Employee engagement through volunteering.',
              'Access to impact reports and success stories.',
              'Join a network of like-minded change-makers.',
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-gray-700">
                <span className="mt-1.5 text-accent text-xl">✔</span> {benefit}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="inline-block mt-10 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PartnerPage() {
  return (
    <div className="page-transition">
      <PartnerHero />
      <PartnerTypesSection />
      <BenefitsSection />
    </div>
  );
}
