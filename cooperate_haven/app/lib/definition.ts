// Keep using a single prop object
export interface PackageCardProp {
  packageTitle: string
  packageItems: string[]
  price: string
}

//defintion for the avaiable products
export interface ClothingCardProp {
  id: number
  product_name: string
  category: string
  price: number
  currency: string
  image_url: string
  instock: boolean
  category_id: string
}

export interface ClotheCategories {
  id: number
  name: string
  slug: string
}

//definition for products
export interface Product {
  id: string
  product_name: string
  currency: string
  price: string
  image_url: string
  description: string
  instock: boolean
}

export interface Quantity {
  quantity: number
}
