'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

function VolunteerHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative py-32 bg-primary overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/images/teams/profile-pic-4.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <span className="hero-text text-6xl block mb-6">🤝</span>
        <h1 className="hero-text text-5xl md:text-7xl font-bold mb-4">Become a Volunteer</h1>
        <p className="hero-text text-xl md:text-2xl font-light opacity-90">
          Share your time, skills, and passion to make a direct impact on the lives of teenage girls.
        </p>
      </div>
    </section>
  );
}

const roles = [
  { title: 'Mentors', icon: '👩‍🏫', desc: 'Guide girls through academic and life decisions with one-on-one support.' },
  { title: 'Tutors', icon: '📚', desc: 'Help students improve their academic performance and prepare for exams.' },
  { title: 'Event Volunteers', icon: '🎉', desc: 'Assist with community outreach events and awareness campaigns.' },
  { title: 'Skill Trainers', icon: '💻', desc: 'Teach practical skills like coding, design, or public speaking.' },
  { title: 'Administrative', icon: '📋', desc: 'Support our office with data entry, communications, or logistics.' },
  { title: 'Remote Support', icon: '🌐', desc: 'Contribute online through content creation, social media, or translations.' },
];

function RolesSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.role-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-dark mb-4">Volunteer Opportunities</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          We have a range of roles that match different skills and availability.
        </p>
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, i) => (
            <div key={i} className="role-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-4xl block mb-4">{role.icon}</span>
              <h3 className="text-xl font-bold text-dark mb-2">{role.title}</h3>
              <p className="text-gray-600 text-sm">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-16">How to Get Started</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />
          {[
            { step: 1, title: 'Apply Online', desc: 'Fill out our volunteer application form.' },
            { step: 2, title: 'Orientation', desc: 'Attend our virtual or in-person orientation session.' },
            { step: 3, title: 'Get Matched', desc: 'We will match you with a role based on your skills and interests.' },
            { step: 4, title: 'Make Impact', desc: 'Start volunteering and changing lives!' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-8 mb-12 ${i % 2 === 1 ? 'md:flex-row-reverse text-right' : ''}`}>
              <div className="hidden md:flex flex-1 justify-end">{i % 2 === 0 && <div className="max-w-sm"><h3 className="text-xl font-bold text-dark">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>}</div>
              <div className="relative z-10 w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-lg">{item.step}</div>
              <div className="flex-1">{i % 2 === 1 ? <div className="max-w-sm"><h3 className="text-xl font-bold text-dark">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div> : <div className="md:hidden max-w-sm"><h3 className="text-xl font-bold text-dark">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contact" className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-full text-lg hover:bg-primary-dark transition-colors shadow-lg">
            Apply to Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function VolunteerPage() {
  return (
    <div className="page-transition">
      <VolunteerHero />
      <RolesSection />
      <ProcessSection />
    </div>
  );
}
