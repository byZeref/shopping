<script setup lang="ts">
import {useAuthStore} from "~/store/auth";

const router = useRouter()

const authStore = useAuthStore()
const handleLogout = async () => {
  await authStore.logout()
  router.push({ name: 'admin-login' })
}
</script>

<template>
  <div>
    <h4>ADMIN PAGE</h4>
    <button class="default-btn" @click="handleLogout">Cerrar sesion</button>
  </div>
</template>

<style scoped>

</style>