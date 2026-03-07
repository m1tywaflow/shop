"use client";

import Image from "next/image";
import { useState } from "react";

type Size = "XS" | "S" | "M" | "L" | "XL" | "2X";

const sizes: Size[] = ["XS", "S", "M", "L", "XL", "2X"];

const colors = [
  "bg-gray-300",
  "bg-gray-400",
  "bg-black",
  "bg-teal-200",
  "bg-gray-100",
  "bg-indigo-200",
];

export default function ProductClient({ product }: any) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

  return (
    <section
      className="text-black bg-[#e9e9e9]"
      style={{
        backgroundImage: "url('/bg/noisybackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto py-24">
        <div className="grid grid-cols-2 gap-20 items-start">
          <div className="flex justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={520}
              height={520}
              className="object-contain"
            />
          </div>

          <div className="bg-white p-10 border border-gray-200 w-[420px]">
            <h1 className="text-xl font-semibold tracking-wide">
              {product.title.toUpperCase()}
            </h1>
            <p className="text-lg mt-2">${product.price}</p>
            <p className="text-sm text-gray-500 mt-1">MRP incl. of all taxes</p>
            <p className="text-sm mt-6 text-gray-700">{product.subtitle}</p>
            <div className="mt-8">
              <p className="text-sm mb-2">Color</p>
              <div className="flex gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`
                      w-6 h-6 border transition
                      ${color}
                      ${
                        selectedColor === index
                          ? "ring-2 ring-black scale-110"
                          : ""
                      }
                    `}
                  />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm mb-2">Size</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      border px-4 py-1 text-sm transition
                      ${
                        selectedSize === size
                          ? "bg-black text-white border-black"
                          : "hover:bg-gray-100"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              FIND YOUR SIZE | MEASUREMENT GUIDE
            </p>
            <button className="w-full mt-6 bg-gray-200 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition">
              ADD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
