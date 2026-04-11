import Pagination from "../components/ui/clothes/pagination"
import FilteredClothes from "../components/ui/clothes/filteredClothes"
import FilterPanel from "../components/ui/filterpanel"
import { getClothesCounts } from "../lib/data"

export default async function Page(prop: {
  searchParams?: Promise<{
    page?: string
    category?: string | never
    stock?: string
    price?: string
  }>
}) {
  const CLOTHES_PER_PAGES = 10
  const searchParams = await prop.searchParams
  const current_Category = searchParams?.category
  const clothesCount = await getClothesCounts(current_Category)
  console.log("Total Clothes Count", clothesCount)
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = Math.ceil(clothesCount / CLOTHES_PER_PAGES)

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* LEFT: FILTER PANEL */}
        <div className="md:col-span-1">
          <FilterPanel
            searchParams={searchParams}
            // category={searchParams?.category}
            // inStockOnly={searchParams?.stock}
            // maxPrice={searchParams?.price}
          />
        </div>

        {/* RIGHT: PRODUCTS + PAGINATION */}
        <div className="md:col-span-3 flex flex-col gap-6">
          {/* Products */}
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <FilteredClothes
              category={current_Category}
              currentPage={currentPage}
            />
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </section>
  )
}
