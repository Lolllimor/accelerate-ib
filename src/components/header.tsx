'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export const Header = ({
  src,
  textColor,
}: {
  src?: string;
  textColor?: string;
}) => {
  const pathname = usePathname();
  const nav = [
    { name: 'About us', id: 'about-us' },
    { name: 'Programs', id: 'programs' },
    { name: 'Community & Events', id: 'events' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="flex items-center justify-between md:py-5">
      <Link href="/">
        <Image
          src={src || ''}
          alt="Accelerate Ibadan logo"
          className="h-8 w-auto md:h-10"
          width={120}
          height={40}
          loading="lazy"
          aria-hidden="false"
        />
      </Link>

      <nav className="items-center md:gap-5 lg:gap-11.5 hidden md:flex">
        {nav.map((item) => {
          const isActive = pathname?.includes(item.id);
          return (
            <a
              key={item.id}
              href={`/${item.id}`}
              className={`${textColor} ${
                isActive ? 'font-bold' : 'font-normal'
              } text-white lg:text-base md:text-sm hover:underline transition-colors`}
            >
              {item.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
};
