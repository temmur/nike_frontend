<template>
  <section class="w-full py-8 relative">
    <p>hello</p>
    <!-- Title + Buttons -->
    <div class="flex items-center justify-center gap-3 mb-6 relative">
      <h2 class="text-xl font-semibold">Shop The Classics</h2>
      <!-- Tugmalar blok -->
      <div class="flex items-center gap-5 absolute right-8">
        <!-- Prev Button -->
        <button
            @click="scrollLeft"
            class="bg-gray-200 shadow rounded-full py-2 px-3.5 hover:bg-gray-100"
        >
          <
        </button>

        <!-- Next Button -->
        <button
            @click="scrollRight"
            class="bg-gray-200 shadow rounded-full py-2 px-3.5 hover:bg-gray-100"
        >
          >
        </button>
      </div>
    </div>

    <!-- Scrollable Carousel -->
    <div
        ref="carousel"
        class="flex gap-6 overflow-x-auto px-15 scrollbar-hide scroll-smooth"
    >
      <div
          v-for="(item, index) in shoesData"
          :key="index"
          class="flex-shrink-0 w-70 text-center"
      >
        <!-- Rasm -->
       <router-link :to="{name: 'ProductSingle', params: {id: item?.id}}">
         <div class="w-full h-85 flex items-center justify-center bg-gray-100 rounded-xl"
         @click="saveProduct(item)"
         >
           <img
               :src="item.image"
               :alt="item.title"
               class="object-contain h-full"
           />
         </div>
       </router-link>
        <!-- Nomi -->
        <p class="mt-2 text-sm font-medium">{{ item.title }}</p>
      </div>
    </div>
  </section>
</template>



<script setup lang="ts">
import {computed, ref} from 'vue'

import { useProductStore } from "@/store/getProduct";
const productStore = useProductStore();
interface Item {
  image: string
  title: string
  id: number
}

const items: Item[] = [
  { image: '/public/images/1.webp', title: 'Jordan 1', id: 1 },
  { image: '/public/images/2.jpg', title: 'Dunk', id: 2 },
  { image: '/public/images/3.avif', title: 'Field General', id: 3 },
  { image: '/public/images/4.webp', title: 'Air Force 1', id: 4 },
  { image: '/public/images/5.webp', title: 'Air Max', id: 5 },
  { image: '/public/images/6.png', title: 'Vomero', id: 6 },
  { image: '/public/images/7.jpeg', title: 'Cortez', id: 7 }
]

const carousel = ref<HTMLDivElement | null>(null)


const shoesData = computed(() => items);

const saveProduct = (item: Item) => {
  productStore.setProduct(item);
};
const scrollLeft = () => {
  carousel.value?.scrollBy({ left: -250, behavior: 'smooth' })
}

const scrollRight = () => {
  carousel.value?.scrollBy({ left: 250, behavior: 'smooth' })
}
</script>

<style>
/* Scrollbarni yashirish */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
