"use client"

import { ClothingCardProp } from "@/app/lib/definition"
import { Form } from "lucide-react"
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

  const totalPrice = parsedItems.reduce((total, product, index) => {
    return total + product.price * quantities[index]
  }, 0)

  const productDetails = parsedItems.map((product, index) => {
    return {
      id: product.id,
      quantity: quantities[index],
    }
  })

  const handleCheckout = async () => {
    const formsData = new FormData()
    console.log(formsData)

    const cartDetails = {
      items: productDetails,
      price: totalPrice,
    }

    /**api connection to the backend */
    await fetch("/api/checkoutprocess", {
      method: "POST",
      body: JSON.stringify(cartDetails),
    })
  }

  return (
    <section className="text-black">
      <div className="max-w-4xl mx-auto p-6">
        {parsedItems.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        ) : (
          <div>
            <h1>Order Summary</h1>
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
                    GHS {(product.price * quantities[index]).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {/**user forms for checkout. use labels and fieldsets */}
        <form className="max-w-4xl mx-auto p-6 space-y-8" method="get">
          {/* Contact Information */}
          <fieldset className="border p-6 rounded-lg">
            <legend className="text-lg font-semibold px-2">
              Contact Information
            </legend>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </fieldset>

          {/* Shipping Information */}
          <fieldset className="border p-6 rounded-lg">
            <legend className="text-lg font-semibold px-2">
              Shipping Information
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                name="company"
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Address */}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Apartment */}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Apartment, suite, etc.
              </label>
              <input
                type="text"
                name="apartment"
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* City + Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Country
                </label>
                <select
                  name="country"
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option>United States</option>
                  <option>Ghana</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>

            {/* State + Postal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  State / Province
                </label>
                <input
                  type="text"
                  name="state"
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Postal code
                </label>
                <input
                  type="text"
                  name="postal"
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </fieldset>

          <div className="">
            <button
              className="bg-blue-600 text-white px-6 py-3 my-10 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>

            <div className="">
              <p>Total: GHS {totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
