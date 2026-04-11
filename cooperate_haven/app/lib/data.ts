/**query the database and select items */
import postgres from "postgres"
import { ClothingCardProp, Product } from "./definition"

/**database connection */
const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" })

export async function productCategories() {
  const data = await sql`
        SELECT id, name, slug FROM category
    `
  return data
}

/**get count of product in the database */
export async function getClothesCounts(category?: string): Promise<number> {
  /**create pagination based on the category */
  if (category) {
    const result = await sql<
      { count: string }[]
    >`SELECT COUNT (*) FROM products WHERE category_id = ${category}`

    return Number(result[0].count)
  }

  const result = await sql<{ count: string }[]>`
    SELECT COUNT(*) FROM products
  `
  return Number(result[0].count)
}

const CLOTHE_PER_PAGES = 10
export async function fetchClothes(page: number): Promise<ClothingCardProp[]> {
  const offset = (page - 1) * CLOTHE_PER_PAGES

  const data = await sql<ClothingCardProp[]>`
    SELECT * from products
    LIMIT ${CLOTHE_PER_PAGES}
    OFFSET ${offset}
  `
  return data
}

/**query database for a specific clothes data */
export async function fectchclothesbyId(id: string) {
  /**pass the clothes id into the fetch database query */
  const data = await sql<Product[]>`
    SELECT * FROM products WHERE id = ${id}
  `
  return data
}

// const CLOTHES_PER_PAGE = 40
// export async function productCatalogue(current_page: number) {
//   //offset is set to skips certain number of rows before returning query
//   //paired with limit to create pagination
//   const offset = (current_page - 1) * CLOTHES_PER_PAGE

//   const data = await sql`
//         SELECT * FROM products
//         LIMIT ${CLOTHES_PER_PAGE} OFFSET ${offset}
//     `

//   return data
// }

// export async function GET() {
//   /**try catch to trigger the data fetch from the database*/
//   try {
//     return Response.json([await productCategories(), await productDetails()])
//   } catch (error) {
//     return Response.json({ error }, { status: 500 })
//   }
// }
