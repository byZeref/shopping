<script setup>
import EyeIcon from "~/components/icons/EyeIcon.vue";
import EyeCloseIcon from "~/components/icons/EyeCloseIcon.vue";

defineEmits(["login"]);
defineProps({
  loading: Boolean,
})
const form = ref({
  // email: '',
  // password: '',
  email: 'sandorsc941018@gmail.com.xd',
  password: 'Zeref.shopping',
})

const passwordType = ref('password')
const togglePasswordType = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}

</script>

<template>
  <div class="flex flex-col gap-5 w-full h-[320px] bg-white rounded-md shadow-md p-6">
    <form class="flex flex-col gap-5 h-full" @submit.prevent="$emit('login', form)">
      <fieldset class="flex flex-col gap-1">
        <label class="font-semibold" for="email">Correo electrónico</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Email"
          autocomplete="username"
          :disabled="loading"
          required
          class="default-input"
        >
      </fieldset>
      <fieldset class="flex flex-col gap-1 relative">
        <label class="font-semibold" for="password">Contraseña</label>
        <input
          id="password"
          v-model="form.password"
          :type="passwordType"
          placeholder="Contraseña"
          autocomplete="current-password"
          :disabled="loading"
          required
          class="default-input"
        >
        <span class="absolute bottom-[10px] right-3 text-gray-600 cursor-pointer active:scale-75 duration-200">
          <EyeIcon v-if="passwordType === 'password'" @click="togglePasswordType" />
          <EyeCloseIcon v-else-if="passwordType === 'text'" @click="togglePasswordType" />
        </span>
      </fieldset>
      <button
        class="default-btn h-[50px!important] text-white bg-black mt-auto mb-2"
        :disabled="loading"
      >Acceder</button>
    </form>
  </div>
</template>

<style scoped>

</style>