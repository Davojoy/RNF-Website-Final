'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const reports = [
  { year: '2024', title: 'Impact Statement & Financials', size: '4.2 MB', type: 'Annual Report' },
  { year: '2023', title: 'Girls Empowerment Study', size: '5.6 MB', type: 'Research Report' },
  { year: '2023', title: 'Annual Financial Report', size: '2.8 MB', type: 'Annual Report' },
  { year: '2022', title: 'Community Transformation Case Study', size: '3.1 MB', type: 'Case Study' },
  { year: '2022', title: 'Program Impact Summary', size: '1.9 MB', type: 'Briefing' },
];

function ReportsHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative py-32 bg-secondary overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <span className="text-6xl block mb-6">📊</span>
        <h1 className="hero-text text-5xl md:text-7xl font-bold mb-4">Transparency & Impact</h1>
        <p className="hero-text text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
          Access our annual reports, research findings, and financial statements as we remain accountable to our supporters.
        </p>
      </div>
    </section>
  );
}

function ReportsList() {
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.report-row', 
        { x: -20, opacity: 0 }, 
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.6, scrollTrigger: { trigger: listRef.current, start: 'top 80%' } }
      );
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-light rounded-[2.5rem] p-12 shadow-inner border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h2 className="text-3xl font-bold text-dark">Impact Reports Archive</h2>
            <div className="flex gap-4">
                 <select className="bg-white px-4 py-2 rounded-xl border border-gray-200 text-sm focus:ring-2 ring-primary outline-none">
                     <option>All Years</option>
                     <option>2024</option>
                     <option>2023</option>
                     <option>2022</option>
                 </select>
            </div>
          </div>

          <div ref={listRef} className="space-y-4">
            {reports.map((report, i) => (
              <div key={i} className="report-row bg-white p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 border-transparent border hover:border-primary/20 hover:shadow-xl transition-all group">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex flex-col items-center justify-center font-bold shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="text-xs">{report.year}</span>
                      <i className="fas fa-file-pdf text-xl"></i>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">{report.type}</span>
                    <h3 className="text-xl font-bold text-dark leading-tight mt-1">{report.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">PDF Document • {report.size}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                   <button className="px-6 py-2 bg-dark text-white text-sm font-bold rounded-full hover:bg-black transition-colors">Preview</button>
                   <button className="p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"><i className="fas fa-download"></i></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ReportsPage() {
  return (
    <div className="page-transition">
      <ReportsHero />
      <ReportsList />
    </div>
  );
}
