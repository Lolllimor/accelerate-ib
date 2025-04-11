'use client';

import React from 'react';
import { motion, animate, useMotionValue } from 'framer-motion';
import { Button } from '../components/button';

export const HeroSection = () => {
  const backgroundImage = useMotionValue(
    'radial-gradient(circle at top left, #20343F, #D65934, #ffce53, #20343F,#fbf7e9, #0d1927)'
  );

  return (
    <section id="hero" className="md:px-4 flex flex-col items-center py-[60px]">
      <motion.h2
        className="font-clash font-bold text-[clamp(1.8rem,5vw,4.5rem)] text-center leading-tight"
        style={{
          backgroundImage: `url(/hero-text.svg)`,
          backgroundSize: '300% 300%', 
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          display: 'inline-block',
          willChange: 'background-position',
        }}
        animate={{
          backgroundPosition: [
            '0% 0%', 
            '100% 0%',
            '100% 50%', 
            '50% 100%', 
            '100% 100%', 
            '0% 0%',
          ],
        }}
        transition={{
          duration: 10, 
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          times: [0, 0.25, 0.5, 0.75, 1], 
        }}
        aria-label="Building the future of tech from the heart of Ibadan"
      >
        BUILDING THE FUTURE OF TECH FROM THE HEART OF IBADAN
      </motion.h2>

      <p className="text-white text-sm font-medium md:font-normal md:text-lg md:w-3/4 text-center mt-6 md:leading-normal leading-tight">
        Accelerate Ibadan is pioneering a new wave of African tech startups,
        blending innovation with rich cultural heritage.
        <span className="hidden md:inline">
          Join our accelerator, learn in-demand skills, or launch your next big
          idea.
        </span>
      </p>
      <Button text="Join the Movement" className="mt-12" />
    </section>
  );
};
