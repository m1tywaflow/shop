import Image from "next/image";
import { ArrowRight } from "@deemlol/next-icons";
import Link from "next/link";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

const HeroContent = () => {
  return (
    <section
      className="px-24 py-20 bg-white text-black"
      style={{
        backgroundImage: "url('/bg/noisybackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="w-[320px] space-y-10">
          <div className="space-y-4">
            <h1
              className={`text-6xl font-semibold leading-tight ${righteous.className}`}
            >
              NEW <br /> COLLECTION
            </h1>
            <p className={`text-lg text-gray-600 ${righteous.className}`}>
              Summer <br />
              2024
            </p>
          </div>
          <Link
            href="/collections"
            className={`${righteous.className} group w-52 p-2 flex items-center gap-12 text-xl hover:bg-black hover:text-white transition bg-[#D9D9D9]`}
          >
            Go To Shop
            <ArrowRight size={24} color="#000" />
          </Link>
        </div>
        <div className="flex gap-10">
          <div className="bg-gray-100 p-6">
            <Image
              src="/heroImg/whiteClothes.png"
              alt="Clothes"
              width={420}
              height={520}
              priority
            />
          </div>
          <div className="bg-gray-100 p-6">
            <Image
              src="/heroImg/blackClothes.png"
              alt="Clothes"
              width={420}
              height={520}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
