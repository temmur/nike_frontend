<template>
  <header class="w-full shadow-sm relative">
    <!-- TOP BAR -->
    <div class="flex items-center justify-between bg-gray-50 text-sm px-6 py-2">
      <!-- Chap: boshqa logolar -->
      <div class="flex items-center space-x-4">
        <img src="../image/img.png" alt="Jordan" class="h-4 cursor-pointer" />
        <img src="../image/img_1.png" alt="Converse" class="h-4 cursor-pointer" />
      </div>

      <!-- O‘ng: links -->
      <div class="flex items-center space-x-4 text-gray-800">
        <a href="#" class="hover:text-black">Find a Store</a>
        <span>|</span>
        <a href="#" class="hover:text-black">Help</a>
        <span>|</span>
        <a href="#" class="hover:text-black">Join Us</a>
        <span>|</span>
        <a href="#" class="hover:text-black">Sign In</a>
      </div>
    </div>

    <!-- MAIN HEADER -->
    <div class="flex items-center justify-between px-6 py-3 bg-white">
      <!-- Logo -->
      <div class="flex items-center space-x-4">
        <img src="../image/img_2.png" alt="Nike" class="w-10 h-10 cursor-pointer" />
      </div>


      <!-- Menyu -->
      <nav class="flex items-center space-x-8">
        <div
            v-for="(menu, index) in menus"
            :key="index"
            class="relative cursor-pointer"
            @mouseenter="hoverMenu = menu.name"
            @mouseleave="hoverMenu = null"
        >
          <span
              class="font-medium hover:text-gray-800 border-b-2 border-transparent"
              :class="{ 'border-black': hoverMenu === menu.name }"
          >
            {{ menu.name }}
          </span>
        </div>
      </nav>

      <!-- O‘ng taraf: Search va iconlar -->
      <div class="flex items-center space-x-4">
        <!-- Search -->
        <div class="">

        </div>
        <CInput
            v-model="val"
            @click="hideHeader()"
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
      <Csearch @cancel="hideHeader" class="border-b-black text-gray-800" v-if="toggleHeader"/>
        <!-- Iconlar -->
        <button>
          ❤️
        </button>
        <button>
          🛒
        </button>
      </div>
    </div>

      <!-- Mega Menu -->
    <!-- Mega Menu -->
    <div
        v-if="hoverMenu"
        class="absolute left-0 top-full w-full bg-white shadow-lg z-20
         transition-all duration-200"
        @mouseenter="insideMenu = true"
        @mouseleave="hoverMenu = null; insideMenu = false"
    >
      <div class="flex justify-end w-full">
        <!-- ichki content: faqat o‘ngdan boshlanib chiqadi -->
        <div class="flex gap-16 p-6 w-[70%] border-t">
          <!-- 1-ustun -->
          <div>
            <h3 class="font-semibold mb-2">{{ hoverMenu }} & Featured</h3>
            <ul class="space-y-2 text-sm">
              <li class="hover:underline">ECOSYST</li>
              <li class="hover:underline">IT</li>
              <li class="hover:underline">ACADEMY</li>
            </ul>
          </div>
          <!-- 2-ustun -->
          <div>
            <h3 class="font-semibold mb-2">Shop {{ hoverMenu }}</h3>
            <ul class="space-y-2 text-sm">
              <li class="hover:underline">O'QI</li>
              <li class="hover:underline">O'RGAN </li>
              <li class="hover:underline">KUCHAY</li>
            </ul>
          </div>
          <!-- 3-ustun -->
          <div>
            <h3 class="font-semibold mb-2">Trending</h3>
            <ul class="space-y-2 text-sm">
              <li class="hover:underline">spark</li>
              <li class="hover:underline">jentra</li>
              <li class="hover:underline">BYD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </header>
</template>

<script setup>
import { ref } from "vue";
import CInput from "@/components/Form/CInput.vue";
import Csearch from "@/components/search/Csearch.vue";
const menus = [
  { name: "New" },
  { name: "Men" },
  { name: "Women" },
  { name: "Kids" },
  { name: "Jordan" },
  { name: "Sport" },
];

const hoverMenu = ref(null);
const insideMenu = ref(false);
const toggleHeader = ref(false)

const hideHeader = ()=> {
  toggleHeader.value = !toggleHeader.value;
}

</script>

