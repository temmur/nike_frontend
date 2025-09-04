<script setup lang="ts">
import { useProductStore } from "@/store/getProduct";
import { onUnmounted } from "vue";

const productStore = useProductStore();

// Если хочешь очищать при выходе
onUnmounted(() => {
  productStore.setProduct(null);
});
</script>

<template>
  <div class="product-page">
    <div v-if="productStore.product" class="info-wrapper">
      <img :src="productStore.product?.image" alt="product" />
      <div class="info">
        <h2>{{ productStore.product?.title }}</h2>
        <h3>ID: {{ productStore.product?.id }}</h3>
      </div>
    </div>
    <p v-else>Товар не найден</p>
  </div>
</template>
