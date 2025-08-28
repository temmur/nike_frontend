<template>
  <div class="p-6">
    <!-- Oddiy Search tugmasi -->
<!--    <div-->
<!--        @click="isOpen = true"-->
<!--        class="flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm w-72 cursor-pointer"-->
<!--    >-->
<!--      <img src="../image/img_3.png" alt="search" class="h-5 w-5" />-->
<!--      <span class="ml-2 text-gray-600">Search</span>-->
<!--    </div>-->

    <!-- Fullscreen Search Panel -->
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 bg-white z-50 p-6 min-h-[400px] h-full max-h-[500px]">
        <!-- Top bar -->
        <div class="flex items-center justify-between mb-6">
          <!-- Logo -->
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Nike"
              class="h-6"
          />

          <!-- Search input (Nike va Cancel orasida) -->
          <div class="flex-1 mx-6 max-w-[70%]">
            <CInput
                v-model="val"
                variant="light"
                class="py-0 px-0 rounded-full border-transparent bg-[#f5f5f5]! justify-center hover:bg-[#E5E5E5]! transition"
                placeholder="Search..."
                input-class=""
            >
              <template #prefix>
                <div
                    class="p-3 border border-transparent rounded-full bg-[#f5f5f5] justify-center hover:bg-[#cacacb] transition"
                >
                  <img src="../image/img_3.png" alt="search" class="h-5 w-5" />
                </div>
              </template>
            </CInput>

          </div>

          <!-- Cancel button -->
          <button @click="handleClick" class="text-gray-700 font-medium">
            Cancel
          </button>
        </div>

        <!-- Popular Search Terms -->
        <div class="text-start max-w-[70%] m-auto mt-12">
          <p class="text-gray-600 font-medium mb-5">Popular Search Terms</p>
          <div class="flex flex-wrap gap-3 justify-start">
            <span
                v-for="(term, idx) in popularTerms"
                :key="idx"
                class="px-6 py-2 bg-[#f5f5f5] font-medium rounded-full cursor-pointer hover:bg-gray-200 transition"
                @click="search = term"
            >
              {{ term }}
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CInput from "@/components/Form/CInput.vue";
const emit = defineEmits(['cancel'])
const val = ref("");
const isOpen = ref(true);
const search = ref("");
const popularTerms = [
  "v5 rnr",
  "tech wovens",
  "jordan",
  "air max",
  "jordan 4",
  "dunks",
  "air forces",
  "soccer cleats",
];

const handleClick=()=> {
  emit('cancel', false)
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>









