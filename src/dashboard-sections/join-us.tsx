'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '../components/button';

export const JoinUs = () => {
  return (
    <section className="pt-30 px-[clamp(1.8rem,10vw,14rem)] bg-white flex flex-col gap-10  items-center">
      <div className="w-full max-w-[1065px] aspect-video relative rounded-xl md:rounded-[35px] overflow-hidden">
        <Image
          src="/joinus.svg"
          alt="Join our tech community in Ibadan"
          fill
          className="object-cover"
          priority
        />
      </div>
      <article className="flex flex-col gap-4  max-w-[1065px]">
        <h2 className="font-clash text-primary-800 font-bold text-[clamp(1.75rem,5vw,4rem)] w-4/5 ">
          BE PART OF THE NEXT BIG THING IN TECH.
        </h2>
        <p className="text-dark-300 text-xl w-4/5">
          Ibadan has nurtured some of Nigeria’s brightest minds. Now, it’s time
          to shape the next wave of innovators. Join us and Accelerate Ibadan.
        </p>
      </article>
      <div className="w-full  max-w-[1065px]">
        <Button
          text="Join the movement"
          className="bg-primary-800 text-white border-0 w-fit"
        />
      </div>
    </section>
  );
};
