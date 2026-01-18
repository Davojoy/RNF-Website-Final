'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

// ============== PAGE BANNER ==============
function PageBanner() {
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.banner-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/about/About-banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-primary/60" />
      <div className="banner-content relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">About RNF</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-200">
          Dedicated to empowering teenage girls for a brighter future
        </p>
      </div>
    </section>
  );
}

// ============== OUR STORY SECTION ==============
function OurStorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.story-text',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
      gsap.fromTo(
        '.story-image',
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="story-text">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                RNF was founded in 2013 by a group of passionate educators and social workers who
                recognized the unique challenges facing teenage girls in marginalized communities.
                What began as a small initiative to provide menstrual health education and supplies
                in a local school has grown into a comprehensive organization addressing multiple
                aspects of girls&apos; development and empowerment.
              </p>
              <p>
                Over the years, we have expanded our programming to include educational support,
                leadership development, health awareness, and community engagement. Our work is
                guided by the belief that when girls are empowered, entire communities benefit.
              </p>
              <p>
                Today, RNF works across multiple regions, partnering with schools, community
                organizations, and government agencies to create sustainable solutions that help
                teenage girls overcome barriers and achieve their full potential.
              </p>
            </div>
          </div>

          <div className="story-image relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
            <Image
              src="/images/about/pexels-jamies-x-co-5465920.jpg"
              alt="About RNF"
              width={600}
              height={450}
              className="relative z-10 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============== WHAT WE DO SECTION ==============
const whatWeDo = [
  {
    icon: '🎓',
    title: 'Education Support',
    description:
      'Providing scholarships, educational materials, and academic mentoring to help girls stay in school and excel academically.',
  },
  {
    icon: '👥',
    title: 'Leadership Development',
    description:
      'Equipping girls with essential life skills, confidence, and leadership abilities through workshops, mentorship, and practical experience.',
  },
  {
    icon: '❤️',
    title: 'Health Awareness',
    description:
      'Promoting knowledge about reproductive health, nutrition, and mental wellbeing, and ensuring access to health services.',
  },
  {
    icon: '🤝',
    title: 'Community Engagement',
    description:
      'Working with families, schools, and community leaders to create supportive environments for girls\' development and advancement.',
  },
  {
    icon: '📢',
    title: 'Advocacy',
    description:
      'Advocating for policies and practices that protect girls\' rights and promote gender equality at local, national, and international levels.',
  },
];

function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.what-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">What We Do</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            At RNF, we take a holistic approach to addressing the needs of teenage girls.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatWeDo.map((item, index) => (
            <div
              key={index}
              className="what-card bg-gradient-to-br from-light to-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============== OUR APPROACH SECTION ==============
const approaches = [
  {
    icon: '👧',
    title: 'Girl-Centered',
    description:
      'We put girls at the center of our programming, listening to their needs, valuing their insights, and involving them in decision-making.',
  },
  {
    icon: '♿',
    title: 'Inclusive',
    description:
      'We are committed to reaching the most marginalized girls and ensuring that all our programs are accessible and inclusive.',
  },
  {
    icon: '🏘️',
    title: 'Community-Based',
    description:
      'Sustainable change happens when communities are engaged and supportive. We work closely with families, schools, and local leaders.',
  },
  {
    icon: '📊',
    title: 'Evidence-Based',
    description:
      'Our programs are informed by research and best practices in girl-focused development work. We regularly evaluate our impact.',
  },
  {
    icon: '🤝',
    title: 'Collaborative',
    description:
      'We partner with NGOs, government agencies, schools, and private sector entities to leverage resources and expertise.',
  },
];

function OurApproachSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.approach-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full mb-4">
            Our Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Our Approach</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our work is guided by several key principles that ensure lasting impact.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {approaches.map((item, index) => (
            <div
              key={index}
              className="approach-item flex gap-6 items-start bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============== LEARN MORE SECTION ==============
const learnMoreCards = [
  {
    icon: '/images/Icons/leadership.svg',
    title: 'Vision & Mission',
    description:
      'Learn about our vision for a world where every teenage girl has the opportunity to thrive.',
    href: '/about/vision-mission',
  },
  {
    icon: '/images/Icons/volunteer.svg',
    title: 'Core Values',
    description:
      'Discover the fundamental principles and values that guide our work and decisions.',
    href: '/about/core-values',
  },
  {
    icon: '/images/Icons/empowerment.svg',
    title: 'Incorporation & Governance',
    description:
      'Learn about our legal structure, board of directors, and transparent governance practices.',
    href: '/about/incorporation',
  },
];

function LearnMoreSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.learn-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-12">
          Learn More About Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {learnMoreCards.map((card, index) => (
            <div
              key={index}
              className="learn-card bg-light rounded-2xl p-8 text-center card-hover group"
            >
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Image src={card.icon} alt={card.title} width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-6">{card.description}</p>
              <Link
                href={card.href}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
              >
                Read More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============== TEAM SECTION ==============
const teamMembers = [
  {
    image: '/images/teams/profile-pic-4.jpg',
    name: 'Sarah Johnson',
    role: 'Executive Director',
    bio: 'Sarah has over 15 years of experience in non-profit management and international development, with a focus on girls\' education.',
  },
  {
    image: '/images/teams/profile-pic-1.webp',
    name: 'David Mwangi',
    role: 'Programs Director',
    bio: 'David oversees the design and implementation of all RNF programs, ensuring they effectively meet the needs of the communities we serve.',
  },
  {
    image: '/images/teams/profile-pic-3.jpg',
    name: 'Grace Ochieng',
    role: 'Finance Manager',
    bio: 'Grace manages the organization\'s finances, ensuring responsible stewardship of resources and compliance with regulatory requirements.',
  },
  {
    image: '/images/teams/profile-pic-2.webp',
    name: 'Michael Kimani',
    role: 'Community Engagement Coordinator',
    bio: 'Michael works directly with communities to build partnerships and ensure our programs are culturally relevant.',
  },
];

function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.team-member',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
            Our People
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">Our Leadership Team</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-dark">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============== CTA SECTION ==============
function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-pink-400 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Join Us in Empowering Teenage Girls
        </h2>
        <p className="text-xl text-white/90 mb-8">
          There are many ways to support our work and make a difference in the lives of teenage
          girls.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/get-involved/volunteer"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300"
          >
            Volunteer
          </Link>
          <Link
            href="/get-involved/partner"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300"
          >
            Partner With Us
          </Link>
          <Link
            href="/donate"
            className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============== MAIN PAGE ==============
export default function AboutPage() {
  return (
    <div className="page-transition">
      <PageBanner />
      <OurStorySection />
      <WhatWeDoSection />
      <OurApproachSection />
      <LearnMoreSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}
