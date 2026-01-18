'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Education', 'Health', 'Empowerment', 'Community'];

const images = [
  { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80', category: 'Education', title: 'STEM Workshop' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', category: 'Education', title: 'Library Study Session' },
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80', category: 'Health', title: 'Wellness Checkup' },
  { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80', category: 'Community', title: 'Community Outreach' },
  { src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80', category: 'Empowerment', title: 'Leadership Seminar' },
  { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', category: 'Empowerment', title: 'Mentorship Circle' },
  { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80', category: 'Health', title: 'Mental Health Talk' },
  { src: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80', category: 'Community', title: 'Town Hall Meeting' },
];

function GalleryHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[50vh] flex items-center justify-center bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30 scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      <div className="hero-text relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Gallery</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">Capturing moments of transformation and impact across our communities.</p>
      </div>
    </section>
  );
}

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-item', 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, i) => (
            <div 
              key={`${img.title}-${i}`} 
              className="gallery-item group relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <Image 
                src={img.src} 
                alt={img.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                <h3 className="text-white font-bold text-lg leading-tight">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GalleryPage() {
  return (
    <div className="page-transition">
      <GalleryHero />
      <GalleryGrid />
    </div>
  );
}
