import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', () => {
  const order = ref(0)

  return { order }
})