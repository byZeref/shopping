import type { GenericError } from "#shared/types";
import { ERROR_MESSAGES } from "#shared/constants";

const { NETWORK_ERROR, AUTH_ERROR } = ERROR_MESSAGES

export const useErrors = () => {
  const error: Ref<string> = ref('')

  const removeError = () => error.value = ''
  const handleError = (e: GenericError) => error.value = getErrorMessage(e)
  provide('handleError', handleError)

  const getErrorMessage = (error: GenericError) => {
    console.log('get-error-message', error)

    if (error.message.includes(NETWORK_ERROR)) {
      return 'Ha ocurrido un error de conexión, por favor verifique su internet.'
    }
    if (error.statusCode === 400 && error.statusMessage === AUTH_ERROR) {
      return 'El correo electrónico o la contraseña son incorrectos. Verifíquelos y vuelva a intentarlo.'
    }

    // add other errors up here
    else {
      return 'Ha ocurrido un error, si persiste por favor contacte con el administrador.'
    }
  }

  return { error, removeError }
}