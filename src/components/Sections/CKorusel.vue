<template>
  <section class="w-full py-8 relative">
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
          v-for="(item, index) in items"
          :key="index"
          class="flex-shrink-0 w-70 text-center"
      >
        <!-- Rasm -->
        <div class="w-full h-85 flex items-center justify-center bg-gray-100 rounded-xl">
          <img
              :src="item.image"
              :alt="item.title"
              class="object-contain h-full"
          />
        </div>
        <!-- Nomi -->
        <p class="mt-2 text-sm font-medium">{{ item.title }}</p>
      </div>
    </div>
  </section>
</template>



<script setup lang="ts">
import { ref } from 'vue'

interface Item {
  image: string
  title: string
}

const items: Item[] = [
  { image: '/public/images/1.webp', title: 'Jordan 1' },
  { image: '/public/images/2.jpg', title: 'Dunk' },
  { image: '/public/images/3.avif', title: 'Field General' },
  { image: '/public/images/4.webp', title: 'Air Force 1' },
  { image: '/public/images/5.webp', title: 'Air Max' },
  { image: '/public/images/6.png', title: 'Vomero' },
  { image: '/public/images/7.jpeg', title: 'Cortez' }
]

const carousel = ref<HTMLDivElement | null>(null)

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