import { collections } from "@/app/data/collections";
import { Righteous } from "next/font/google";
import Breadcrumb from "../atoms/Breadcrumb";
import ProductCard from "./ProductCard";
import FiltersSidebar from "@/app/components/collectionsComponents/FilterSidebar";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

const Assortment = () => {
  return (
    <section className={`${righteous.className} py-24`}>
      <div className="max-w-400 mx-auto px-6 flex gap-16">
        <aside className="w-94 shrink-0">
          <FiltersSidebar />
        </aside>
        <div className="flex-1">
          <div className="text-sm text-neutral-600 mb-4">
            <Breadcrumb />
          </div>
          <h1 className="text-3xl font-bold text-black mb-8">PRODUCTS</h1>
          <div className="flex items-center justify-between mb-12 gap-6">
            <input
              type="text"
              placeholder="Search"
              className="w-80 border text-black border-black px-4 py-2 bg-neutral-100"
            />
            <div className="flex flex-wrap gap-2">
              {[
                "NEW",
                "BEST SELLERS",
                "SHIRTS",
                "POLO SHIRTS",
                "SHORTS",
                "T-SHIRTS",
                "JEANS",
                "JACKETS",
              ].map((tag) => (
                <button
                  key={tag}
                  className="border text-black border-black px-4 py-1 text-xs hover:bg-black hover:text-white transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {collections.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assortment;
