'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

function ThematicHero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[55vh] flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/our-work/becca-tapert-O7sK3d3TPWQ-unsplash.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="hero-text text-center text-white px-4 relative z-10">
        <div className="text-6xl mb-6">📚</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Thematic Areas</h1>
        <p className="text-xl md:text-2xl font-light opacity-90">Four pillars driving our mission.</p>
      </div>
    </section>
  );
}

const areas = [
  {
    id: 'education',
    title: 'Education & Learning',
    icon: '🎓',
    color: 'text-secondary',
    bg: 'bg-secondary/5',
    border: 'border-secondary',
    intro: 'Education is the foundation of empowerment. We ensure girls have access to quality learning and academic support.',
    points: [
      'Formal Education Support (Fees, Uniforms)',
      'After-school Tutoring & Exam Prep',
      'Digital Literacy & Computer Skills',
      'Vocational Training for Out-of-School Girls',
    ],
    metrics: ['Increased Retention', 'Higher Transition Rates', 'Digital Skills Proficiency'],
    image: '/images/teams/profile-pic-2.webp',
  },
  {
    id: 'health',
    title: 'Health & Wellbeing',
    icon: '❤️',
    color: 'text-primary',
    bg: 'bg-primary/5',
    border: 'border-primary',
    intro: 'Promoting physical, mental, and emotional wellbeing through education, awareness, and service access.',
    points: [
      'Reproductive Health Education',
      'Mental Health Counseling & Support',
      'Nutrition & Hygiene Programs',
      'Mobile Health Clinics Partnerships',
    ],
    metrics: ['Reduced Absenteeism', 'Better Mental Health', 'Lower Teen Pregnancy Rates'],
    image: '/images/our-work/jonathan-borba-DUrU_bZV8So-unsplash.jpg',
  },
  {
    id: 'empowerment',
    title: 'Leadership & Empowerment',
    icon: '🚀',
    color: 'text-accent',
    bg: 'bg-accent/5',
    border: 'border-accent',
    intro: 'Equipping girls with the confidence, skills, and resources to become changemakers.',
    points: [
      'Leadership Development Training',
      'Life Skills & Financial Literacy',
      ' mentorship & Role Model Connection',
      'Economic Empowerment Initiatives',
    ],
    metrics: ['Leadership Roles Taken', 'Financial Indpendence', 'Self-Confidence Scores'],
    image: '/images/home/Leadership-workshop-1.jpg',
  },
  {
    id: 'community',
    title: 'Community Engagement',
    icon: '🤝',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-500',
    intro: 'Creating supportive environments by working with families, leaders, and boys.',
    points: [
      'Parent Education Workshops',
      'Male Engagement Initiatives',
      'Community Awareness Campaigns',
      'Teacher Training Programs',
    ],
    metrics: ['Community Support Level', 'Reduced GBV Reports', 'Parental Involvement'],
    image: '/images/our-work/sven-brandsma-7R3ezgaSJ3w-unsplash.jpg',
  },
];

function AreaSection({ area, index }: { area: typeof areas[0], index: number }) {
  const isEven = index % 2 === 0;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.area-content', 
        { x: isEven ? -50 : 50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      );
      gsap.fromTo('.area-image', 
        { scale: 0.9, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [isEven]);

  return (
    <section ref={sectionRef} id={area.id} className={`py-24 ${isEven ? 'bg-white' : 'bg-light'} overflow-hidden`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className={`flex flex-col lg:flex-row gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          
          <div className="area-content flex-1">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${area.bg} ${area.color} text-3xl mb-6`}>
              {area.icon}
            </div>
            <h2 className="text-4xl font-bold text-dark mb-4">{area.title}</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{area.intro}</p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-dark mb-4 uppercase tracking-wide">Key Components</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {area.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className={`mt-1.5 w-2 h-2 rounded-full ${area.color.replace('text-', 'bg-')}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-6 rounded-2xl ${area.bg} border-l-4 ${area.border}`}>
                <h3 className={`font-bold ${area.color} mb-3 flex items-center gap-2`}>
                  <i className="fas fa-chart-line"></i> Impact Metrics
                </h3>
                <div className="flex flex-wrap gap-4">
                  {area.metrics.map((m, i) => (
                    <span key={i} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-600 shadow-sm">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="area-image flex-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group">
            <Image src={area.image} alt={area.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function ThematicAreasPage() {
  return (
    <div className="page-transition">
      <ThematicHero />
      {areas.map((area, index) => (
        <AreaSection key={area.id} area={area} index={index} />
      ))}
    </div>
  );
}
