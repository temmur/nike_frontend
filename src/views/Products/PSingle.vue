<script setup>
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { getProductById } from "@/api/products"

const product = ref(null)
const loading = ref(true)
const error = ref(null)

const route = useRoute()
const router = useRouter()

const fetchProduct = async () => {
  try {
    const { data } = await getProductById(route.params.id)
    product.value = data
  } catch (err) {
    error.value = "Товар не найден"
    setTimeout(() => router.push("/products"), 2000)
  } finally {
    loading.value = false
  }
}

onMounted(fetchProduct)
</script>

<template>
  <div class="product-page">
    <p v-if="loading">Загрузка товара...</p>
    <p v-if="error">{{ error }}</p>

    <div v-if="!loading && !error && product" class="info-wrapper">
      <img :src="product.image" alt="product" />
      <div class="info">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <h3>{{ product.price }} $</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-page {
  padding: 20px;
}
.info-wrapper {
  display: flex;
  gap: 30px;
}
.info {
  max-width: 500px;
}
</style>