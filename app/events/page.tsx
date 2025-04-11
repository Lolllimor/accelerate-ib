'use client';
import { aboutTrend } from '@/src/components/data';
import { Header } from '@/src/components/header';
import { Footer } from '@/src/dashboard-sections/footer';
import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Page = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [eventFilter, setEventFilter] = useState<'latest' | 'upcoming'>(
    'latest'
  );
  const imageArray = Array.from(
    { length: 13 },
    (_, i) => `/program${i + 1}.svg`
  );

  const data = [
    { title: 'Friendship Club', amount: 50, img: '/events1.svg' },
    { title: 'Mindfulness Meetup', amount: 50, img: '/events2.svg' },
    { title: 'Tech Talk', amount: 50, img: '/events3.svg' },
    { title: 'Fitness Bootcamp', amount: 50, img: '/events4.svg' },
    { title: 'Startup Showcase', amount: 50, img: '/events5.svg' },
    { title: 'Career Coaching', amount: 50, img: '/events6.svg' },
    { title: 'Book Exchange', amount: 50, img: '/events7.svg' },
    { title: 'Coding Club', amount: 50, img: '/events8.svg' },
  ];
  return (
    <>
      <section className='bg-[url("/abouut-bg.svg")] bg-cover bg-no-repeat pt-12 flex flex-col  px-[clamp(1.8rem,5vw,8.5rem)]'>
        <Header src="/dark-logo.svg" textColor="!text-primary-800" />
        <article className="py-[90px] flex flex-col gap-6 items-center">
          <h2 className="font-clash font-bold text-[clamp(1.8rem,5vw,4.5rem)] text-center leading-tight w-2/3">
            {'Experience Innovation in Action'.toUpperCase()}
          </h2>
          <p className="text-dark-300 font-medium text-xl w-2/3 text-center">
            From insightful workshops to high-energy pitch events, explore the
            moments that bring our community together.
          </p>
        </article>
      </section>
      <div className="py-20 px-[clamp(1.8rem,5vw,8.5rem)] bg-white">
        <h5 className="font-clash font-semibold text-2xl">Trending Now</h5>
        <div className="mt-8 flex gap-7.5 overflow-auto">
          {aboutTrend.map((item, idx) => (
            <article
              key={idx}
              className={`relative max-w-[482px] h-[490px] rounded-[20px]  shadow-md hover:shadow-lg transition-shadow duration-300 ${
                activeCard === idx + 1
                  ? 'w-[482px] flex-shrink-0 flex-grow'
                  : 'w-[150px]  flex-shrink-0 grayscale'
              }`}
              style={{
                backgroundImage: `url(${item.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              onClick={() => {
                setActiveCard(idx + 1);
              }}
            >
              {activeCard === idx + 1 && (
                <div className="absolute bottom-0  flex flex-col items-end px-7 pb-12  w-11/12 text-white gap-3">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-2xl font-semibold font-clash">
                      {item.name}
                    </h3>
                    <MdOutlineArrowOutward color="#fff" size={24} />
                  </div>
                  <p className="text-18 ">{item.description}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
      <div className=" py-20 px-[clamp(1.8rem,5vw,8.5rem)] bg-white gap-12">
        <h5 className="font-clash font-semibold text-2xl">All Events</h5>
        <div className="flex flex-col gap-4">
          <div className="py-5 flex justify-between">
            <div className="gap-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#EFF3F6] flex items-center justify-center">
                <BsArrowLeft size={20} />
              </div>
              <div className="w-12 h-12 rounded-full bg-[#EFF3F6] flex items-center justify-center">
                <BsArrowRight size={20} />
              </div>
            </div>
            <div className="border rounded-lg p-2.5 flex items-center gap-6">
              <button
                className={`py-2 px-3 text-sm font-medium rounded-lg cursor-pointer ${
                  eventFilter === 'latest'
                    ? 'bg-primary-800 text-white'
                    : 'text-primary-800'
                }`}
                onClick={() => setEventFilter('latest')}
              >
                Latest Events
              </button>
              <button
                className={`py-2 px-3 text-sm font-medium rounded-lg cursor-pointer ${
                  eventFilter === 'upcoming'
                    ? 'bg-primary-800 text-white'
                    : 'text-primary-800'
                }`}
                onClick={() => setEventFilter('upcoming')}
              >
                Upcoming Events
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-7.5">
            {data.map((item, idx) => (
              <div
                key={idx} // Always include a key prop when mapping
                className="relative w-full max-w-[270px] h-[500px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300  p-5"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                role="img"
                aria-label={item.title || `Image ${idx + 1}`} // Provide alt text for accessibility
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 flex items-end p-4">
                  {item.title && (
                    <div className="text-white flex flex-col gap-1 absolute bottom-5 ">
                      <h3 className="font-semibold text-2xl font-clash">
                        {item.title}
                      </h3>
                      {item.amount && (
                        <p className="text-xs font-semibold line-clamp-2">
                          {item.amount}K VIEWS
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-30 px-[clamp(1.8rem,5vw,8.5rem)] bg-white flex flex-col gap-16 ">
        <div className="flex flex-col items-center gap-4 w-full">
          <h4 className="font-semibold text-46px font-clash">
            Check our latest gallery
          </h4>
          <p className="text-base text-[#3F3C3D] w-2/5 text-center">
            Team with all the tools they need to streamline your event planning
            process. Some top artists have gained global{' '}
          </p>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {imageArray.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`image-${idx}`}
              className="w-full rounded-xl"
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
