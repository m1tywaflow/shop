// import { collections } from "@/app/data/collections";
// import Image from "next/image";

// type Props = {
//   params: Promise<{
//     id: string;
//   }>;
// };
// type Size = "XS" | "S" | "M" | "L" | "XL" | "2X";

// const sizes: Size[] = ["XS", "S", "M", "L", "XL", "2X"];

// export default async function ProductPage({ params }: Props) {
//   const { id } = await params;

//   const product = collections.find((item) => item.id === Number(id));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <section
//       className="text-black bg-[#e9e9e9]"
//       style={{
//         backgroundImage: "url('/bg/noisybackground.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-6xl mx-auto py-24">
//         <div className="grid grid-cols-2 gap-20 items-start">
//           <div className="flex justify-center">
//             <Image
//               src={product.image}
//               alt={product.title}
//               width={520}
//               height={520}
//               className="object-contain"
//             />
//           </div>
//           <div className="bg-white p-10 border border-gray-200 w-[420px]">
//             <h1 className="text-xl font-semibold tracking-wide">
//               {product.title.toUpperCase()}
//             </h1>
//             <p className="text-lg mt-2">${product.price}</p>
//             <p className="text-sm text-gray-500 mt-1">MRP incl. of all taxes</p>
//             <p className="text-sm mt-6 text-gray-700">{product.subtitle}</p>
//             <div className="mt-8">
//               <p className="text-sm mb-2">Color</p>
//               <div className="flex gap-2">
//                 <div className="w-6 h-6 bg-gray-300 border"></div>
//                 <div className="w-6 h-6 bg-gray-400 border"></div>
//                 <div className="w-6 h-6 bg-black border"></div>
//                 <div className="w-6 h-6 bg-teal-200 border"></div>
//                 <div className="w-6 h-6 bg-gray-100 border"></div>
//                 <div className="w-6 h-6 bg-indigo-200 border"></div>
//               </div>
//             </div>
//             <div className="mt-8">
//               <p className="text-sm mb-2">Size</p>
//               <div className="flex flex-wrap gap-2">
//                 {sizes.map((size) => (
//                   <button
//                     key={size}
//                     className="border px-4 py-1 text-sm hover:bg-gray-100 transition"
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-6">
//               FIND YOUR SIZE | MEASUREMENT GUIDE
//             </p>
//             <button className="w-full mt-6 bg-gray-200 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition">
//               ADD
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { collections } from "@/app/data/collections";
import ProductClient from "@/app/components/productComponents/ProductClient";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = collections.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductClient product={product} />;
}
