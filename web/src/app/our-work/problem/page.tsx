'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

function ProblemHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-bg-parallax', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.fromTo('.hero-text', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[65vh] flex items-center justify-center overflow-hidden">
      <div className="hero-bg-parallax absolute inset-0 scale-110 bg-[url('/images/our-work/sven-brandsma-7R3ezgaSJ3w-unsplash.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />
      <div className="hero-text relative z-10 text-center text-white px-4">
        <span className="inline-block text-5xl mb-4">⚠️</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">The Problem We Address</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Understanding the complex challenges facing teenage girls in marginalized communities.</p>
      </div>
    </section>
  );
}

function ContextSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.context-card', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } });
      gsap.fromTo('.context-img', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="context-card">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Understanding the Landscape</span>
          <h2 className="text-4xl font-bold text-dark mt-2 mb-6">The Context</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            In many communities where we work, entrenched gender inequalities, economic hardships, and limited access to resources create significant barriers. These challenges are compounded by:
          </p>
          <ul className="space-y-3 mb-8">
            {['Traditional gender norms limiting opportunity', 'Poverty and economic pressure', 'Lack of educational infrastructure', 'Few role models and support networks', 'Exposure to violence and exploitation'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="context-img relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
          <Image src="/images/our-work/jonathan-borba-DUrU_bZV8So-unsplash.jpg" alt="Context" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}

const challenges = [
  { icon: '🎓', title: 'Educational Barriers', items: ['School fees', 'Long distances', 'Lack of sanitary products', 'Domestic work pressure'] },
  { icon: '❤️', title: 'Health Challenges', items: ['Limited health info', 'Mental health stigma', 'Poor nutrition', 'No adolescent services'] },
  { icon: '💍', title: 'Early Marriage', items: ['Cultural practices', 'Economic incentives', 'Teenage pregnancy', 'Limited options'] },
  { icon: '🛡️', title: 'Violence & Exploitation', items: ['GBV in schools', 'Trafficking risks', 'Weak legal protection', 'Social stigma'] },
  { icon: '💰', title: 'Economic Challenges', items: ['No employment', 'No vocational training', 'Financial dependence', 'Informal work risks'] },
  { icon: '🔇', title: 'Lack of Agency', items: ['No decision-making power', 'Low confidence', 'Restricted mobility', 'Few mentors'] },
];

function ChallengesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.challenge-card', { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-dark mb-16">Key Challenges</h2>
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((ch, i) => (
            <div key={i} className="challenge-card bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-36 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">{ch.icon}</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-4">{ch.title}</h3>
                <ul className="space-y-2">
                  {ch.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatisticsSection() {
  const statsRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-val', { textContent: 0, duration: 2.5, ease: 'power1.out', snap: { textContent: 1 }, stagger: 0.2, scrollTrigger: { trigger: statsRef.current, start: 'top 75%' } });
    }, statsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={statsRef} className="py-20 bg-gradient-to-br from-dark to-[#16213e] text-white">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-12">The Problem in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { val: 132, suffix: 'M', label: 'Girls out of school' },
            { val: 12, suffix: 'M', label: 'Child marriages/year' },
            { val: 16, suffix: 'M', label: 'Adolescent births/year' },
            { val: 35, suffix: '%', label: 'Women facing violence' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-bold flex justify-center items-center"><span className="stat-val">{stat.val}</span>{stat.suffix}</div>
              <p className="text-white/70 text-sm mt-2 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-8">Sources: UNESCO, UNICEF, WHO, UN Women</p>
      </div>
    </section>
  );
}

function ResponseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-dark mb-6">Our Response: Breaking the Cycle</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          At RNF, we address these interconnected challenges through a holistic approach.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: '🎓', title: 'Educational Support', desc: 'Scholarships, supplies, and tutoring.' },
            { icon: '❤️', title: 'Health Education', desc: 'Reproductive health info & services.' },
            { icon: '🚀', title: 'Empowerment', desc: 'Leadership skills & mentorship.' },
            { icon: '🤝', title: 'Community Engagement', desc: 'Parent & community awareness.' },
          ].map((item, i) => (
            <div key={i} className="text-center p-8 bg-light rounded-2xl hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/our-work/programs" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors">
            Explore Our Programs →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ProblemPage() {
  return (
    <div className="page-transition">
      <ProblemHero />
      <ContextSection />
      <ChallengesGrid />
      <StatisticsSection />
      <ResponseSection />
    </div>
  );
}
