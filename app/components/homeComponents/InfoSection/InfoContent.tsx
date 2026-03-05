import Image from "next/image";
import { PT_Mono } from "next/font/google";
const images = [
  {
    src: "/fashionDesign/firstImg.png",
    alt: "FirstLook",
    offset: "mt-0",
  },
  {
    src: "/fashionDesign/second.png",
    alt: "SecondLook",
    offset: "mt-16",
  },
  { src: "/fashionDesign/third.png", alt: "ThirdLook", offset: "mt-0" },
  {
    src: "/fashionDesign/fourth.png",
    alt: "FourthLook",
    offset: "mt-20",
  },
];
const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: "400",
});

const InfoContent = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto pt-20 pb-30 text-black">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className={`${ptMono.className} uppercase text-5xl`}>
            Our Approach to Fashion Design
          </h1>
          <p className="text-lg w-134 mx-auto">
            at elegant vogue , we blend creativity with craftsmanship to create
            fashion that transcends trends and stands the test of time each
            design is meticulously crafted, ensuring the highest quelity
            exqulsite finish
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 items-start">
          {images.map((img, i) => (
            <div key={i} className={`relative w-full h-105 ${img.offset}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-sm"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default InfoContent;
