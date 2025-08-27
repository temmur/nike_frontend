<template>
  This is Index page
  <router-link to="About">
    <button>Navigate to About page</button>
  </router-link>
   <div class="container">
    <h1>Наши товары</h1>

    <p v-if="loading">Загрузка...</p>
    <p v-if="error">{{ error }}</p>

    <div v-if="!loading && !error" class="grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="card"
        @click="goToProduct(product.id)"
      >
        <img :src="product.image" alt="product" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.price }} $</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getProducts } from '@/api/products';


const products = ref([])
const loading = ref(true)
const error = ref(null)

const router = useRouter()

const fetchProducts =async()=> {
  try{
    const {data} = await getProducts()
    products.value = data
  }catch(err){
    error.value = "Ошибка загрузки товаров"
  }finally{
    loading.value = false
  }
}

const goToProduct=(id)=> {
  router.push(`/products/${id}`)
}
onMounted(fetchProducts)
</script>

<style scoped>
.container {
  padding: 20px;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  border: 1px solid #ddd;
  padding: 15px;
  width: 200px;
  cursor: pointer;
  transition: 0.3s;
}
.card:hover {
  transform: scale(1.05);
}
</style>
