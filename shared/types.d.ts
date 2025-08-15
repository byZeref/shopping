export interface Product {
  id?: number,
  name: string,
  description: string,
  price: string,
  category: string,
  stock?: number,
  image?: string,
  imageUrl?: string,
  created_at?: string,
  updated_at?: string,
}