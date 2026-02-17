// Keep using a single prop object
export interface PackageCardProp {
  packageTitle: string
  packageItems: string[]
  price: string
}

//defintion for the avaiable products
export interface ClothingCardProp {
  id: string
  name: string
  category: string
  price: number
  currency: string
  image: string
  inStock: boolean
}
