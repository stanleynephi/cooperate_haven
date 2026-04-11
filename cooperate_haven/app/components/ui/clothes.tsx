/**export homepage import the products and the card. Use maping to map each product to create a card*/
import Image from "next/image"
import { ClothingCardProp } from "../../lib/definition"
import Link from "next/link"

interface ClothesProps {
  Products: ClothingCardProp[]
}

export default function Clothes({ Products }: ClothesProps) {
  console.log(Products)
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {Products.map((product) => (
        <Link key={product.id} href={`/clothe/${product.id}`}>
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_31%] lg:flex-[1_1_23%] max-w-sm transform transition-transform hover:scale-105"
          >
            <Image
              src={product.image_url}
              alt={product.product_name}
              className="w-full h-56 object-cover"
              width={100}
              height={100}
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.product_name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-gray-900">
                  {product.price
                    ? new Intl.NumberFormat("en-GH", {
                        style: "currency",
                        currency: product.currency,
                      }).format(Number(product.price))
                    : "N/A"}
                </span>

                <span
                  className={`text-sm font-medium px-2 py-1 rounded-full ${
                    product.instock
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.instock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
