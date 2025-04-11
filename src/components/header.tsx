'use client';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export const Header = ({
  src,
  textColor,
}: {
  src?: string;
  textColor?: string;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const nav = [
    { name: 'About us', id: 'about-us' },
    { name: 'Programs', id: 'programs' },
    { name: 'Community & Events', id: 'events' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact', id: 'contact' },
  ];

  const isValidPath =
    nav.some((item) => pathname?.includes(item.id)) || pathname === '/';

  useEffect(() => {
    if (pathname && !isValidPath) {
      router.push('/');
    }
  }, [pathname, isValidPath, router]);

  return (
    <header className="flex items-center justify-between md:py-5">
      <Link href="/">
        <img
          src={src}
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
            <Link
              key={item.id}
              href={`/${item.id}`}
              className={`${textColor} ${
                isActive ? 'font-bold' : 'font-normal'
              } text-white lg:text-base md:text-sm hover:underline transition-colors`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
