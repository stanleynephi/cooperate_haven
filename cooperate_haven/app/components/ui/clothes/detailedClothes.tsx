import { fectchclothesbyId } from "@/app/lib/data"
import ClothesDetailsCard from "../clothesDetailCard"

/**async function to get the data from the database */
export default async function ClothesDetails({
  productID,
}: {
  productID: string
}) {
  /**pass the id to the await function */
  const data = await fectchclothesbyId(productID)
  const data_row = data[0]
  console.log("Fetched Data", data_row)

  return (
    <>
      <ClothesDetailsCard product={data_row} />
    </>
  )
}
