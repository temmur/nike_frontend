<template>
  <header class="w-full shadow-sm relative z-50">
    <!-- TOP BAR -->
    <div class="bg-gray-50 text-sm px-6 py-2">
      <div class="container flex items-center justify-between">
        <!-- Chap: boshqa logolar -->
        <div class="flex items-center space-x-4">
          <img src="../image/img.png" alt="Jordan" class="h-4 cursor-pointer" />
          <img src="../image/img_1.png" alt="Converse" class="h-4 cursor-pointer" />
        </div>

        <!-- O‘ng: links -->
        <div class="flex items-center space-x-4 text-gray-800">
          <a href="#" class="hover:text-black">{{ t('header.find') }}</a>
          <span>|</span>
          <a href="#" class="hover:text-black">{{ t('header.help') }}</a>
          <span>|</span>
          <a href="#" class="hover:text-black">{{ t('header.join') }}</a>
          <span>|</span>
          <a href="#" class="hover:text-black">{{ t('header.signin') }}</a>
        </div>
      </div>
    </div>

    <!-- MAIN HEADER -->
    <div class="px-6 py-3 bg-white">
      <div class="container flex items-center justify-between">
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
              @mouseenter="hoverMenu = menu.key"
              @mouseleave="hoverMenu = null"
          >
            <span
                class="font-medium hover:text-gray-800 border-b-2 border-transparent"
                :class="{ 'border-black': hoverMenu === menu.key }"
            >
              {{ t('header.' + menu.key) }}
            </span>
          </div>
        </nav>

        <!-- O‘ng taraf: Search va iconlar -->
        <div class="flex items-center space-x-4">
          <!-- Search -->
          <CInput
              v-model="val"
              @click="hideHeader()"
              variant="light"
              class="py-0 px-0 rounded-full border-transparent bg-[#f5f5f5]! justify-center hover:bg-[#E5E5E5]! transition"
              :placeholder="t('header.search')"
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
          <Csearch @cancel="hideHeader" class="border-b-black text-gray-800" v-if="toggleHeader" />

          <!-- 🌐 Til tanlash dropdown -->
          <div class="relative">
            <button
                @click="isOpen = !isOpen"
                class="flex items-center gap-2 border rounded-full px-3 py-1.5 cursor-pointer bg-white shadow-sm hover:bg-gray-50 transition"
            >
              <span class="font-medium">{{ currentLangLabel }}</span>
              <svg
                  class="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
            >
              <div
                  v-if="isOpen"
                  class="absolute right-0 mt-2 w-28 bg-white border rounded-xl shadow-lg overflow-hidden"
              >
                <button
                    v-for="lang in languages"
                    :key="lang.code"
                    @click="langSwitcher(lang.code)"
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
                >
                  {{ lang.label }}
                </button>
              </div>
            </transition>
          </div>

          <!-- Iconlar -->
          <button>❤️</button>
          <button @click="bagOpen = true">🛒</button>
        </div>
      </div>
    </div>

    <!-- Mega Menu -->
    <div
        v-if="hoverMenu"
        class="absolute left-0 top-full w-full bg-white shadow-lg z-20 transition-all duration-200"
        @mouseenter="insideMenu = true"
        @mouseleave="hoverMenu = null; insideMenu = false"
    >
      <div class="flex justify-end w-full">
        <div class="flex gap-16 p-6 w-[70%] border-t">
          <div>
            <h3 class="font-semibold mb-2">{{ hoverMenu }} & Featured</h3>
            <ul class="space-y-2 text-sm">
              <li class="hover:underline">ECOSYST</li>
              <li class="hover:underline">IT</li>
              <li class="hover:underline">ACADEMY</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Shop {{ hoverMenu }}</h3>
            <ul class="space-y-2 text-sm">
              <li class="hover:underline">O'QI</li>
              <li class="hover:underline">O'RGAN</li>
              <li class="hover:underline">KUCHAY</li>
            </ul>
          </div>
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

    <!-- 🛒 Bag Modal -->
    <Modal :open="bagOpen" @close="bagOpen = false">
      <Bag />
    </Modal>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import CInput from "@/components/Form/CInput.vue";
import Csearch from "@/components/search/Csearch.vue";

// 🆕 qo‘shilgan
import Bag from "@/components/Bag.vue";
import Modal from "@/components/Modal.vue";

const { t, locale } = useI18n();

const menus = [
  { key: "new" },
  { key: "men" },
  { key: "women" },
  { key: "kids" },
  { key: "jordan" },
  { key: "sport" },
];

const hoverMenu = ref<string | null>(null);
const insideMenu = ref(false);
const toggleHeader = ref(false);
const val = ref("");

const hideHeader = () => {
  toggleHeader.value = !toggleHeader.value;
};
watch(toggleHeader, (newValue) => {
  if (newValue) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "";
});

// 🌐 Language dropdown
const languages = ref([
  { label: "UZ", code: "uz" },
  { label: "RU", code: "ru" },
  { label: "EN", code: "en" },
]);

const isOpen = ref(false);

const currentLangLabel = computed(() => {
  const found = languages.value.find((l) => l.code === locale.value);
  return found ? found.label : "EN";
});

const langSwitcher = (lang: string) => {
  locale.value = lang;
  localStorage.setItem("locale", lang);
  isOpen.value = false;
};

onMounted(() => {
  const savedLang: string = localStorage.getItem("locale") || "";
  if (savedLang) {
    locale.value = savedLang;
  }
});

// 🆕 Bag modal state
const bagOpen = ref(false);
</script>
