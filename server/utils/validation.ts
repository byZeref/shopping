import { EMAIL_REGEX } from "#shared/constants";

export const validateLogin = ({ email, password }: {email: string, password: string}) => {
  if (!email || !password) {
    console.error('empty credentials')
    throw createError({
      statusCode: 400,
      statusMessage: 'empty credentials',
      message: 'El correo electrónico y la contraseña son requeridos.'
    })
  }
  if (!EMAIL_REGEX.test(email)) {
    console.error('invalid email')
    throw createError({
      statusCode: 400,
      statusMessage: 'invalid email',
      message: 'El correo electrónico no es válido.'
    })
  }
}