import { useAuthStore } from "~/store/auth";
import { PROTECTED_ROUTES } from "#shared/constants";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  const { isLogged } = storeToRefs(authStore)

  if (!isLogged.value && PROTECTED_ROUTES.includes(to.name as string)) {
    return navigateTo('/admin/login')
  }
})