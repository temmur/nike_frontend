<script setup lang="ts">
import { useProductStore } from "@/store/getProduct";
import { useBagStore } from "@/store/bagStore";
import { ref, onUnmounted } from "vue";

const productStore = useProductStore();
const bagStore = useBagStore();

const selectedFit = ref<string | null>(null);
const selectedSize = ref<string | null>(null);
const addedMessage = ref(false);

// 🛒 Add to Bag
const addToBag = () => {
  if (!productStore.product) return;
  if (!selectedFit.value || !selectedSize.value) {
    alert("Iltimos, Fit va Size tanlang!");
    return;
  }

  bagStore.addToBag({
    ...productStore.product,
    fit: selectedFit.value,
    size: selectedSize.value,
    price: 80, // narxni productdan olsang ham bo‘ladi
  });

  // ✅ Foydalanuvchiga bildirgi chiqsin
  addedMessage.value = true;
  setTimeout(() => {
    addedMessage.value = false;
  }, 2000);
};

onUnmounted(() => {
  productStore.setProduct(null);
});
</script>

<template>
  <div class="product-page grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
    <!-- Left -->
    <div v-if="productStore.product" class="flex flex-col md:flex-row gap-4">
      <div class="flex md:flex-col gap-2 order-2 md:order-1">
        <img
            v-for="(img, i) in productStore.product?.gallery"
            :key="i"
            :src="img"
            class="w-16 h-16 object-cover border rounded cursor-pointer hover:border-black"
        />
      </div>
      <div class="flex-1 order-1 md:order-2">
        <img
            :src="productStore.product?.image"
            class="w-full rounded-xl shadow"
        />
      </div>
    </div>

    <!-- Right -->
    <div v-if="productStore.product" class="flex flex-col gap-4">
      <h2 class="text-2xl font-semibold">{{ productStore.product?.title }}</h2>
      <p class="text-gray-500">Kids' Shoes</p>
      <p class="text-lg font-semibold">$80</p>

      <!-- Fit Selector -->
      <div>
        <p class="font-medium mb-2">Select Fit</p>
        <div class="flex gap-2">
          <button
              v-for="fit in ['Little Kids','Big Kids']"
              :key="fit"
              @click="selectedFit = fit"
              class="border px-4 py-2 rounded transition"
              :class="{
              'border-black bg-gray-100': selectedFit === fit,
              'hover:border-black': selectedFit !== fit
            }"
          >
            {{ fit }}
          </button>
        </div>
      </div>

      <!-- Size Selector -->
      <div>
        <p class="font-medium mb-2">Select Size</p>
        <div class="grid grid-cols-4 gap-2">
          <button
              v-for="(size, i) in ['10.5C','11C','11.5C','12C','12.5C','13C','13.5C','1Y','1.5Y','2Y','2.5Y','3Y']"
              :key="i"
              @click="selectedSize = size"
              class="border px-4 py-2 rounded transition"
              :class="{
              'border-black bg-gray-100': selectedSize === size,
              'hover:border-black': selectedSize !== size
            }"
          >
            {{ size }}
          </button>
        </div>
      </div>

      <!-- Buttons -->
      <button
          class="bg-black text-white py-3 rounded-full font-medium hover:opacity-90 disabled:opacity-50"
          :disabled="!selectedFit || !selectedSize"
          @click="addToBag"
      >
        Add to Bag
      </button>
      <button class="border py-3 rounded-full font-medium">
        Favorite ♡
      </button>

      <!-- ✅ Qo‘shilgan xabar -->
      <transition name="fade">
        <p
            v-if="addedMessage"
            class="text-green-600 font-medium mt-2 animate-bounce"
        >
          ✅ This product has been added to your bag.

        </p>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
