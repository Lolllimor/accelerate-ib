'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Housing = () => {
  const first = [
    '/first1.svg',
    '/first2.svg',
    '/first3.svg',
    '/first1.svg',
    '/first2.svg',
    '/first3.svg',
    '/first3.svg',
  ];
  const second = [
    '/second1.svg',
    '/second2.svg',
    '/second3.svg',
    '/second1.svg',
    '/second2.svg',
    '/second3.svg',
  ];

  return (
    <section className="lg:bg-background bg-[#F4E6BC] py-20 md:py-25 px-[clamp(1.8rem,5vw,8.5rem)] flex flex-col items-center ">
      <h2 className=" font-clash text-[#262B3F] font-semibold text-[clamp(1.75rem,5vw,3.75rem)] text-center md:w-3/4 leading-tight">
        Flexible and Affordable Housing
        <span className="bg-[linear-gradient(180deg,_#0D1927,_#D65934)] text-transparent bg-clip-text ">
          {' '}
          for Entrepreneurs
        </span>
      </h2>
      <motion.div
        initial="rest"
        whileHover="hover"
        className="flex flex-col gap-12 overflow-x-clip w-full md:pt-25 pt-17.5  "
      >
        <motion.div
          variants={{
            rest: { x: 0, y: 0 },
            hover: { x: 100, y: -50 },
          }}
          transition={{
            type: 'tween',
            duration: 0.8,
          }}
          className="flex gap-12 items-center -translate-x-44 "
        >
          {first.map((item, idx) => (
            <div
              key={idx}
              className="relative  min-w-[clamp(17.5rem,30vw,25.5rem)] h-[clamp(12.5rem,20vw,17rem)]"
            >
              <Image
                src={item}
                alt={`Flexible affordable housing option ${idx + 1}`}
                fill
                className="object-cover md:rounded-2xl"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-12 items-center max-h-[270px]"
          variants={{
            rest: { x: 0, y: 0 },
            hover: { x: -20, y: -50 },
          }}
          transition={{
            type: 'tween',
            duration: 0.8,
          }}
        >
          {second.map((item, idx) => (
            <div
              key={idx}
              className="relative  min-w-[clamp(17.5rem,30vw,25.5rem)] h-[clamp(12.5rem,20vw,17rem)] "
            >
              <Image
                src={item}
                alt={`Flexible affordable housing option ${idx + 1}`}
                fill
                className="object-cover md:rounded-2xl"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
