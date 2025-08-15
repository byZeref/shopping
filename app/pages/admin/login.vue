<script setup>
definePageMeta({
  layout: "admin",
})

const route = useRoute();
console.log(route)
</script>

<template>
  <div class="login-container">
    <div class="login-container__card">

    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;

  .login-container__card {
    width: 100%;
    max-width: 500px;
    height: 500px;
    background-color: #1B2430;

  }
}
</style>