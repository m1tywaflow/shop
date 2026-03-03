"use client";

import Slider from "react-slick";
import type { Settings } from "react-slick";
import { useRef } from "react";
import { products } from "../../data/products";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../UI/SliderArrows";

export default function ProductSlider() {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="py-10">
      <div className="max-w-8xl mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-3">
              <div className="border-2 border-black/20 p-4 text-center space-y-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={400}
                  className="h-75 object-contain mx-auto"
                />
                <p className="text-sm text-black">{product.subtitle}</p>
                <h3 className="font-semibold text-black">{product.title}</h3>
                <p className="text-black text-xl">${product.price}</p>
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
