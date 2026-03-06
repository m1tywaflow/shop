import { collections } from "@/app/data/collections";
import Image from "next/image";
import { Righteous } from "next/font/google";
import Breadcrumb from "../atoms/Breadcrumb";
const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

const Assortment = () => {
  return (
    <section className="py-24">
      <div className="px-40 text-xl text-black font-mono">
        <Breadcrumb />
      </div>
      <div>
        <h1 className="text-black px-40 mt-8 font-bold font-mono text-3xl">
          PRODUCTS
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {collections.map((item) => (
          <div
            key={item.id}
            className={`${righteous.className} group cursor-pointer`}
          >
            <div className="bg-neutral-100 flex items-center justify-center p-10 overflow-hidden">
              <Image
                src={item.image}
                alt={item.subtitle}
                width={420}
                height={420}
                className="object-contain h-90 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <p className="text-lg text-neutral-400">{item.subtitle}</p>

                <h3 className="text-lg text-black font-medium">{item.title}</h3>
              </div>
              <p className="text-lg text-black font-medium">${item.price}</p>
            </div>
            <div className="flex justify-end">
              <button className="bg-black font-bold hover:bg-yellow-50 hover:text-black cursor-pointer transition duration-200 rounded-2xl p-2">
                ADD TO THE CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Assortment;
