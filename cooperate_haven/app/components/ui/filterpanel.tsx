import Link from "next/link"
import { productCategories } from "@/app/lib/data"

export default async function FilterPanel({
  searchParams,
}: {
  searchParams?: { category?: string }
}) {
  const Categories = await productCategories()
  const activeCategory = searchParams?.category
  console.log("this is the active category", searchParams?.category)

  return (
    <aside className="flex flex-col gap-5 p-5 border rounded-2xl shadow-md w-full md:w-64 bg-white">
      {/* Categories */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-black uppercase">Filter</p>

        {/* ALL */}
        <Link
          href="/clothes"
          className={`px-3 py-2 rounded-lg transition ${
            !activeCategory
              ? "bg-blue-600 text-white font-semibold"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          All
        </Link>

        {Categories.map((clothesCategory) => {
          const isActive = activeCategory === clothesCategory.id

          return (
            <Link
              key={clothesCategory.id}
              href={`/clothes?category=${clothesCategory.id}`}
              className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white font-semibold shadow"
                  : "text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              }`}
            >
              {clothesCategory.name}
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
