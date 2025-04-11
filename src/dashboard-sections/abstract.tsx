'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Abstract = () => {
  return (
    <motion.section
      initial="rest"
      whileHover="hover"
      id="abstract"
      className="bg-[#F4E6BC] py-10 md:py-16 flex justify-center rounded-t-3xl overflow-hidden"
    >
      <motion.div
        variants={{
          rest: {
            scale: 0.9,
          },
          hover: {
            scale: 1.2,
          },
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
        className="relative w-[clamp(18rem,50vw,27rem)] h-[clamp(10rem,30vw,15rem)]"
      >
        <Image
          src="/abstract.svg"
          alt="Decorative abstract illustration"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.section>
  );
};
