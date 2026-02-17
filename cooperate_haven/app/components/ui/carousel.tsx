"use client"

import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"

const brands = [
  { id: 1, name: "Brand 1" },
  { id: 2, name: "Brand 2" },
  { id: 3, name: "Brand 3" },
  { id: 4, name: "Brand 4" },
  { id: 5, name: "Brand 5" },
]

// 🔥 duplicate the array
const loopBrands = [...brands, ...brands]
console.log(loopBrands)

export default function BrandCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  )

  return (
    <section className="py-0">
      <h1 className="text-4xl sm:text-2xl font-bold text-center text-blue-800 my-0 p-5">
        Featured Brands
      </h1>
      <div className="overflow-hidden py-3" ref={emblaRef}>
        <div className="flex">
          {loopBrands.map((brand, index) => (
            <div key={index} className="flex-[0_0_25%] px-4">
              <div
                className="
              bg-[#3A3782]
              text-white
              rounded-3xl
              p-6
              h-40
              flex
              items-center
              justify-center
              transition-all
              duration-300
            "
              >
                <p className="text-xl font-semibold tracking-wide">
                  {brand.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
