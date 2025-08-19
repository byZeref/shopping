<script setup lang="ts">
const contact = import.meta.env.VITE_ADMIN_WHATSAPP
const text = ''
// TODO set text for direct message via whatsapp
</script>

<template>
  <div class="w-full h-[60px] p-4 flex justify-center items-center gap-2 bg-white rounded-md shadow-md">
    <p class="text-sm">No puedes iniciar sesión?</p>
    <a :href="`https://wa.me/${contact}?text=${text}`" class="text-sm text-sky-600">Contacta al administrador.</a>
  </div>
</template>