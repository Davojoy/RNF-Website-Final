'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "RNF changed my life. Before the STEM workshop, I didn't think I could be an engineer. Now, I'm pursuing my degree.",
    author: "Sarah J.",
    role: "Program Participant",
    category: "Girl",
    img: "/images/teams/profile-pic-2.webp"
  },
  {
    quote: "As a parent, seeing my daughter gain confidence and leadership skills has been the greatest gift. RNF provides a safe, nurturing space.",
    author: "Mary K.",
    role: "Mother of Participant",
    category: "Parent",
    img: "/images/teams/profile-pic-1.webp"
  },
  {
    quote: "Partnering with RNF allowed us to reach communities we couldn't before. Their data-driven approach and community trust are unmatched.",
    author: "Dr. Ahmed L.",
    role: "Health Partner",
    category: "Partner",
    img: "/images/teams/profile-pic-3.jpg"
  },
  {
    quote: "The reproductive health sessions were eye-opening. We finally had a space to ask questions without judgment.",
    author: "Grace M.",
    role: "Program Participant",
    category: "Girl",
    img: "/images/teams/profile-pic-4.jpg"
  },
  {
    quote: "The community outreach programs have significantly reduced school dropout rates in our area. RNF is a true pillar of hope.",
    author: "Chief Omondi",
    role: "Community Leader",
    category: "Partner",
    img: "/images/teams/profile-pic-1.webp"
  },
  {
    quote: "I learned that my voice matters. RNF taught me to stand up for myself and my sisters.",
    author: "Aisha B.",
    role: "Leadership Club Member",
    category: "Girl",
    img: "/images/teams/profile-pic-2.webp"
  },
];

function TestimonialsHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative py-32 bg-secondary overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <span className="text-6xl block mb-6">💬</span>
        <h1 className="hero-text text-5xl md:text-7xl font-bold mb-4">Our Impact Stories</h1>
        <p className="hero-text text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
          Voices of transformation from the girls, parents, and partners whose lives have been touched by RNF.
        </p>
      </div>
    </section>
  );
}

function TestimonialsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.t-card', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div ref={gridRef} className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t, i) => (
            <div key={i} className="t-card break-inside-avoid bg-light p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                  <Image src={t.img} alt={t.author} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">{t.author}</h4>
                  <p className="text-secondary text-sm font-medium">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg mb-6">
                “{t.quote}”
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">{t.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="page-transition">
      <TestimonialsHero />
      <TestimonialsGrid />
    </div>
  );
}
