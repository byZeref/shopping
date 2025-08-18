<script setup lang="ts">
const error: Ref<object | null> = ref(null)
provide('error', error)


</script>

<template>
  <BaseDialog
    v-if="!!error"
    :show="!!error"
    is-error-dialog
    :description="error.message"
    @update:show:dialog="(val) => {
      if (!val) error = null
    }"
  />

  <NuxtLayout>
    <NuxtLoadingIndicator color="#7f2c30" />
    <NuxtPage />
  </NuxtLayout>
</template>
