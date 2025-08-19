export const PROTECTED_ROUTES = ['admin', 'admin-products', 'admin-orders']

export const SUPABASE_BUCKET = process.env.SUPABASE_IMAGES_BUCKET

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Failed to fetch',
  AUTH_ERROR: 'Invalid login credentials',
}