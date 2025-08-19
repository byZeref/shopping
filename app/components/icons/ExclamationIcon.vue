<script setup lang="ts">
type Props = {
  color?: string,
  size?: string,
}
withDefaults(defineProps<Props>(), {
  color: 'currentColor',
  size: '24',
})
</script>

<template>
  <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" :stroke="color"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-exclamation-mark"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 19v.01"/>
    <path d="M12 15v-10"/>
  </svg>
</template>

<style scoped>

</style>