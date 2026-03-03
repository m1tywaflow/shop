import Image from "next/image";
import { ArrowRight } from "@deemlol/next-icons";
import Link from "next/link";

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
            <h1 className="text-6xl font-semibold leading-tight">
              NEW <br /> COLLECTION
            </h1>
            <p className="text-lg text-gray-600">
              Summer <br />
              2024
            </p>
          </div>
          <Link
            href="/collections"
            className="flex items-center gap-4 text-lg hover:text-orange-600 transition"
          >
            Go To Shop
            <ArrowRight size={20} color="#000" />
          </Link>
        </div>
        <div className="flex gap-10">
          <div className="bg-gray-100 p-6">
            <Image
              src="/heroImg/whiteCLothes.png"
              alt="Clothes"
              width={420}
              height={520}
              priority
            />
          </div>
          <div className="bg-gray-100 p-6">
            <Image
              src="/heroImg/blackCLothes.png"
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
