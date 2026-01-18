'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

function CareersHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative py-32 bg-dark overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/images/our-work/paige-cody-bOVZ_f3fbQM-unsplash.jpg')] bg-cover bg-center opacity-25 mix-blend-overlay" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <span className="hero-anim text-6xl block mb-6">💼</span>
        <h1 className="hero-anim text-5xl md:text-7xl font-bold mb-4">Join Our Team</h1>
        <p className="hero-anim text-xl md:text-2xl font-light opacity-90">
          Make girls' empowerment your career. Explore opportunities to work with us.
        </p>
      </div>
    </section>
  );
}

function WhyWorkHere() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-dark mb-12">Why Work at RNF?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '💖', title: 'Purpose-Driven', desc: 'Work that directly transforms lives.' },
            { icon: '🚀', title: 'Growth', desc: 'Professional development & learning.' },
            { icon: '🤝', title: 'Culture', desc: 'Collaborative, inclusive environment.' },
          ].map((item, i) => (
            <div key={i} className="bg-light p-8 rounded-2xl">
              <span className="text-5xl block mb-4">{item.icon}</span>
              <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const jobs = [
  { title: 'Program Manager', location: 'Nairobi, Kenya', type: 'Full-Time' },
  { title: 'Communications Officer', location: 'Remote', type: 'Full-Time' },
  { title: 'Monitoring & Evaluation Analyst', location: 'Nairobi, Kenya', type: 'Contract' },
];

function OpenPositions() {
  const listRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.job-item', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, scrollTrigger: { trigger: listRef.current, start: 'top 85%' } });
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-dark mb-12">Open Positions</h2>
        {jobs.length > 0 ? (
          <ul ref={listRef} className="space-y-6">
            {jobs.map((job, i) => (
              <li key={i} className="job-item bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-xl font-bold text-dark">{job.title}</h3>
                  <p className="text-gray-500 text-sm">{job.location} • {job.type}</p>
                </div>
                <Link href="/contact" className="px-6 py-2 bg-primary text-white font-bold rounded-full text-sm hover:bg-primary-dark transition-colors">
                  Apply Now
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center p-8 bg-white rounded-2xl shadow-inner">
            <p className="text-gray-500">No open positions at the moment. Check back soon!</p>
          </div>
        )}
        <p className="text-center text-gray-500 mt-12">
          Don't see a fit? Send your CV to <a href="mailto:careers@rnf.org" className="text-primary font-bold hover:underline">careers@rnf.org</a>
        </p>
      </div>
    </section>
  );
}

export default function CareersPage() {
  return (
    <div className="page-transition">
      <CareersHero />
      <WhyWorkHere />
      <OpenPositions />
    </div>
  );
}
