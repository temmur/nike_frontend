<script setup lang="ts">
defineProps<{
  open: boolean;
}>();
defineEmits(["close"]);
</script>

<template>
  <div
      v-if="open"
      class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
  >
    <div class="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
      <!-- Close button -->
      <button
          @click="$emit('close')"
          class="absolute top-2 right-2 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <!-- Slot ichiga Bag chiqadi -->
      <slot />
    </div>
  </div>
</template>
