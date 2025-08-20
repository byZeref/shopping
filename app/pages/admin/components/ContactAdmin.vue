<script setup lang="ts">
defineEmits(['show:contact:dialog'])
</script>

<template>
  <div class="w-full h-[60px] p-4 flex justify-center items-center gap-2 bg-white rounded-md shadow-md">
    <p class="text-sm">No puedes iniciar sesión?</p>
    <p class="text-sm text-sky-600 cursor-pointer" @click="$emit('show:contact:dialog')">
      Contacta al administrador.
    </p>
  </div>
</template>