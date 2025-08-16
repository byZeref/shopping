<script setup>
defineEmits(["login"]);
defineProps({
  loading: Boolean,
})
const form = ref({
  email: '',
  password: '',
  // email: 'sandorsc941018@gmail.com',
  // password: 'Zeref.shopping',
})
const hasEmptyFields = computed(() => !form.value.email || !form.value.password)

</script>

<template>
  <div class="flex flex-col gap-5 w-full max-w-[500px] h-[300px] bg-white rounded-md shadow-md p-6">
    <form class="flex flex-col gap-5 h-full" @submit.prevent="$emit('login', form)">
      <fieldset class="flex flex-col gap-1">
        <label class="font-semibold" for="email">Correo electrónico</label>
        <!-- TODO validate email with regex -->
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="default-input"
          placeholder="Email"
          autocomplete="email"
        >
      </fieldset>
      <fieldset class="flex flex-col gap-1">
        <label class="font-semibold" for="password">Contraseña</label>
        <!-- TODO add toggle to see the password -->
        <input
          id="password"
          v-model="form.password"
          type="password"
          class="default-input"
          placeholder="Contraseña"
          autocomplete="password"
        >
      </fieldset>
      <!-- TODO add loading state -->
      <button
        class="default-btn h-[50px!important] text-white bg-black mt-auto mb-2"
        :class="{ 'opacity-90': hasEmptyFields || loading }"
        :disabled="hasEmptyFields || loading"
      >Acceder</button>
    </form>
  </div>
</template>

<style scoped>

</style>