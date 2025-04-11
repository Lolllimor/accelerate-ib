import React from 'react';

export const Header = ({
  src,
  textColor,
}: {
  src?: string;
  textColor?: string;
}) => {
  const nav = [
    { name: 'About us', id: 'about' },
    { name: 'Programs', id: 'programs' },
    { name: 'Community & Events', id: 'community' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact', id: 'contact' },
  ];
  return (
    <header className=" flex items-center justify-between md:py-5">
      <img
        src={src}
        alt="Accelerate Ibadan logo"
        className={` h-8 w-auto md:h-10`}
        width={120}
        height={40}
        loading="lazy"
        aria-hidden="false"
      />

      <nav className={` items-center md:gap-5 lg:gap-11.5 hidden md:flex`}>
        {nav.map((item, idx) => (
          <a
            key={idx}
            href={`#${item.id}`}
            className={`${textColor} text-white lg:text-base md:text-sm`}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};
