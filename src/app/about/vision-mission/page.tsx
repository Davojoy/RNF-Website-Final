'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

function ParallaxHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.fromTo(
        '.hero-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[60vh] overflow-hidden flex items-center justify-center">
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about/About-banner.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-primary/70" />
      <div className="hero-content relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="text-6xl mb-6 animate-pulse-glow">👁️</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Vision & Mission</h1>
        <p className="text-xl md:text-2xl font-light text-gray-200">
          Our guiding principles and aspirations for a better future.
        </p>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <blockquote className="text-center">
          <div className="text-primary text-6xl opacity-20 mb-4 mx-auto leading-none">❝</div>
          <p className="text-2xl md:text-3xl font-serif text-dark leading-relaxed italic mb-8">
            "Our vision and mission are not just words on paper. They are lived through every program we implement, every girl we support, and every community we engage with."
          </p>
          <footer className="text-gray-500 font-medium tracking-wide text-sm uppercase">
            — Sarah Johnson, Executive Director
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function VisionMissionCards() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.vm-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-light">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="vm-card bg-white p-10 rounded-3xl shadow-xl border-t-4 border-secondary hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center text-4xl mb-6 text-secondary">
              👁️
            </div>
            <h2 className="text-3xl font-bold text-dark mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              A world where every teenage girl has the opportunity to thrive, realize her full potential, and contribute meaningfully to society.
            </p>
          </div>
          <div className="vm-card bg-white p-10 rounded-3xl shadow-xl border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-4xl mb-6 text-primary">
              🎯
            </div>
            <h2 className="text-3xl font-bold text-dark mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower teenage girls from marginalized communities through quality education, health awareness, leadership development, and holistic support programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const objectives = [
  { icon: '🎓', title: 'Educational Advancement', desc: 'Ensure access to quality education and academic excellence.' },
  { icon: '❤️', title: 'Health & Well-being', desc: 'Promote comprehensive health education and services.' },
  { icon: '👥', title: 'Leadership Development', desc: 'Cultivate leadership skills and self-confidence.' },
  { icon: '🛡️', title: 'Protection & Safety', desc: 'Advocate for measures that protect girls from violence.' },
  { icon: '🤝', title: 'Community Engagement', desc: 'Mobilize communities to support girls\' rights.' },
  { icon: '⚖️', title: 'Policy Advocacy', desc: 'Influence policies to advance opportunities.' },
];

function ObjectivesList() {
  const listRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.obj-item',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 75%',
          },
        }
      );
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-dark mb-16">Supporting Objectives</h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ul ref={listRef} className="space-y-6">
            {objectives.map((obj, i) => (
              <li key={i} className="obj-item flex gap-6 p-4 rounded-xl hover:bg-light transition-colors duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center text-2xl shadow-lg text-white">
                  {obj.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">{obj.title}</h3>
                  <p className="text-gray-600">{obj.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl hidden lg:block">
            <Image
              src="/images/home/Leadership-workshop-1.jpg"
              alt="Objectives visualization"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-10">
              <p className="text-white text-lg font-medium">Creating pathways to success through comprehensive support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StrategicFramework() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pillar-card', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.15, duration: 0.6, ease: 'back.out(1.7)', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-dark to-[#16213e] text-white">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Strategic Framework</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          Our framework guides our programs to address complex challenges effectively.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Education', icon: '🎓', items: ['Scholarships', 'Tutoring', 'Supplies', 'Digital Literacy'] },
            { title: 'Health', icon: '❤️', items: ['Reproductive Health', 'Mental Health', 'Nutrition', 'Services'] },
            { title: 'Empowerment', icon: '🚀', items: ['Leadership', 'Mentorship', 'Life Skills', 'Economics'] },
            { title: 'Community', icon: '🏘️', items: ['Awareness', 'Engagement', 'Partnerships', 'Advocacy'] },
          ].map((pillar, i) => (
            <div key={i} className="pillar-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="text-5xl mb-6">{pillar.icon}</div>
              <h3 className="text-xl font-bold mb-6 text-primary">{pillar.title}</h3>
              <ul className="text-left space-y-3">
                {pillar.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function VisionMissionPage() {
  return (
    <div className="page-transition">
      <ParallaxHero />
      <QuoteSection />
      <VisionMissionCards />
      <ObjectivesList />
      <StrategicFramework />
    </div>
  );
}
