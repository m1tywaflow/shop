"use client";

import { CustomArrowProps } from "react-slick";

const arrowBaseClasses =
  "flex items-center justify-center cursor-pointer transition-all duration-300";

export const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      onClick={onClick}
      className={`${arrowBaseClasses} w-11 h-11 border border-gray-300 bg-black text-white hover:bg-white hover:text-black`}
      aria-label="Previous slide"
    >
      ‹
    </button>
  );
};

export const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      onClick={onClick}
      className={`${arrowBaseClasses} w-11 h-11 border border-gray-300 bg-black text-white hover:bg-white hover:text-black`}
      aria-label="Next slide"
    >
      ›
    </button>
  );
};