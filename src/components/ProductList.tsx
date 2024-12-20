import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { wixClientServer } from '@/lib/wixClientServer'
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string | undefined;
  limit?: number;
  searchParams?:any
}) => {
  const wixClient = await wixClientServer();

  const productQuery = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 20)
    .find();
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">

      {productQuery.items.map((product: products.Product) => (
        <Link
          href={`/${product.slug}`}
          className="relative w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product?.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
            />
            {product?.media?.items[1]?.image.url && (
              <Image
                src={product?.media?.items[1]?.image.url || "product.image"}
                alt=""
                fill
                sizes="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">Ksh {product.price.price}</span>
          </div>
          <div
            className="text-sm text-gray-500"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                product.additionalInfoSections.find(
                  (section: any) => section.title === "shortDesc"
                )?.description || ""
              ),
            }}
          ></div>
          <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs w-max hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList