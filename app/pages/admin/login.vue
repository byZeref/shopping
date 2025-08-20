<script setup lang="ts">
import LoginForm from "~/pages/admin/components/LoginForm.vue";
import ContactAdmin from "~/pages/admin/components/ContactAdmin.vue";
import { useAuthStore } from "~/store/auth.js";
import type { GenericError, LoginCredentials } from "#shared/types";
import DialogAlert from "~/components/DialogAlert.vue";

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

// ADMIN CONTACT
const contact = import.meta.env.VITE_ADMIN_WHATSAPP
const showConfirm = ref(false)
const handleAdminContact = () => {
  const text = 'Hola, soy cliente y no logro acceder al panel administrativo de mi tienda.'
  window.location.href = `https://wa.me/${contact}?text=${text}`
}
</script>

<template>
  <div class="flex flex-col gap-8 justify-center items-center w-full h-[100dvh]">
    <div class="flex flex-col items-center gap-4">
      <img src="/login-logo.ico" class="w-[120px] h-auto" alt="Business Logo">
      <h4 class="text-center text-3xl font-light">Inicio de sesión</h4>
    </div>
    <LoginForm class="max-w-[450px]" :loading @login="handleLogin" />
    <ContactAdmin class="max-w-[450px]" @show:contact:dialog="showConfirm = true" />
  </div>

  <DialogAlert
    v-if="showConfirm"
    :show="showConfirm"
    type="info"
    cancellable
    :confirm-action="handleAdminContact"
    confirm-text="Sí, abrir WhatsApp"
    description="Desea contactar al administrador vía WhatsApp?"
    @update:show:dialog="(val) => {
      if (!val) showConfirm = false
    }"
  />
</template>

<style scoped>

</style>