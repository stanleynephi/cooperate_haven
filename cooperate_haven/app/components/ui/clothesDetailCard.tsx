import Image from "next/image"
import { Product } from "@/app/lib/definition"
import AddtoCart from "./addtoCart"

export default function ClothesDetailsCard({ product }: { product: Product }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <div className="bg-white border rounded-xl shadow-sm p-8">
            <Image
              src={product.image_url}
              alt={product.product_name}
              width={500}
              height={500}
              className="object-contain mx-auto"
            />
          </div>

          <p className="text-gray-600 mt-6 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 space-y-6">
          {/* Product Title */}
          <div>
            <h1 className="text-3xl font-bold text-black">
              {product.product_name}
            </h1>

            <p className="text-gray-400 text-sm mt-1">
              SKU: {product.id.slice(0, 6)}
            </p>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold text-blue-700">
            {product.currency} {product.price}
          </p>

          {/* Color */}
          <div>
            <p className="text-sm font-semibold text-black mb-2">Color</p>

            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-black border cursor-pointer hover:scale-110 transition"></span>
              <span className="w-6 h-6 rounded-full bg-blue-600 border cursor-pointer hover:scale-110 transition"></span>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <AddtoCart product={product} />
            {/* 
            <button className="w-full border border-blue-700 text-blue-700 py-3 rounded-md font-medium hover:bg-blue-50 transition">
              Buy Now
            </button> */}
          </div>

          {/* Product Info */}
          <div className="border-t pt-6">
            <p className="font-semibold text-black">Product Info</p>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
