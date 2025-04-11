import React from 'react';
import Image from 'next/image';
import { Button } from '../components/button';

export const Event = () => {
  const data = [
    {
      title: 'Funding 101 : How to Secure Your First Investor',
      description:
        'Unlock the secrets to securing your first investor. Learn proven strategies from industry experts and take your startup to the next level!',
      img: '/event1.svg',
    },
    {
      title: 'AI & Yoruba Culture: The Future of Digital Creativity',
      description:
        'Explore the intersection of artificial intelligence and Yoruba heritage. Join thought leaders in a discussion on how culture shapes the future of tech.',
      img: '/event2.svg',
    },
  ];
  return (
    <section className="md:bg-white bg-primary-800 md:py-53 py-12 lg:px-30 px-6 flex flex-col gap-12  ">
      <article className="flex md:flex-row flex-col gap-4 justify-between items-center">
        <h2 className="font-clash md:text-[#262B3F] md:w-1/2 leading-tight text-[clamp(1.75rem,4vw,3.19rem)] font-semibold text-white">
          What’s Happening at Accelerate Ibadan
        </h2>
        <p className="md:text-dark-300 text-white text-xl font-medium md:w-2/5">
          Get latest news on Workshops, hackathons, and game-changing
          announcements all in one place.
        </p>
      </article>
      <div className="flex md:flex-row flex-col md:gap-6 gap-12 items-start pb-6">
        {data.map((item, idx) => (
          <article
            key={idx}
            className={`${idx === 0 ? '' : ''} flex gap-5 flex-col w-full`}
          >
            <div
              className={`${
                idx === 0 ? 'h-[264px]' : 'md:h-[504px] h-[264px]'
              } w-full relative rounded`}
            >
              <Image
                fill
                src={item.img}
                alt={item.title}
                className="object-cover rounded"
              />
            </div>
            <div className="flex flex-col md:gap-2 gap-5">
              <h4 className="md:text-primary-800 text-white  text-xl font-semibold font-clash">
                {item.title}
              </h4>
              <p className="md:text-dark-300 text-white text-base">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <Button text="View all events" className=' border border-white md:border-0 w-full md:bg-primary-800 md:w-fit'/>
    </section>
  );
};
