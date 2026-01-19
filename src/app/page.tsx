'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

// ============== HERO SECTION ==============
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo(
        textRef.current?.children || [],
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out', delay: 0.3 }
      );

      // Hero image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, x: 100 },
        { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      );

      // Parallax effect on scroll
      gsap.to(heroRef.current, {
        backgroundPositionY: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/home/group-of-school-teen-girls.jpg')" }}
    >
      {/* Dark overlay with lighter gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/40 to-primary/20" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Teenage Girls,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-300">
                Uplifting Generations
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
              Creating hope and possibilities through education, empowerment, and holistic support for
              marginalized teenage girls across Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-dark transition-all duration-300 btn-hover-effect"
              >
                Learn More
              </Link>
              <Link
                href="/donate"
                className="px-8 py-4 bg-gradient-to-r from-primary to-pink-400 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 btn-hover-effect animate-pulse-glow"
              >
                Donate Now
              </Link>
            </div>
          </div>

          <div ref={imageRef} className="hidden lg:block relative">
            <div className="relative w-full max-w-lg mx-auto">
              
              <Image
                src="/images/home/girl-hero-logo.png"
                alt="Empowering Teenage Girls"
                width={500}
                height={500}
                className="relative z-10 animate-float drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// ============== ABOUT PREVIEW SECTION ==============
function AboutPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.about-image',
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="about-content">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
              Creating Opportunities for Every Girl
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              RNF is a non-profit organization dedicated to empowering teenage girls from marginalized
              communities through education, health awareness, and comprehensive support programs.
              We address the unique challenges facing adolescent girls and work to create sustainable
              solutions that foster their development and success.
            </p>
            <blockquote className="border-l-4 border-primary bg-light pl-6 py-4 rounded-r-lg mb-8">
              <p className="text-dark italic text-lg">
                &ldquo;Every girl deserves the opportunity to realize her full potential and contribute
                meaningfully to society.&rdquo;
              </p>
            </blockquote>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark hover:shadow-lg transition-all duration-300"
            >
              Read More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="about-image relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
            <Image
              src="/images/home/ChatGPT Image Apr 15, 2025, 08_16_46 PM.png"
              alt="Teenage girls participating in an RNF program"
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

// ============== FOCUS AREAS SECTION ==============
const focusAreas = [
  {
    icon: '/images/Icons/education.svg',
    title: 'Education',
    description:
      'We provide educational support, scholarships, and resources to ensure girls can access quality education and complete their schooling.',
  },
  {
    icon: '/images/Icons/empowerment.svg',
    title: 'Empowerment',
    description:
      'Our leadership programs and mentorship initiatives equip girls with the skills, confidence, and networks to become agents of change.',
  },
  {
    icon: '/images/Icons/health.svg',
    title: 'Health',
    description:
      'We promote awareness about reproductive health, nutrition, and mental wellbeing, ensuring girls have access to healthcare services.',
  },
];

function FocusAreasSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.focus-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
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
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">Our Focus Areas</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="focus-card bg-white rounded-2xl p-8 shadow-lg card-hover group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image src={area.icon} alt={area.title} width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============== FEATURED PROGRAM SECTION ==============
function FeaturedProgramSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.featured-image',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.featured-content',
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="featured-image relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-accent/20 rounded-3xl transform -rotate-3" />
            <Image
              src="/images/home/pexels-mikhail-nilov-9301297.jpg"
              alt="Girls in Leadership Program"
              width={600}
              height={450}
              className="relative z-10 rounded-2xl shadow-2xl"
            />
          </div>

          <div className="featured-content order-1 lg:order-2">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full mb-4">
              Featured Program
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">Girls in Leadership</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our flagship leadership development program helps teenage girls discover their strengths,
              develop essential skills, and prepare for future leadership roles in their communities
              and beyond.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Through workshops, mentorship, and practical experience, participants build confidence,
              improve decision-making abilities, and learn to advocate for themselves and others.
            </p>
            <Link
              href="/our-work/programs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-full hover:bg-secondary/90 hover:shadow-lg transition-all duration-300"
            >
              Explore Our Programs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============== STATISTICS SECTION ==============
const stats = [
  { value: '85%', label: 'of schoolgirls re-enrolled' },
  { value: '65%', label: 'reduction in abandonment' },
  { value: '500+', label: 'testimonials from beneficiaries' },
  { value: '10+', label: 'years of service' },
];

function StatisticsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-r from-secondary to-primary text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Impact</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============== NEWSLETTER SECTION ==============
function NewsletterSection() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Stay Updated</h2>
        <p className="text-gray-600 text-lg mb-8">
          Subscribe to our newsletter to receive updates about our work, upcoming events, and ways to
          get involved.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark hover:shadow-lg transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

// ============== SOCIAL FEED SECTION ==============
const socialPosts = [
  {
    platform: 'instagram',
    image: '/images/home/Leadership-workshop-1.jpg',
    date: '2 days ago',
    content: 'Our leadership workshop with 30 teenage girls from Port Harcourt was a huge success! #GirlPower #Empowerment',
  },
  {
    platform: 'facebook',
    image: '/images/home/scholarships.jpg',
    date: '1 week ago',
    content: 'Thanks to our donors, we have provided scholarships to 50 more girls this semester! #Education #ThankYou',
  },
  {
    platform: 'twitter',
    image: '/images/home/community-health-fair.png',
    date: '2 weeks ago',
    content: "Join us for our upcoming community health fair focusing on adolescent girls' wellbeing. #HealthAwareness",
  },
  {
    platform: 'linkedin',
    image: '/images/home/partnership-Educational-Resources.jpg',
    date: '3 weeks ago',
    content: "We're proud to announce our new partnership with Educational Resources Foundation to expand our reach! #Partnership",
  },
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="6" r="1.5" />
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  };
  return icons[platform] || null;
};

function SocialFeedSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.social-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
            Social Media
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">Connect With Us</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, index) => (
            <div
              key={index}
              className="social-card bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <span className="text-secondary">
                    <PlatformIcon platform={post.platform} />
                  </span>
                  {post.date}
                </div>
                <p className="text-gray-700 text-sm line-clamp-3">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============== MAIN PAGE COMPONENT ==============
export default function HomePage() {
  return (
    <div className="page-transition">
      <HeroSection />
      <AboutPreviewSection />
      <FocusAreasSection />
      <FeaturedProgramSection />
      <StatisticsSection />
      <NewsletterSection />
      <SocialFeedSection />
    </div>
  );
}
