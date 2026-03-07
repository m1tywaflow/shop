import { collections } from "@/app/data/collections";
import Image from "next/image";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = collections.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="text-black bg-amber-50">
      <div className="max-w-7x py-20">
        <div className="">
          <Image
            src={product.image}
            alt={product.title}
            width={420}
            height={420}
            className="object-contain h-90 transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p>{product.subtitle}</p>

          <p>${product.price}</p>
        </div>
      </div>
    </section>
  );
}
