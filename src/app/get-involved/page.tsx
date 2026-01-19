'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

function GetInvolvedHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.8)' });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-secondary to-accent overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/home/community-health-fair.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="hero-content text-center text-white px-4 relative z-10">
        <span className="text-6xl block mb-6">🙌</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Get Involved</h1>
        <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
          There are many ways to join us in empowering teenage girls. Find the right one for you!
        </p>
      </div>
    </section>
  );
}

function WaysToHelp() {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.way-card', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  const ways = [
    { title: 'Volunteer', icon: '🤝', desc: 'Share your time and skills to mentor girls and support our programs.', link: '/get-involved/volunteer', color: 'from-primary to-pink-400' },
    { title: 'Partner With Us', icon: '🏢', desc: 'Collaborate as a corporate or institutional partner to drive impact.', link: '/get-involved/partner', color: 'from-secondary to-blue-400' },
    { title: 'Donate', icon: '💖', desc: 'Your financial contribution directly supports girls in need.', link: '/donate', color: 'from-accent to-teal-400' },
    { title: 'Careers', icon: '💼', desc: 'Join our team and make girls\' empowerment your career.', link: '/get-involved/careers', color: 'from-orange-400 to-amber-400' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-dark mb-4">Ways to Make a Difference</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Every contribution, big or small, brings us closer to our mission.
        </p>
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, i) => (
            <Link key={i} href={way.link} className="way-card group block">
              <div className="bg-light rounded-3xl p-8 h-full hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${way.color} flex items-center justify-center text-4xl text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {way.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{way.title}</h3>
                <p className="text-gray-600">{way.desc}</p>
                <span className="inline-block mt-6 text-primary font-bold text-sm group-hover:underline">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactHighlight() {
  return (
    <section className="py-20 bg-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          <Image src="/images/home/Leadership-workshop-1.jpg" alt="Community Impact" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">Your Support Changes Lives</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            When you get involved with RNF, you become part of a movement that has supported over 5,000 girls, achieved an 85% program completion rate, and reached 25 communities across Kenya.
          </p>
          <Link href="/donate" className="inline-block px-8 py-4 bg-accent text-dark font-bold rounded-full hover:bg-teal-300 transition-colors">
            Make a Donation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function GetInvolvedPage() {
  return (
    <div className="page-transition">
      <GetInvolvedHero />
      <WaysToHelp />
      <ImpactHighlight />
    </div>
  );
}
