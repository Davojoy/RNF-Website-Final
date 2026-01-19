'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

function ProgramsHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative py-32 bg-dark overflow-hidden flex flex-col items-center text-center">
      <div className="absolute inset-0 bg-[url('/images/our-work/paige-cody-bOVZ_f3fbQM-unsplash.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />
      <div className="relative z-10 px-4 max-w-4xl">
        <span className="hero-anim inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-bold text-sm mb-6 border border-accent/30">Initiatives</span>
        <h1 className="hero-anim text-5xl md:text-7xl font-bold text-white mb-6">Programs & Initiatives</h1>
        <p className="hero-anim text-xl text-gray-300">
          Translating our mission into action through evidence-based, community-driven interventions.
        </p>
      </div>
    </section>
  );
}

const programs = [
  {
    title: 'Girls Empowerment Clubs',
    tag: 'Empowerment',
    age: '12-18',
    desc: 'Safe spaces in schools where girls develop leadership skills, build confidence, and learn about their rights.',
    stats: ['95% Confidence Boost', '87% Academic Improvement'],
    img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Mentorship Program',
    tag: 'Mentorship',
    age: '14-22',
    desc: 'Connecting young women with successful professionals for career guidance and personal development.',
    stats: ['90% Higher Ed Entry', 'Career Clarity'],
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Girls in STEM',
    tag: 'Education',
    age: '10-18',
    desc: 'Hands-on workshops in science and technology to inspire the next generation of female innovators.',
    stats: ['75% STEM Interest', 'Tech Skills'],
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Safe Spaces Initiative',
    tag: 'Protection',
    age: '12-18',
    desc: 'Community centers providing protection, counseling, and support for girls at risk.',
    stats: ['60% Less Violence', 'Legal Support'],
    img: '/images/our-work/sven-brandsma-7R3ezgaSJ3w-unsplash.jpg',
  },
  {
    title: 'Digital Girls',
    tag: 'Digital Inclusion',
    age: '14-19',
    desc: 'Bridging the digital divide with coding camps and digital literacy training.',
    stats: ['95% Literacy', 'Access to Tech'],
    img: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Health & Wellness',
    tag: 'Health',
    age: '12-19',
    desc: 'Comprehensive education on reproductive health, nutrition, and mental wellbeing.',
    stats: ['Better Health Knowledge', 'Reduced Teen Pregnancy'],
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
];

function ProgramsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.prog-card', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <div key={i} className="prog-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <Image src={prog.img} alt={prog.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full">{prog.tag}</span>
                  <span className="bg-dark/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">{prog.age} yrs</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{prog.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{prog.desc}</p>
                
                <div className="bg-light p-4 rounded-xl mb-6">
                  {prog.stats.map((stat, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-700 font-medium mb-1 last:mb-0">
                      <span className="text-secondary">✓</span> {stat}
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="text-center w-full py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                  Get Involved
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramModel() {
  const modelRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.step-dot', { scale: 0 }, { scale: 1, duration: 0.5, stagger: 0.2, scrollTrigger: { trigger: modelRef.current, start: 'top 60%' } });
      gsap.fromTo('.step-content', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, delay: 0.1, scrollTrigger: { trigger: modelRef.current, start: 'top 60%' } });
    }, modelRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={modelRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">Our Program Model</h2>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {[
              { icon: '🔍', title: 'Identify', desc: 'Assess community needs' },
              { icon: '📝', title: 'Design', desc: 'Create tailored interventions' },
              { icon: '⚙️', title: 'Implement', desc: 'Execute with partners' },
              { icon: '📈', title: 'Monitor', desc: 'Track progress constantly' },
              { icon: '🌟', title: 'Evaluate', desc: 'Measure lasting impact' },
            ].map((step, i) => (
              <div key={i} className="text-center step-content">
                <div className="step-dot w-20 h-20 mx-auto bg-white border-4 border-secondary rounded-full flex items-center justify-center text-3xl shadow-lg mb-6 relative">
                  {step.icon}
                  <div className="absolute -bottom-2 w-4 h-4 bg-secondary rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProgramsPage() {
  return (
    <div className="page-transition">
      <ProgramsHero />
      <ProgramsGrid />
      <ProgramModel />
    </div>
  );
}
