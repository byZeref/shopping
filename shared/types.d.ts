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
  email?: string,
  password?: string,
}

export interface UserData {
  user: User,
  access_token: string,
  refresh_token: string,
  ok?: boolean,
}

export interface AuthError {
  name: string,
  status: number,
  code: string,
  __isAuthError: boolean,
}

export interface GenericError {
  status: number,
  statusCode: number,
  message: string,
  statusMessage: string,
}

export interface LoginCredentials {
  email: string,
  password: string,
}