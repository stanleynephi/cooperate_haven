"use client"

import { ClothingCardProp } from "@/app/lib/definition"
import Image from "next/image"
import { useState } from "react"

export default function CartInformation() {
  let parsedItems: ClothingCardProp[] = []

  if (typeof window !== "undefined") {
    const cartItems = localStorage.getItem("cart")
    parsedItems = cartItems ? JSON.parse(cartItems) : []
  }

  // Initialize quantity state for each item
  const [quantities, setQuantities] = useState<number[]>(
    parsedItems.map(() => 1),
  )

  const increase = (index: number) => {
    const newQuantities = [...quantities]
    newQuantities[index] += 1
    setQuantities(newQuantities)
  }

  const decrease = (index: number) => {
    const newQuantities = [...quantities]
    if (newQuantities[index] > 1) newQuantities[index] -= 1
    setQuantities(newQuantities)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {parsedItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      ) : (
        <div>
          {parsedItems.map((product, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {/* Product Image */}
              <div className="w-24 h-24 relative">
                <Image
                  src={product.image_url}
                  alt={product.product_name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">
                  {product.product_name}
                </h2>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decrease(index)}
                    className="px-2 py-1 bg-gray-200 rounded text-black"
                  >
                    -
                  </button>
                  <p className="text-gray-600">{quantities[index]}</p>
                  <button
                    onClick={() => increase(index)}
                    className="px-2 py-1 bg-gray-200 rounded text-black"
                  >
                    +
                  </button>
                </div>

                {/* <p className="text-gray-800 font-medium mt-1">
                  GHS {product.price} × {quantities[index]}
                </p> */}
              </div>

              {/* Total */}
              <div className="text-right">
                <p className="text-lg font-bold">
                  GHS {product.price * quantities[index]}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* <button onClick={ItemTotalPrice}>Checkout</button> */}
    </div>
  )
}
