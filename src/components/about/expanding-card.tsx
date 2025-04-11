'use client';

import { useState } from 'react';
import Image from 'next/image';
import { aboutTrend } from '../data';

// Define the card data structure
type Card = {
  id: number;
  title: string;
  description: string;
  image: string;
};

// Sample data
const cards: Card[] = [
  {
    id: 1,
    title: 'DIGITAL MARKETING',
    description:
      'Strategic digital marketing solutions to grow your online presence and reach your target audience effectively.',
    image: '/digital-marketing.jpg',
  },
  {
    id: 2,
    title: 'WORKSPACE DESIGN',
    description:
      'Modern workspace solutions that enhance productivity and create an inspiring environment for your team.',
    image: '/workspace.jpg',
  },
  {
    id: 3,
    title: 'PHOTOGRAPHY',
    description:
      'Professional photography services that capture the essence of your brand and products with artistic vision.',
    image: '/photography.jpg',
  },
  {
    id: 4,
    title: 'FASHION',
    description:
      'Trendsetting fashion concepts that blend style with functionality for the modern consumer.',
    image: '/fashion.jpg',
  },
  {
    id: 5,
    title: 'Mastering Color Usage in Design',
    description:
      'Learn the principles of color theory and how to use color effectively to evoke emotions and create impact in your designs.',
    image: '/color-design.jpg',
  },
];

export default function ExpandingCards() {
  const [activeCard, setActiveCard] = useState<number | null>(5); // Default to the last card being active

  const handleCardClick = (id: number) => {
    setActiveCard(id === activeCard ? null : id);
  };

  return (
    <div className="w-full bg-black py-12 px-4">
      <div className="flex flex-row gap-2 max-w-6xl mx-auto h-96">
        {aboutTrend.map((card, idx) => (
          <div
            key={idx}
            className={`relative rounded-lg overflow-hidden transition-all duration-700 ease-in-out cursor-pointer bg-cover bg-center ${
              activeCard === idx + 1 ? 'flex-grow' : 'flex-none w-24'
            }`}
            onClick={() => handleCardClick(idx)}
            style={{
              backgroundImage: `url(${card.src})`,
            }}
          >
            {/* Overlay to make text readable */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Title (always visible) */}
            <div
              className={`absolute ${
                activeCard === idx
                  ? 'bottom-24 left-6'
                  : 'bottom-6 left-6 -rotate-90 origin-bottom-left'
              } transition-all duration-500`}
            >
              <h3 className="text-white font-bold text-lg md:text-xl">
                {card.name}
              </h3>
            </div>

            {/* Description (only visible when expanded) */}
            <div
              className={`absolute bottom-6 left-6 right-6 transition-opacity duration-500 ${
                activeCard === idx ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-white text-sm md:text-base">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
