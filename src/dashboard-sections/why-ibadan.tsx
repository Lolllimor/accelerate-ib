'use client';
import React, { useState } from 'react';
import { whyIbadanData } from '../components/data';
import Image from 'next/image';
import { Button } from '../components/button';
import { motion } from 'framer-motion';

export const WhyIbadan = () => {
  const [isActive, setIsActive] = useState(whyIbadanData[0].title);
  return (
    <section
      id="whyibadan"
      className="bg-white px-[clamp(1.8rem,5vw,8.5rem)] md:py-[9.125rem] py-[6.25rem] relative "
    >
      <div className="md:border-[24px] border-[#EAF1F7] rounded-full bg-primary-800 size-16 md:size-24.5 absolute top-17 md:top-26.5  left-0 right-0 mx-auto border-[20px]"></div>

      <article className="flex flex-col lg:flex-row bg-primary-800 rounded-xl p-6 pt-12 md:p-20 gap-6 md:gap-[2.125rem]">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div className="flex flex-col">
            <h2 className="font-semibold text-[3.125rem] text-white font-clash leading-tight">
              Why Ibadan?
            </h2>
            <h2 className="font-semibold text-[3.125rem] text-white font-clash leading-tight w-4/5">
              A Historic City with a Bold Future
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {whyIbadanData.map((item) => (
              <div
                key={item.title}
                onMouseEnter={() => setIsActive(item.title)}
                onMouseLeave={() => setIsActive(whyIbadanData[0].title)}
                className={`cursor-pointer border-l-2 pl-[1.625rem] transition-colors duration-300 ${
                  isActive === item.title
                    ? 'border-l-white'
                    : 'border-l-[#E4E2DF]'
                }`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className={`w-6 h-6 ${
                        isActive === item.title
                          ? 'filter brightness-0 invert'
                          : 'opacity-80'
                      }`}
                    />
                    <span
                      className={`text-lg ${
                        isActive === item.title
                          ? 'text-white'
                          : 'text-[#E4E2DF]'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <p
                    className={`mt-2 text-[#E4E2DF] ${
                      isActive === item.title ? 'block' : 'hidden'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-5.5 md:flex hidden" text="Join the Movement" />
        </div>
        <div className="  relative md:w-1/2 h-[clamp(20.5rem,50vw,35.5rem)] min-w-72.5 lg:rounded-[2.3rem] overflow-hidden mt-6 md:mt-0 rounded-2xl flex md:justify-start justify-center w-full">
          {whyIbadanData.map((item) => (
            <Image
              key={item.title}
              src={item.img}
              alt={item.title}
              fill
              className={`object-cover transition-opacity duration-500 ${
                isActive === item.title ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            />
          ))}
        </div>
      </article>
    </section>
  );
};
