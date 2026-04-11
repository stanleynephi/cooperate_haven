import { fetchClothes } from "@/app/lib/data"
import Clothes from "../clothes"

export default async function FilteredClothes({
  category,
  currentPage,
}: {
  category: string | unknown
  currentPage: number
  stock?: string
  price?: string
}) {
  /**function to call the data fetch and then pass in the query */
  const clothes = await fetchClothes(currentPage)

  const filteredClothes = clothes.filter(
    (item) => !category || category === "All" || item.category_id === category,
  )

  return <Clothes Products={filteredClothes} />
}
