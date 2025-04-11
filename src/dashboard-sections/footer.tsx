import React from 'react';
import { Instagram } from '../components/icon/instagram';
import { Dribble } from '../components/icon/dribble';
import { Twitter } from '../components/icon/twitter';
import { Youtube } from '../components/icon/youtube';
import { Email } from '../components/icon/email';
import { Location } from '../components/icon/location';

export const Footer = () => {
  const Link = ['About us', 'Programs', 'Events', 'Resources', 'Contacts'];
  return (
    <footer className="px-7 bg-white text-white py-30">
      <div className="bg-primary-800 rounded-xl md:rounded-b-[48px] md:rounded-t-[30px] p-6 md:py-10 md:px-15 flex flex-col gap-12">
        <div className="flex items-start justify-between">
          <img
            src="/logo.svg"
            alt="Accelerate Ibadan logo"
            className="h-8 w-auto md:h-10"
            width={120}
            height={40}
            loading="lazy"
            aria-hidden="false"
          />
          <span className="font-clash font-bold text-white text-[clamp(1.75rem,5vw,3.19rem)] text-end w-1/2 leading-tight lg:flex hidden">
            The Pioneer Startup campus in Nigeria
          </span>
        </div>
        <div className="flex lg:flex-row-reverse flex-col gap-12 md:gap-20">
          {/* Top Section: Quick Links + Legal (side by side on all screen sizes) */}
          <div className="flex justify-between w-full">
            {/* Quick Links */}
            <div className="flex flex-col gap-6 lg:items-end ">
              <h5 className="md:text-xl text-18px font-semibold">
                Quick Links
              </h5>
              <div className="flex flex-col gap-4 md:text-base text-sm">
                {Link.map((item, idx) => (
                  <span key={idx}>{item}</span>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-6 lg:items-end">
              <h5 className="md:text-xl text-18px font-semibold">Legal</h5>
              <div className="flex flex-col gap-4 lg:items-end">
                <span className="md:text-base text-sm">Privacy Policy</span>
                <span className="md:text-base text-sm">
                  Terms and Conditions
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Section: Reach Us (full width below on all screens) */}
          <div className="flex flex-col gap-6">
            <h5 className="text-xl font-semibold">Reach us</h5>

            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Email />
                  <span className="text-base font-normal">
                    hello@accelerateibadan.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Location />
                  <span className="text-base font-normal">
                    3A Osanaiye Crescent, Parliament road, Ibadan
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <Instagram />
                <Dribble />
                <Twitter />
                <Youtube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
