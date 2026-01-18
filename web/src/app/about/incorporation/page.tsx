'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

function IncorporationHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[50vh] flex items-center justify-center bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/about/pexels-israel-alahia-1051247995-20444547.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
      <div className="hero-content relative z-10 text-center text-white px-4">
        <div className="text-5xl mb-4 text-accent">⚖️</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Incorporation & Governance</h1>
        <p className="text-xl text-gray-300">Structure, Management, and Accountability</p>
      </div>
    </section>
  );
}

function LegalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.legal-card', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="legal-card grid md:grid-cols-2 gap-12 bg-light rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div>
            <span className="text-sm font-bold text-primary tracking-wider uppercase mb-2 block">Legal Status</span>
            <h2 className="text-3xl font-bold text-dark mb-6">Registered & Accredited</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              RNF is registered as a non-profit organization under the Non-Governmental Organizations Coordination Act (2013). We maintain strict compliance with all regulatory authorities.
            </p>
            <ul className="space-y-3">
              {['NGO Coordination Act', 'Tax Exemption Compliance', 'Financial Reporting Standards', 'Data Protection Regulations'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-dark font-medium">
                  <span className="text-accent">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-inner">
            <h3 className="text-lg font-bold text-dark mb-4 border-b pb-2">Certifications</h3>
            <div className="space-y-4">
              {[
                { name: 'ISO 9001:2015', desc: 'Quality Management Systems' },
                { name: 'NGO Council', desc: 'Code of Conduct Compliance' },
                { name: 'Global Giving', desc: 'Vetted Organization Status' },
              ].map((cert, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">📜</div>
                  <div>
                    <h4 className="font-bold text-dark">{cert.name}</h4>
                    <p className="text-sm text-gray-500">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const boardMembers = [
  { name: 'Dr. Patricia Karimi', role: 'Board Chair', bio: 'Expert in gender studies with 20+ years in development.', img: '/images/teams/profile-pic-4.jpg' },
  { name: 'James Oloo', role: 'Treasurer', bio: 'Financial management and corporate governance expert.', img: '/images/teams/profile-pic-1.webp' },
  { name: 'Dr. Emily Njeri', role: 'Secretary', bio: 'Public health specialist focusing on adolescent health.', img: '/images/teams/profile-pic-3.jpg' },
  { name: 'Samuel Kamau', role: 'Member', bio: 'Technology and innovation specialist.', img: '/images/teams/profile-pic-2.webp' },
];

function BoardSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.board-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-dark mb-16">Board of Directors</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, i) => (
            <div key={i} className="board-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="h-64 relative overflow-hidden">
                <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm">{member.bio}</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GovernanceDiagram() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Governance Structure</h2>
        <div className="relative">
          {/* Main Board Node */}
          <div className="mx-auto w-64 bg-secondary text-white p-6 rounded-xl text-center shadow-lg relative z-10 mb-12">
            <h3 className="text-xl font-bold">Board of Directors</h3>
          </div>
          
          {/* Connector Line */}
          <div className="absolute top-16 left-1/2 w-0.5 h-12 bg-gray-300 -translate-x-1/2 -z-0" />
          <div className="absolute top-28 left-1/4 right-1/4 h-0.5 bg-gray-300 -z-0" />
          <div className="absolute top-28 left-1/4 w-0.5 h-8 bg-gray-300" />
          <div className="absolute top-28 right-1/4 w-0.5 h-8 bg-gray-300" />

          {/* Sub Committees */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-light p-6 rounded-xl text-center border border-gray-200">
              <h4 className="font-bold text-dark mb-2">Executive Committees</h4>
              <p className="text-sm text-gray-500">Finance, Audit, Programs</p>
            </div>
            <div className="bg-light p-6 rounded-xl text-center border border-gray-200">
              <h4 className="font-bold text-dark mb-2">Resource Development</h4>
              <p className="text-sm text-gray-500">Fundraising & Partnerships</p>
            </div>
          </div>

          {/* Connector to Management */}
          <div className="mx-auto w-0.5 h-12 bg-gray-300 mb-[-1px]" />
          
          {/* Management Node */}
          <div className="mx-auto w-72 bg-dark text-white p-6 rounded-xl text-center shadow-lg">
            <h3 className="text-lg font-bold">Executive Director</h3>
            <p className="text-sm text-gray-400">Management Team & Staff</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IncorporationPage() {
  return (
    <div className="page-transition">
      <IncorporationHero />
      <LegalSection />
      <BoardSection />
      <GovernanceDiagram />
    </div>
  );
}
