<template>
  <div class="grid grid-cols-1 my-18 mx-12 md:grid-cols-3 gap-3">

    <!-- Birinchi rasm joyi -->
    <div class="relative group overflow-hidden rounded-none shadow-lg">
      <img
          src="../image/nike%20gym%20forms.webp"
          alt="tennis"
          class="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <!-- Button joyi -->
      <div class="absolute bottom-4 left-4">
        <CButton
            text="Shop Tennis"
            variant="light"/>
      </div>
    </div>

    <!-- Ikkinchi rasm joyi -->
    <div class="relative group overflow-hidden rounded-none shadow-lg">
      <img
          src="../image/short%20nike.webp"
          alt="running"
          class="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <!-- Button joyi -->
      <div class="absolute bottom-4 left-4">
        <CButton
            text="Shop Shortik"
            variant="light"/>
      </div>
    </div>

    <!-- Uchinchi rasm joyi -->
    <div class="relative group overflow-hidden rounded-none shadow-lg">
      <img
          src="../image/nike%20tennis.webp"
          alt="training"
          class="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <!-- Button joyi -->
      <div class="absolute bottom-4 left-4">
        <CButton
            text="Shop Running"
            variant="light"/>
      </div>
    </div>

  </div>
</template>
<script setup>
import CButton from "@/components/sections/CButton.vue";
</script>