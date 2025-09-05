<script setup lang="ts">
import { useBagStore } from "@/store/bagStore";

const bagStore = useBagStore();

const removeItem = (index: number) => {
  bagStore.removeFromBag(index);
};
</script>

<template>
  <div class="p-6 w-full max-w-md bg-white h-full flex flex-col">
    <!-- Header -->
    <h2 class="text-2xl font-semibold mb-6">Your Bag</h2>

    <!-- Bag Items -->
    <div v-if="bagStore.items.length === 0" class="text-gray-500 text-center">
      Bag Empty
    </div>

    <div v-else class="flex-1 space-y-4 overflow-y-auto">
      <div
          v-for="(item, index) in bagStore.items"
          :key="index"
          class="flex justify-between items-center border-b pb-3"
      >
        <!-- Mahsulot Info -->
        <div>
          <p class="font-medium">{{ item.title }}</p>
          <p class="text-sm text-gray-600">Fit: {{ item.fit }}</p>
          <p class="text-sm text-gray-600">Size: {{ item.size }}</p>
        </div>

        <!-- Narx va Remove -->
        <div class="flex flex-col items-end">
          <p class="font-semibold">${{ item.price }}</p>
          <button
              @click="removeItem(index)"
              class="text-xs text-red-500 hover:underline mt-1"
          >
            ❌ Remove
          </button>
        </div>
      </div>
    </div>

    <!-- Total -->
    <div
        v-if="bagStore.items.length > 0"
        class="pt-4 border-t mt-4 flex justify-between font-bold text-lg"
    >
      <span>Total:</span>
      <span>${{ bagStore.totalPrice }}</span>
    </div>
  </div>
</template>

<style scoped>
/* Scroll chiqsa chiroyli bo‘lsin */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}
</style>
