<script setup lang="ts">
import LoginForm from "~/pages/admin/components/LoginForm.vue";
import ContactAdmin from "~/pages/admin/components/ContactAdmin.vue";
import { useAuthStore } from "~/store/auth.js";
import type { GenericError, LoginCredentials } from "#shared/types";

definePageMeta({
  layout: "admin",
})

const authStore = useAuthStore()
const router = useRouter()
const loading = ref(false)
const handleError: (e: GenericError) => void = inject("handleError")!

const handleLogin = async (credentials: LoginCredentials) => {
  const payload = { ...credentials }
  loading.value = true
  const res = await authStore.login(payload)
    .catch(e => {
      console.error('error in login request', e)
      handleError(e)
    })
    .finally(() => { loading.value = false })

  if (res?.data.ok) {
    return router.push('/admin')
  }
}
// TODO reset password
</script>

<template>
  <div class="flex flex-col gap-8 justify-center items-center w-full h-[100dvh]">
    <div class="flex flex-col items-center gap-4">
      <img src="/login-logo.ico" class="w-[120px] h-auto" alt="Business Logo">
      <h4 class="text-center text-3xl font-light">Inicio de sesión</h4>
    </div>
    <LoginForm class="max-w-[450px]" :loading @login="handleLogin" />
    <ContactAdmin class="max-w-[450px]" />
  </div>
</template>

<style scoped>

</style>