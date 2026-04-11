/**create a table in the database connected */
import postgres from "postgres"
/**product data for seeding */
import { Products } from "../lib/testproducts"
import { Categories } from "../lib/categories"

const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" })

/**async function to seed or insert the product data into the database */
async function seedProductCategories() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`
  /**create category table */
  await sql`CREATE TABLE IF NOT EXISTS category (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(225) NOT NULL UNIQUE,
        slug VARCHAR(225),
        description TEXT NOT NULL
    );`

  /**insert query to insert data into the database */
  const insertCategory = await Promise.all(
    Categories.map(
      (category) => sql`
                INSERT INTO category (name, slug, description)
                VALUES (${category.name}, ${category.slug}, ${category.description})
            `,
    ),
  )

  /**return the data */
  return insertCategory
}

/**insert product data in the database and use category id as the foreign key for the product */
async function seedProductInformtation() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`
  /**create database table for the product data */
  await sql`CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_name VARCHAR(225) NOT NULL,
        currency VARCHAR(225) NOT NULL,
        price NUMERIC(10,2),
        image_url VARCHAR(225),
        description TEXT,
        instock BOOLEAN NOT NULL,
        category_id UUID REFERENCES category(id) ON DELETE SET NULL
    );`

  /**get the categories from the database and then map it */
  const categories = await sql`SELECT id, name from category;`
  console.log(categories)

  /**create a map based on the data returned from the database */
  const categoryMap: Record<string, string> = {}
  categories.forEach((cat: any) => {
    categoryMap[cat.name.toLowerCase()] = cat.id
  })

  /** insert products WITH category_id */
  const insertProducts = await Promise.all(
    Products.map((product) => {
      const categoryName = product.category?.toLowerCase()
      const categoryId = categoryMap[categoryName]

      if (!categoryId) {
        console.log(`❌ No category found for ${product.name}`)
        return null
      }

      return sql`
        INSERT INTO products (
          product_name,
          currency,
          price,
          image_url,
          description,
          instock,
          category_id
        )
        VALUES (
          ${product.name},
          ${product.currency},
          ${product.price},
          ${product.image},
          ${product.description},
          ${product.inStock},
          ${categoryId}
        )
        ON CONFLICT (id) DO NOTHING;
      `
    }),
  )

  return insertProducts
}

export async function GET() {
  try {
    await seedProductCategories()
    await seedProductInformtation()

    return Response.json({ message: "Database created" })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
