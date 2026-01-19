'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

function CoreValuesHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.75)' });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="hero-content text-center text-white px-4">
        <div className="inline-block p-4 rounded-full bg-white/20 mb-6 backdrop-blur-md">
          <span className="text-4xl">💎</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Core Values</h1>
        <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto">
          The principles that guide our work, culture, and decisions.
        </p>
      </div>
    </section>
  );
}

const values = [
  { title: 'Respect & Dignity', icon: '🙏', desc: 'We treat everyone with respect and uphold their inherent dignity, valuing diverse perspectives.' },
  { title: 'Equity & Inclusion', icon: '⚖️', desc: 'We actively seek to reach the most marginalized and challenge discrimination.' },
  { title: 'Integrity', icon: '🛡️', desc: 'We conduct operations with the highest standards of transparency and accountability.' },
  { title: 'Innovation', icon: '💡', desc: 'We embrace continuous learning and seek creative solutions to complex challenges.' },
  { title: 'Collaboration', icon: '🤝', desc: 'We work closely with communities and partners to leverage collective expertise.' },
  { title: 'Excellence', icon: '⭐', desc: 'We strive for excellence and are committed to creating measurable, sustainable impact.' },
];

function ValuesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.value-card', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <div key={i} className="value-card bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-3xl mb-6">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{val.title}</h3>
              <p className="text-gray-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LivingValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.living-row').forEach((row: any) => {
        gsap.fromTo(row.querySelector('.content-col'), 
          { x: -50, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: row, start: 'top 75%' } }
        );
        gsap.fromTo(row.querySelector('.image-col'), 
          { x: 50, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: row, start: 'top 75%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl space-y-32">
        <h2 className="text-4xl font-bold text-center text-dark mb-12">How We Live Our Values</h2>
        
        {/* Row 1 */}
        <div className="living-row grid lg:grid-cols-2 gap-16 items-center">
          <div className="content-col">
            <h3 className="text-2xl font-bold text-primary mb-4">In Our Programs</h3>
            <ul className="space-y-4">
              {['Thorough needs assessments with input from girls', 'Creating safe, inclusive spaces', 'Adapting approaches for different learning styles'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1.5 w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="image-col relative h-[400px] rounded-3xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image src="/images/home/Leadership-workshop-1.jpg" alt="Programs" fill className="object-cover" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="living-row grid lg:grid-cols-2 gap-16 items-center">
          <div className="image-col lg:order-1 relative h-[400px] rounded-3xl overflow-hidden shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image src="/images/home/community-health-fair.png" alt="Community" fill className="object-cover" />
          </div>
          <div className="content-col lg:order-2">
            <h3 className="text-2xl font-bold text-primary mb-4">In Community Engagement</h3>
            <ul className="space-y-4">
              {['Engaging communities as partners, not beneficiaries', 'Respecting local customs while advocating for rights', 'Celebrating community successes'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1.5 w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 3 */}
        <div className="living-row grid lg:grid-cols-2 gap-16 items-center">
          <div className="content-col">
            <h3 className="text-2xl font-bold text-primary mb-4">In Our Organization</h3>
            <ul className="space-y-4">
              {['Maintaining a diverse team and board', 'Transparent financial management', 'Inclusive decision-making processes'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1.5 w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="image-col relative h-[400px] rounded-3xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image src="/images/teams/profile-pic-4.jpg" alt="Organization" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-accent text-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Share Our Values? Join Our Community!</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/get-involved/volunteer" className="px-8 py-3 bg-white text-secondary font-bold rounded-full hover:shadow-lg transition-all">Volunteer</Link>
          <Link href="/donate" className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-secondary transition-all">Donate</Link>
        </div>
      </div>
    </section>
  );
}

export default function CoreValuesPage() {
  return (
    <div className="page-transition">
      <CoreValuesHero />
      <ValuesGrid />
      <LivingValuesSection />
      <CTASection />
    </div>
  );
}
