"use client";

import Image from "next/image";
import { useState } from "react";

type Size = "XS" | "S" | "M" | "L" | "XL" | "2XL";

const sizes: Size[] = ["XS", "S", "M", "L", "XL", "2XL"];

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
  const [quantity, setQuantity] = useState(1);

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
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
                NEW
              </span>
              <Image
                src={product.image}
                alt={product.title}
                width={460}
                height={460}
                className="object-contain"
              />
            </div>
          </div>
          <div className="bg-white p-10 border border-gray-200 w-[420px] font-mono">
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
                      w-6 h-6 border transition cursor-pointer
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
                      border px-4 py-1 text-sm transition cursor-pointer
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
            <div className="mt-8">
              <p className="text-sm mb-2">Quantity</p>
              <div className="flex items-center border w-32 justify-between px-3 py-1">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="text-lg"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              FIND YOUR SIZE | MEASUREMENT GUIDE
            </p>
            <button
              disabled={!selectedSize}
              className="w-full cursor-pointer mt-6 bg-gray-200 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition disabled:opacity-40"
            >
              ADD TO BAG
            </button>
            <div className="mt-10 text-sm text-gray-600 space-y-2">
              <p>✓ Free shipping worldwide</p>
              <p>✓ 30 day returns</p>
              <p>✓ Secure payment</p>
            </div>
            <div className="mt-10 border-t pt-6 text-sm text-gray-700 space-y-2">
              <p>• 100% premium cotton</p>
              <p>• Relaxed fit</p>
              <p>• Made in Portugal</p>
              <p>• Machine wash cold</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
