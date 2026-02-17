/**create a card using the dataprop provided for the data */
import { ClothingCardProp } from "@/app/lib/definition"
import Image from "next/image"

export default function ClothingCard(prop: ClothingCardProp) {
  return (
    <div className="bg-white shadow-lg p-4 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl duration-300">
      <div className="w-36 h-36 relative mb-4">
        <Image
          src={prop.image}
          alt={prop.name}
          fill
          className="object-contain"
        />
      </div>

      <div>
        <p className="font-semibold text-gray-800">{prop.name}</p>
        <p className="text-gray-500 mt-1">
          {prop.currency} {prop.price}
        </p>
      </div>
    </div>
  )
}
