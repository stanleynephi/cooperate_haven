/**query the database and select items */
import postgres from "postgres"

/**database connection */
const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" })

async function productCategories() {
  const data = await sql`
        SELECT name, slug FROM category
    `
  return data
}

const CLOTHES_PER_PAGE = 40
async function productCatalogue(current_page: number) {
  //offset is set to skips certain number of rows before returning query
  //paired with limit to create pagination
  const offset = (current_page - 1) * CLOTHES_PER_PAGE

  const data = await sql`
        SELECT * FROM products
        LIMIT ${CLOTHES_PER_PAGE} OFFSET ${offset}
    `

  return data
}

// export async function GET() {
//   /**try catch to trigger the data fetch from the database*/
//   try {
//     return Response.json([await productCategories(), await productDetails()])
//   } catch (error) {
//     return Response.json({ error }, { status: 500 })
//   }
// }
