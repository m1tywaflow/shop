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
              <div className="group cursor-pointer">
                <div className="bg-neutral-100 p-10 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={400}
                    className="h-65 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <p className="text-xs text-neutral-400">
                      {product.subtitle}
                    </p>

                    <h3 className="text-sm text-black font-medium">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-sm text-black font-medium">
                    ${product.price}
                  </p>
                </div>
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
