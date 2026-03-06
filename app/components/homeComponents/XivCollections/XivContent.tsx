"use client";
import { useState } from "react";
import { xivCollection } from "@/app/data/xivCollection";
import Image from "next/image";
import { Righteous } from "next/font/google";

const tabs = ["All", "Men", "Women", "KID"] as const;
type Tab = (typeof tabs)[number];

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});
export default function XivContent() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  return (
    <section
      className={`${righteous.className} max-w-375 mx-auto px-8 pt-16 pb-32`}
    >
      <div className="flex items-center justify-center gap-10 border-b border-neutral-200 mb-14">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-3 text-xl transition-all duration-200 ${
              activeTab === tab
                ? "text-black font-semibold"
                : "text-neutral-400 hover:text-black"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-black" />
            )}
          </button>
        ))}
      </div>
      {activeTab === "All" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {xivCollection.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer w-full max-w-155"
            >
              <div className="bg-neutral-100 rounded-3xl p-10 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={420}
                  height={420}
                  className="object-contain h-90 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 text-center space-y-1">
                <p className="text-sm uppercase tracking-wide text-neutral-500 font-semibold">
                  {item.subtitle}
                </p>

                <h3 className="text-lg text-black font-medium">{item.title}</h3>

                <p className="text-xl text-black font-semibold">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === "Men" && (
        <div className="text-center text-black">Men Products</div>
      )}
      {activeTab === "Women" && (
        <div className="text-center text-black">Women Products</div>
      )}
      {activeTab === "KID" && (
        <div className="text-center text-black">KIDS Products</div>
      )}
    </section>
  );
}
