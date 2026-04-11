/**get clothes by specific id from the database query */
import ClothesDetails from "@/app/components/ui/clothes/detailedClothes"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  console.log("This is your current product ID:", id)

  return (
    <>
      <ClothesDetails productID={id} />
    </>
  )
}
