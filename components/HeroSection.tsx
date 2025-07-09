'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power3.out' } });

    tl.fromTo(
      sectionRef.current,
      { filter: 'blur(20px)', opacity: 0 },
      { filter: 'blur(0px)', opacity: 1, duration: 0.5 }
    )
      .fromTo(
        h1Ref.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)' },
        "+=1"
      )
      .fromTo(
        h2Ref.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)' },
        "+=1"
      )
      .fromTo(
        pRef.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)' },
        "+=1"
      )
      .fromTo(
        btnRef.current,
        { scale: 0.8, opacity: 0, filter: 'blur(10px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)' },
        "+=1"
      );
  }, []);

  return (
    <div ref={sectionRef} className='hero-section'>
      <DotLottieReact
        className='hero-animation'
        src="https://lottie.host/3fd833c2-9b53-4e55-9289-a431fa30df91/hYyh6zwgdY.lottie"
        loop
        autoplay
      />
      <h1 ref={h1Ref} className='hero-h1 kalnia'>Brillx</h1>
      <h2 ref={h2Ref} className='hero-h2 petit'>Curiosity Has No Limits.</h2>
      <p ref={pRef} className='hero-p noto'>
        BrillX is your personal AI learning buddy, ready to answer any question and turn learning into an adventure. For kids, teens, and lifelong learners—discover knowledge instantly, in fun and simple ways.
      </p>
      <div>
        <a href="https://thebrillx.vercel.app" target='_blank' rel="noopener noreferrer">
          <button ref={btnRef} className="btn noto">Start Learning</button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
