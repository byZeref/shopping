<script setup>
definePageMeta({
  layout: "admin",
})

const form = ref({
  email: '',
  password: '',
  // email: 'sandorsc941018@gmail.com',
  // password: 'Zeref.shopping',
})

const handleLogin = () => {
  console.log('send login', form.value)
}
</script>

<template>
  <div class="login-container">
    <div class="flex flex-col gap-5 w-full max-w-[500px] h-[400px] bg-gray-200 rounded-md shadow-md p-8">
      <p class="text-center">Introduzca sus credenciales</p>
      <form class="flex flex-col gap-3" @submit.prevent="handleLogin">
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="default-input"
          placeholder="Email"
          autocomplete="email"
        >
        <input
          id="password"
          v-model="form.password"
          type="password"
          class="default-input"
          placeholder="Contraseña"
          autocomplete="password"
        >
        <button class="default-btn text-white bg-black">Aceptar</button>
      </form>
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

  }
}
</style>