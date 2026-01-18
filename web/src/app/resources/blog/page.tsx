'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    title: "The Power of Digital Literacy for Rural Girls",
    date: "May 12, 2025",
    author: "Jane Smith",
    excerpt: "Exploring how access to coding and basic computer skills is leveling the playing field in marginalized areas.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    category: "Education"
  },
  {
    title: "Community Safe Spaces: A Shield Against GBV",
    date: "April 28, 2025",
    author: "Dr. Rose Otieno",
    excerpt: "Our latest impact report shows a consistent decline in gender-based violence where safe spaces are active.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    category: "Protection"
  },
  {
    title: "Mentorship: Building the Next Generation of Leaders",
    date: "April 15, 2025",
    author: "Alice Wambui",
    excerpt: "Why professional mentorship is the missing key to unlocking the potential of teenage girls in Kenya.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    category: "Empowerment"
  },
  {
    title: "Reproductive Health and the Future of Education",
    date: "March 30, 2025",
    author: "Samuel Kariuki",
    excerpt: "Bridging the gap between health awareness and academic attendance through holistic support.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    category: "Health"
  },
];

function BlogHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative py-32 bg-dark overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <span className="hero-anim text-6xl block mb-6">📰</span>
        <h1 className="hero-anim text-5xl md:text-7xl font-bold mb-4">Blog & Articles</h1>
        <p className="hero-anim text-xl md:text-2xl font-light opacity-90">
          Insights, research, and stories from the frontlines of girls' empowerment.
        </p>
      </div>
    </section>
  );
}

function FeaturedPost() {
  return (
    <section className="py-24 bg-white relative -mt-16 z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-light rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="relative lg:w-1/2 h-[400px] lg:h-auto">
            <Image src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80" alt="Featured" fill className="object-cover" />
          </div>
          <div className="p-12 lg:w-1/2 flex flex-col justify-center">
            <span className="text-accent font-bold text-sm tracking-widest uppercase mb-4">Featured Article</span>
            <h2 className="text-4xl font-bold text-dark mb-6 leading-tight">The Sustained Impact of Vocational Education for Out-of-School Girls</h2>
            <p className="text-gray-600 text-lg mb-8">
              A deep dive into our 5-year longitudinal study on how vocational training breaks the poverty cycle for girls who couldn't complete formal schooling.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image src="/images/teams/profile-pic-1.webp" alt="Author" fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-dark">Jane Doe</p>
                <p className="text-xs text-gray-500">Director of Programs • 15 min read</p>
              </div>
            </div>
            <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all self-start">
              Read Article
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PostsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.post-card', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl font-bold text-dark text-center">Recent Articles</h2>
          <div className="hidden md:flex gap-4">
            {['All', 'Education', 'Health', 'Empowerment'].map(cat => (
              <button key={cat} className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-primary hover:text-primary transition-all">{cat}</button>
            ))}
          </div>
        </div>
        <div ref={gridRef} className="grid md:grid-cols-2 gap-12">
          {posts.map((p, i) => (
            <div key={i} className="post-card group flex flex-col md:flex-row gap-8 items-stretch">
              <div className="relative w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="text-secondary font-bold uppercase">{p.category}</span>
                  <span>•</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{p.excerpt}</p>
                <Link href="/contact" className="text-primary font-bold text-sm tracking-widest hover:underline uppercase">Read More</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
             <button className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">Load More Articles</button>
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <div className="page-transition">
      <BlogHero />
      <FeaturedPost />
      <PostsGrid />
    </div>
  );
}
