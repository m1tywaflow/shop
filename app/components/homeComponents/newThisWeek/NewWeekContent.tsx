import ProductSlider from "../../slider/ProductSlider";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});
const NewWeekSection = () => {
  return (
    <section
      className="px-24 py-20 bg-white border-t-2"
      style={{
        backgroundImage: "url('/bg/noisybackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${righteous.className} flex justify-between items-center mb-12`}
      >
        <h2 className="text-4xl font-bold text-black">
          NEW THIS WEEK <span className="text-blue-600">(50)</span>
        </h2>

        <button className="text-black hover:text-orange-400 transition">
          See All
        </button>
      </div>
      <div>
        <ProductSlider />
      </div>
    </section>
  );
};

export default NewWeekSection;
