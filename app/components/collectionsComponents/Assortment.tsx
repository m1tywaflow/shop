import { collections } from "@/app/data/collections";
import { Righteous } from "next/font/google";
import Breadcrumb from "../atoms/Breadcrumb";
import ProductCard from "./ProductCard";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

const Assortment = () => {
  return (
    <section className={`${righteous.className} py-24`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-sm text-neutral-600 mb-4">
          <Breadcrumb />
        </div>

        <h1 className="text-3xl font-bold text-black mb-12">PRODUCTS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {collections.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assortment;
