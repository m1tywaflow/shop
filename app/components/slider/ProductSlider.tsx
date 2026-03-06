"use client";

import Slider from "react-slick";
import type { Settings } from "react-slick";
import { useRef } from "react";
import { products } from "../../data/products";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../UI/SliderArrows";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});
export default function ProductSlider() {
  const sliderRef = useRef<Slider>(null!);

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className={`${righteous.className} py-10`}>
      <div className="max-w-8xl mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-3">
              <div className="group relative border border-black/10 p-5 text-center space-y-4 rounded-xl bg-white hover:shadow-xl transition-all duration-300">
                {product.oldPrice && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                )}
                <div className="overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={400}
                    className="h-70 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm text-gray-500">{product.subtitle}</p>
                <h3 className="font-semibold text-black text-lg">
                  {product.title}
                </h3>
                <p className="flex justify-center gap-3 items-center text-xl">
                  <span className="text-green-600 font-semibold">
                    ${product.price}
                  </span>

                  {product.oldPrice && (
                    <span className="text-gray-400 text-sm line-through">
                      ${product.oldPrice}
                    </span>
                  )}
                </p>
                <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 cursor-pointer">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center gap-3 mt-6">
          <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </div>
    </section>
  );
}
