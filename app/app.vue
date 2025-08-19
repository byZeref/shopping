<script setup lang="ts">
import { useErrors } from "~/composables/errors";
import DialogAlert from "~/components/DialogAlert.vue";

const { error, removeError } = useErrors()

</script>

<template>
  <DialogAlert
    v-if="!!error"
    :show="!!error"
    type="error"
    :description="error"
    @update:show:dialog="(val) => {
      if (!val) removeError()
    }"
  />

  <NuxtLayout>
    <NuxtLoadingIndicator color="#7f2c30" />
    <NuxtPage />
  </NuxtLayout>
</template>
