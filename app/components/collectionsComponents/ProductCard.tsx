import Image from "next/image";
import { collectionItem } from "@/app/types/collections";
import Link from "next/link";

type Props = {
  product: collectionItem;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer">
        <div className="relative bg-neutral-100 flex items-center justify-center p-10 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={420}
            height={420}
            className="object-contain h-90 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 flex justify-between items-start">
          <div>
            <p className="text-sm text-neutral-400">{product.subtitle}</p>
            <h3 className="text-lg text-black font-medium">{product.title}</h3>
          </div>
          <p className="text-lg font-medium text-black">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
        </div>
        <button className="mt-3 w-full bg-black text-white cursor-cell py-2 rounded-xl hover:bg-neutral-800 transition">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
