"use client"

import { Product } from "@/app/lib/definition"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CartInformation() {
  const router = useRouter()

  const [cart, updateCart] = useState<Product[]>(() => {
    if (typeof window === "undefined") return []

    /**get the cart and store the data */
    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : []
  })

  /**set and update the quantities of items in the cart */
  const [quantities, setquantities] = useState<number[]>([])

  /**set quantities with cart length */
  useEffect(() => {
    setquantities(cart.map(() => 1))
  }, [cart.length])

  /**sync with locastorage new update */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  /**increase and decrease actions */
  const increase = (index: number) => {
    setquantities((prev) => {
      const updateCart = [...prev]
      updateCart[index] += 1
      return updateCart
    })
  }

  const decrease = (index: number) => {
    setquantities((prev) => {
      const updated = [...prev]
      if (updated[index] > 1) updated[index] -= 1
      return updated
    })
  }

  const removeFromCart = (id: string) => {
    updateCart((prev) => prev.filter((item) => item.id !== id))
  }

  /**product total */
  const totalPrice = cart.reduce((total, product, index) => {
    return total + Number(product.price) * (quantities[index] || 1)
  }, 0)

  const productDetails = cart.map((product, index) => ({
    id: product.id,
    quantity: quantities[index] || 1,
  }))

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const formValues = Object.fromEntries(formData.entries())

    const cartDetails = {
      items: productDetails,
      price: totalPrice,
      customer: formValues,
    }

    /**api connection to the backend */
    const res = await fetch("/api/checkoutprocess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })

    const data = await res.json()

    if (data.success) {
      router.push(data.redirectUrl)
      localStorage.clear()
    }
  }

  return (
    <section className="bg-gray-100 min-h-screen py-10 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
        {/* LEFT SIDE — FORM */}
        <div>
          <form
            className="bg-white p-8 rounded-xl shadow-sm space-y-8"
            onSubmit={handleCheckout}
          >
            {/* Contact Information */}
            <fieldset className="border border-gray-200 p-6 rounded-lg">
              <legend className="text-lg font-semibold px-2 text-gray-700">
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
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </fieldset>

            {/* Shipping Information */}
            <fieldset className="border border-gray-200 p-6 rounded-lg">
              <legend className="text-lg font-semibold px-2 text-gray-700">
                Shipping Information
              </legend>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">
                  Apartment, suite, etc.
                </label>
                <input
                  type="text"
                  name="apartment"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country
                  </label>
                  <select
                    name="country"
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500"
                  >
                    <option>United States</option>
                    <option>Ghana</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    State / Province
                  </label>
                  <input
                    type="text"
                    name="state"
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500"
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
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </fieldset>
            <fieldset className="border border-gray-200 p-6 rounded-lg">
              <legend className="text-lg font-semibold px-2 text-gray-700">
                Delivery method
              </legend>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Standard */}
                <label className="border rounded-lg p-4 cursor-pointer flex items-start justify-between hover:border-indigo-500 has-[:checked]:border-indigo-600 has-[:checked]:ring-2 has-[:checked]:ring-indigo-200">
                  <div>
                    <p className="font-medium">Standard</p>
                    <p className="text-sm text-gray-500">4–10 business days</p>
                    <p className="text-sm font-semibold mt-1">GHS 5.00</p>
                  </div>

                  <input
                    type="radio"
                    name="shipping"
                    value="standard"
                    defaultChecked
                    className="mt-1 accent-indigo-600"
                  />
                </label>

                {/* Express */}
                <label className="border rounded-lg p-4 cursor-pointer flex items-start justify-between hover:border-indigo-500 has-[:checked]:border-indigo-600 has-[:checked]:ring-2 has-[:checked]:ring-indigo-200">
                  <div>
                    <p className="font-medium">Express</p>
                    <p className="text-sm text-gray-500">2–5 business days</p>
                    <p className="text-sm font-semibold mt-1">GHS 16.00</p>
                  </div>

                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    className="mt-1 accent-indigo-600"
                  />
                </label>
              </div>
            </fieldset>

            <button
              type="submit"
              disabled={cart.length === 0}
              className={`w-full py-3 rounded-lg font-semibold transition shadow-md
    ${
      cart.length === 0
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-indigo-600 hover:bg-indigo-700 text-white"
    }`}
            >
              Confirm order
            </button>
          </form>
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow-sm h-fit sticky top-10">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Order summary
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <>
              {cart.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-4 border-b"
                >
                  <div className="w-16 h-16 relative">
                    <Image
                      src={product.image_url || "/images/default-product.jpg"}
                      alt={product.product_name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-sm">
                      {product.product_name}
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => decrease(index)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{quantities[index]}</span>
                      <button
                        onClick={() => increase(index)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>

                      <button
                        onClick={() => {
                          removeFromCart(product.id.toString())
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="text-sm font-semibold">
                    GHS {(Number(product.price) * quantities[index]).toFixed(2)}
                  </div>
                </div>
              ))}

              {/* Summary */}
              <div className="mt-6 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>GHS {totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>GHS 5.00</span>
                </div>

                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>GHS 5.52</span>
                </div>

                <div className="flex justify-between font-semibold text-lg border-t pt-4 mt-4">
                  <span>Total</span>
                  <span>GHS {(totalPrice + 5 + 5.52).toFixed(2)}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
