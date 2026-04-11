"use client"

import { useState, useEffect } from "react"
import { Product } from "@/app/lib/definition"

export default function AddtoCart({ product }: { product: Product }) {
  const [cart, updateCart] = useState<Product[]>(() => {
    /**get the local storage upon initial load of the page */
    if (typeof window === "undefined") return []

    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : []
  })

  /**set the isAdded state to match the data in the cart localstorage */
  const isAdded = cart.some((item) => item.id === product.id)

  useEffect(() => {
    /**set the cart item to local storage */
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  function handleAddToCart(product: Product) {
    updateCart((prevCart) => [...prevCart, product])
  }

  /**update button to include the functions */
  return (
    <button
      type="button"
      className="w-full bg-blue-700 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      onClick={() => handleAddToCart(product)}
      disabled={isAdded}
    >
      Add to Cart
    </button>
  )
}
