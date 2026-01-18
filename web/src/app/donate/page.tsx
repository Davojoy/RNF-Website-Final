'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

function DonateHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative py-32 bg-primary overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <span className="hero-anim text-6xl block mb-6">💖</span>
        <h1 className="hero-anim text-5xl md:text-7xl font-bold mb-4">Empower a Girl</h1>
        <p className="hero-anim text-xl md:text-2xl font-light opacity-90">
          Your donation provides scholarships, health kits, and mentorship to teenage girls in need.
        </p>
      </div>
    </section>
  );
}

function DonationForm() {
  const [amount, setAmount] = useState('50');
  const [frequency, setFrequency] = useState('monthly');

  const presets = ['20', '50', '100', '250', '500'];

  return (
    <section className="py-24 bg-white relative -mt-16 z-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          
          <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border border-gray-50">
            <h2 className="text-3xl font-bold text-dark mb-8 text-center">Fuel the Mission</h2>
            
            {/* Frequency Toggle */}
            <div className="flex bg-light p-2 rounded-2xl mb-8">
              <button 
                onClick={() => setFrequency('monthly')}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${frequency === 'monthly' ? 'bg-primary text-white shadow-md' : 'text-gray-500'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setFrequency('once')}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${frequency === 'once' ? 'bg-primary text-white shadow-md' : 'text-gray-500'}`}
              >
                One-time
              </button>
            </div>

            {/* Presets */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {presets.map(p => (
                <button
                  key={p}
                  onClick={() => setAmount(p)}
                  className={`py-4 rounded-xl border-2 font-bold transition-all ${amount === p ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 text-gray-500 hover:border-gray-200'}`}
                >
                  ${p}
                </button>
              ))}
              <div className="relative">
                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                 <input 
                  type="text" 
                  placeholder="Other" 
                  value={presets.includes(amount) ? '' : amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full h-full py-4 pl-8 pr-4 rounded-xl border-2 border-gray-100 focus:border-primary outline-none transition-all font-bold"
                 />
              </div>
            </div>

            <button className="w-full py-5 bg-secondary text-white font-bold rounded-2xl text-xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-secondary/20">
              Donate Now
            </button>

            <div className="mt-8 flex items-center justify-center gap-6 text-gray-400">
               <i className="fab fa-cc-visa text-3xl"></i>
               <i className="fab fa-cc-mastercard text-3xl"></i>
               <i className="fab fa-cc-paypal text-3xl"></i>
               <i className="fab fa-cc-stripe text-3xl"></i>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-dark mb-10 leading-tight">Where Your Money Goes</h3>
            <div className="space-y-8">
              {[
                { amt: '$20', desc: 'Provides a dignity kit (sanitary towels & hygiene items) for 2 months.' },
                { amt: '$50', desc: 'Covers school fees and supplies for a girl for one semester.' },
                { amt: '$100', desc: 'Supports a community safe space for 10 girls for a month.' },
                { amt: '$500', desc: 'Funds a full-year STEM scholarship for a talented young woman.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent font-black text-xl shrink-0 uppercase tracking-tighter shadow-inner">
                    {item.amt}
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function DonatePage() {
  return (
    <div className="page-transition">
      <DonateHero />
      <DonationForm />
    </div>
  );
}
