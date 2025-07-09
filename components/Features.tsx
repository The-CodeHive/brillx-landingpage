'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, BookOpen, Brain, BarChart2, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const featureItems = [
  {
    icon: Search,
    title: 'Ask Anything, Learn Everything',
    description: 'Type any question and get a clear, friendly explanation—perfect for homework help or satisfying your curiosity.',
  },
  {
    icon: BookOpen,
    title: 'Learning Paths for Every Age',
    description: 'Choose from guided lessons tailored for kids, teens, or adults, and keep growing your knowledge step by step.',
  },
  {
    icon: Brain,
    title: 'AI Learning Buddy',
    description: 'BrillX doesn’t just give answers—it helps you understand with stories, examples, and fun facts.',
  },
  {
    icon: BarChart2,
    title: 'Track Your Learning Journey',
    description: 'See what you’ve learned and explore new topics based on your interests.',
  },
  {
    icon: Award,
    title: 'Fun Challenges & Quizzes',
    description: 'Test your knowledge with interactive quizzes and earn badges as you learn!',
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.why-card');

    cards.forEach((card: any, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="features noto" ref={sectionRef}>
      <h1>What You Can Do with BrillX</h1>
      <div className="why-highlights">
        {featureItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="why-card">
              <Icon size={48} className="mb-4" />
              <h3 className="font-kalnia text-xl mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
