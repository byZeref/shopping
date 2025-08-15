<template>
  <div class="layout-admin">
    <slot />
  </div>
</template>

<style scoped>
.layout-admin {
  min-height: 100dvh;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;

  @media (width >= 768px) {
    padding: 0 40px;
  }
}
</style>