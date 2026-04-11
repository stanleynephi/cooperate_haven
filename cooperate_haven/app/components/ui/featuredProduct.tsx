/**create a group of featured product that will be shown on the homepage
 * fetch the list of available products and create cards for it.
 */

// import { Products } from "@/app/lib/products"
import { Products } from "@/app/lib/products"
import ClothingCard from "./productcard"
import Link from "next/link"

/**function to pass the products data to the card using map */
export default function FeaturedProducts() {
  return (
    <div className="bg-[#25287A]">
      <h1 className="text-4xl sm:text-2xl font-bold text-center text-white-800 my-0 p-5">
        Featured Products
      </h1>
      <div className="bg-[#25287A] flex flex-wrap justify-center gap-10 p-4 h-full">
        {Products.slice(1, 3).map((product, index) => (
          <Link
            href="/clothes"
            key={index}
            className="flex-[1_1_100%] sm:flex-[1_1_48%] md:flex-[1_1_31%] lg:flex-[1_1_23%]"
          >
            <ClothingCard {...(product as any)} />
          </Link>
        ))}
      </div>
    </div>
  )
}
