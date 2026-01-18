'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    title: "Aisha's Journey to Coding",
    subtitle: "From curiosity to creator",
    desc: "Aisha joined our 'Digital Girls' program in a rural community where tech access was zero. Today, she facilitates workshops for younger girls.",
    impact: "95% Literacy in ICT",
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
    color: "bg-blue-600"
  },
  {
    title: "Safe Spaces, Bright Futures",
    subtitle: "Reclaiming education",
    desc: "How our community safe spaces helped Sarah return to school after facing gender-based barriers that nearly ended her education.",
    impact: "Re-enrolled after 2 years",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    color: "bg-primary"
  },
  {
    title: "Health as a Foundation",
    subtitle: "Empowering through awareness",
    desc: "The story of how reproductive health education transformed a high school's confidence and reduced teen pregnancy by 40%.",
    impact: "40% reduction in teen pregnancy",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    color: "bg-accent"
  },
];

function SuccessHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[60vh] flex items-center bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay" />
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="hero-text max-w-2xl text-white">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent font-bold text-sm mb-6 border border-accent/30 tracking-widest uppercase">Success Stories</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Real Stories. Real Change.</h1>
          <p className="text-xl opacity-90 font-light leading-relaxed">
            Every girl has a story of resilience. We celebrate the courage and achievements of the young women who have transformed their lives with RNF.
          </p>
        </div>
      </div>
    </section>
  );
}

function StoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.s-card', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-16">
          {stories.map((s, i) => (
            <div key={i} className="s-card bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row items-stretch group hover:shadow-2xl transition-all duration-500">
              <div className="relative lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-6 left-6">
                   <span className="bg-white/90 backdrop-blur px-4 py-1 rounded-full text-dark text-xs font-bold uppercase shadow-lg">Story #{i+1}</span>
                </div>
              </div>
              <div className="p-10 lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-dark mb-2">{s.title}</h3>
                <p className="text-secondary font-medium mb-6 uppercase tracking-widest text-sm">{s.subtitle}</p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{s.desc}</p>
                <div className={`p-6 rounded-2xl ${s.color} text-white inline-block`}>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Impact Highlight</p>
                  <p className="text-xl font-bold leading-tight">{s.impact}</p>
                </div>
                <div className="mt-8">
                  <Link href="/contact" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">Read Full Story <span>→</span></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SuccessStoriesPage() {
  return (
    <div className="page-transition">
      <SuccessHero />
      <StoriesSection />
    </div>
  );
}
