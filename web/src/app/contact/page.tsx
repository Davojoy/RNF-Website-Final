'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ContactHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.1 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative py-32 bg-dark overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <span className="hero-anim text-6xl block mb-6">✉️</span>
        <h1 className="hero-anim text-5xl md:text-7xl font-bold mb-4">Contact Us</h1>
        <p className="hero-anim text-xl md:text-2xl font-light opacity-90">
             Have questions or want to partner with us? We'd love to hear from you.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-24 bg-white relative -mt-16 z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="bg-light rounded-[3rem] p-10 md:p-16 shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-bold text-dark mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-4 rounded-2xl bg-white border border-gray-200 outline-none focus:ring-2 ring-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-2xl bg-white border border-gray-200 outline-none focus:ring-2 ring-primary transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-2">Subject</label>
                <input type="text" placeholder="Partnership Inquiry" className="w-full p-4 rounded-2xl bg-white border border-gray-200 outline-none focus:ring-2 ring-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-2">Message</label>
                <textarea rows={5} placeholder="How can we help?" className="w-full p-4 rounded-2xl bg-white border border-gray-200 outline-none focus:ring-2 ring-primary transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-primary text-white font-black rounded-2xl text-lg hover:shadow-xl hover:bg-primary-dark transition-all uppercase tracking-widest">
                  Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-dark mb-4">Our Office</h3>
              <p className="text-gray-600 text-lg">
                123 Empowerment Street, Wuse 2<br />
                Abuja, Nigeria
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-dark mb-4">Call Us</h3>
              <p className="text-gray-600 text-lg">+254 123 456 789<br />+234 800 000 0000</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-dark mb-4">Email Us</h3>
              <p className="text-gray-600 text-lg">info@rnf.org<br />support@rnf.org</p>
            </div>
            <div className="flex gap-6 pt-6">
              {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map(social => (
                <a key={social} href="#" className="w-14 h-14 rounded-full bg-light border border-gray-100 flex items-center justify-center text-xl text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md">
                   <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function MapSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="h-[500px] w-full rounded-[3rem] overflow-hidden shadow-inner border border-gray-100 relative">
                    <iframe 
                        title="RNF Office Location"
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight={0} 
                        marginWidth={0} 
                        src="https://www.openstreetmap.org/export/embed.html?bbox=7.4%2C9.0%2C7.6%2C9.2&amp;layer=mapnik" 
                        className="absolute inset-0 grayscale contrast-125"
                    />
                </div>
            </div>
        </section>
    );
}

export default function ContactPage() {
  return (
    <div className="page-transition">
      <ContactHero />
      <ContactSection />
      <MapSection />
    </div>
  );
}
