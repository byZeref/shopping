<script setup>
const { data: products, error, refresh, pending } = await useFetch('/api/product/all', {
  onRequestError({ request, response, options }) {
    console.error('error sending req')
  },
  onResponseError({ request, response, options }) {
    console.error('error getting products')
  },
})
console.log('products', products.value)
console.log('error', error.value)

</script>

<template>
  <div>
    <h1>Home Page</h1>
    <p v-if="pending">Loading products...</p>
    <ul v-else-if="products?.length > 0">
      <li v-for="prod in products" :key="prod.id">{{ prod.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>