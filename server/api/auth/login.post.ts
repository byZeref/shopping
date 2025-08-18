import { validateLogin } from "~~/server/utils/validation";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)
  const { supabase } = await useSupabase(event)

  validateLogin({ email, password })

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error('error on login', error)
    throw createError({
      statusCode: error.status,
      statusMessage: error.message,
    })
  }

  const { email: userEmail, role } = data.user
  const { access_token, refresh_token } = data.session
  
  return {
    data: {
      user: {
        email: userEmail,
        role,
      },
      access_token,
      refresh_token,
      ok: true,
    }
  }
})