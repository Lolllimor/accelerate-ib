import React from 'react'

export const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button
      className={`${className} border border-[#EBF2F9] px-7.5 py-3.5 rounded-full w-fit text-white `}
    >
      {text}
    </button>
  );
};
