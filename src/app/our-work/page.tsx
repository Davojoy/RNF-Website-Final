'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

function OurWorkHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-[url('/images/home/Leadership-workshop-1.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
      
      <div className="hero-content relative z-10 text-center text-white px-4">
        <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
          <span className="text-4xl">🌍</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Work</h1>
        <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto">
          Creating sustainable impact in the lives of teenage girls through holistic and community-driven approaches.
        </p>
      </div>
    </section>
  );
}

function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.approach-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const approaches = [
    { icon: '🌿', title: 'Holistic Support', desc: 'Addressing physical, emotional, and educational needs together.' },
    { icon: '👥', title: 'Community-Led', desc: 'Engaging families and local leaders as active partners.' },
    { icon: '👧', title: 'Girl-Centered', desc: 'Designing programs with direct input from the girls we serve.' },
    { icon: '📊', title: 'Evidence-Based', desc: 'Using data and research to drive our intervention strategies.' },
    { icon: '🌱', title: 'Sustainable', desc: 'Building local capacity for long-term lasting change.' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Our Approach</h2>
          <h3 className="text-4xl font-bold text-dark mb-6">Comprehensive & Transformative</h3>
          <p className="text-gray-600 text-lg">
            We believe that sustainable development happens when we address both immediate needs and long-term structural barriers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {approaches.map((item, i) => (
            <div key={i} className="approach-item text-center group">
              <div className="w-20 h-20 mx-auto bg-light rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-lg">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-dark mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactStats() {
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-number', {
        textContent: 0,
        duration: 2.5,
        ease: 'power1.out',
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 75%',
        }
      });
    }, statsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={statsRef} className="py-20 bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/home/community-health-fair.png')] bg-cover bg-fixed opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { val: 5000, suffix: '+', label: 'Girls Supported' },
            { val: 85, suffix: '%', label: 'Completion Rate' },
            { val: 25, suffix: '', label: 'Communities' },
            { val: 92, suffix: '%', label: 'Confidence Boost' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-5xl md:text-6xl font-bold mb-2 flex justify-center items-center">
                <span className="stat-number">{stat.val}</span>{stat.suffix}
              </div>
              <p className="text-white/80 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/resources/reports" className="inline-block px-8 py-3 bg-white text-secondary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
            View Impact Reports
          </Link>
        </div>
      </div>
    </section>
  );
}

function FocusAreasPreview() {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Key Areas of Focus</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our work is organized around four key interrelated thematic areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🎓', title: 'Education', desc: ' scholarships, tutoring, and digital literacy.' },
            { icon: '❤️', title: 'Health', desc: 'Reproductive health, mental wellness, and nutrition.' },
            { icon: '🚀', title: 'Empowerment', desc: 'Leadership skills, mentorship, and economic tools.' },
            { icon: '🤝', title: 'Community', desc: 'Parent workshops and community advocacy.' },
          ].map((area, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-primary">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-2">{area.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{area.desc}</p>
              <Link href="/our-work/thematic-areas" className="text-primary font-bold text-sm hover:underline">Learn more →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="h-[400px] bg-gray-100 rounded-3xl overflow-hidden shadow-inner border border-gray-200 relative">
            <iframe 
              title="RNF Program Locations Map"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://www.openstreetmap.org/export/embed.html?bbox=36.8%2C-1.4%2C37.2%2C-1.1&amp;layer=mapnik" 
              className="absolute inset-0"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-dark mb-6">Where We Work</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We currently operate in 25 communities across 5 counties, focusing on areas where girls face the most significant barriers to success.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                { title: 'Urban Informal Settlements', desc: 'High-density areas with limited resources.' },
                { title: 'Rural Communities', desc: 'Remote areas with poor access to services.' },
                { title: 'Refugee Settings', desc: 'Supporting displaced girls with unique needs.' },
              ].map((loc, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold shrink-0">{i + 1}</span>
                  <div>
                    <h4 className="font-bold text-dark">{loc.title}</h4>
                    <p className="text-sm text-gray-500">{loc.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OurWorkPage() {
  return (
    <div className="page-transition">
      <OurWorkHero />
      <ApproachSection />
      <FocusAreasPreview />
      <ImpactStats />
      <MapSection />
    </div>
  );
}
