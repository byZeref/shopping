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

export interface User {
  email: string,
  password: string,
}

export interface UserData {
  user: User,
  access_token: string,
  refresh_token: string,
}

export type AuthError = {
  name: string,
  status: number,
  __isAuthError: boolean,
}