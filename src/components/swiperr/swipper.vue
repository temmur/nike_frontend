<!--<script setup lang="ts">-->

<!--</script>-->

<!--<template>-->

<!--</template>-->

<!--<style scoped>-->

<!--</style>-->
<!--<template>-->
<!--<div class="max-h-[800px]">-->
<!--  <Swiper-->
<!--      :modules="[Navigation, Pagination, Autoplay]"-->
<!--      :slides-per-view="1"-->
<!--      :loop="true"-->
<!--      :autoplay="{ delay: 3000 }"-->
<!--      navigation-->
<!--      pagination-->
<!--      class="w-full max-h-[800px]"-->
<!--  >-->
<!--    <SwiperSlide v-for="(slide, i) in slides" :key="i">-->
<!--      <img :src="slide?.img" class="w-full rounded-xl -z-2" />-->
<!--  <div class="z-[999]">-->
<!--    <h1>{{slide?.title}}</h1>-->
<!--    <p>{{slide.subTitle}}</p>-->
<!--    <button v-for="(el, idx) in slide.button"-->
<!--    :key="idx"-->
<!--    >{{el}}</button>-->
<!--  </div>-->
<!--    </SwiperSlide>-->
<!--  </Swiper>-->
<!--</div>-->
<!--</template>-->


<!--1 kod-->


<!--<template>-->
<!--  <div class="max-h-[800px]">-->
<!--    <Swiper-->
<!--        :modules="[Navigation, Pagination, Autoplay]"-->
<!--        :slides-per-view="1"-->
<!--        :loop="true"-->
<!--        :autoplay="{ delay: 300000 }"-->
<!--        navigation-->
<!--        pagination-->
<!--        class="w-full max-h-[800px]"-->
<!--    >-->
<!--      <SwiperSlide-->
<!--          v-for="(slide, i) in slides"-->
<!--          :key="i"-->
<!--          class="relative"-->
<!--      >-->
<!--        &lt;!&ndash; background image &ndash;&gt;-->
<!--        <img-->
<!--            :src="slide?.img"-->
<!--            class="w-full h-[800px] object-cover rounded-xl"-->
<!--        />-->

<!--        &lt;!&ndash; text content at bottom &ndash;&gt;-->
<!--        <div-->
<!--            class="absolute bottom-0 pb-40 text-center w-full p-6 text-white z-10-->
<!--                 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl"-->
<!--        >-->
<!--          <h1 class="text-3xl font-bold mb-2">{{ slide?.title }}</h1>-->
<!--          <p class="text-lg mb-4">{{ slide?.subTitle }}</p>-->
<!--          <div class="flex gap-4 justify-center">-->
<!--            <button-->
<!--                v-for="(el, idx) in slide.button"-->
<!--                :key="idx"-->
<!--                class="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"-->
<!--            >-->
<!--              {{ el }}-->

<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </SwiperSlide>-->
<!--    </Swiper>-->
<!--  </div>-->

<!--</template>-->
<!--<style scoped>-->
<!--.swiper-button-next {-->
<!--  right: 20px !important;-->
<!--  bottom: 200px !important;-->
<!--  top: auto !important;-->
<!--  color: white;-->
<!--}-->
<!--</style>-->




<!--<script setup>-->
<!--import { Swiper, SwiperSlide } from "swiper/vue";-->
<!--import { Navigation, Pagination, Autoplay } from "swiper/modules";-->

<!--// Swiper CSS import qilish kerak-->
<!--import "swiper/css";-->
<!--import "swiper/css/navigation";-->
<!--import "swiper/css/pagination";-->

<!--const slides = [-->
<!--  {-->
<!--    img: '/images/banner.webp',-->
<!--    button: ['Shop'],-->
<!--    title:'Real once know',-->
<!--    subTitle: 'The jordan shattered backboard capsule',-->
<!--  },-->
<!--  {-->
<!--    img: '/images/banner2.jpg',-->
<!--    button: ["Shop Carlos's Picks", 'Shop all tennis'],-->
<!--    title:'Grand slime style',-->
<!--    subTitle: 'ace the court like carlos alcaraz in gear for every seat.',-->
<!--  },-->
<!--  {-->
<!--    img: '',-->
<!--    button: ['byu', 'tty'],-->
<!--    title:'',-->
<!--    subTitle: '',-->
<!--  },-->
<!--];-->
<!--</script>-->

<!--2 kod-->

<!--<template>-->
<!--  <div class="max-h-[800px] relative">-->
<!--    <Swiper-->
<!--        :modules="[Pagination, Autoplay]"-->
<!--        :slides-per-view="1"-->
<!--        :loop="true"-->
<!--        :autoplay="isPlaying ? { delay: 3000 } : false"-->
<!--        pagination-->
<!--        class="w-full max-h-[800px] rounded-xl"-->
<!--        @swiper="onSwiper"-->
<!--    >-->
<!--      <SwiperSlide-->
<!--          v-for="(slide, i) in slides"-->
<!--          :key="i"-->
<!--          class="relative"-->
<!--      >-->
<!--        &lt;!&ndash; background image &ndash;&gt;-->
<!--        <img-->
<!--            :src="slide?.img"-->
<!--            class="w-full h-[800px] object-cover rounded-xl"-->
<!--        />-->

<!--        &lt;!&ndash; text content at bottom &ndash;&gt;-->
<!--        <div-->
<!--            class="absolute bottom-0 pb-40 text-center w-full p-6 text-white z-10-->
<!--                 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl"-->
<!--        >-->
<!--          <h1 class="text-3xl font-bold mb-2">{{ slide?.title }}</h1>-->
<!--          <p class="text-lg mb-4">{{ slide?.subTitle }}</p>-->
<!--          <div class="flex gap-4 justify-center">-->
<!--            <button-->
<!--                v-for="(el, idx) in slide.button"-->
<!--                :key="idx"-->
<!--                class="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"-->
<!--            >-->
<!--              {{ el }}-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </SwiperSlide>-->
<!--    </Swiper>-->

<!--    &lt;!&ndash; Custom Controls &ndash;&gt;-->
<!--    <div-->
<!--        class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-20"-->
<!--    >-->
<!--      &lt;!&ndash; Play/Pause &ndash;&gt;-->
<!--      <button-->
<!--          @click="togglePlay"-->
<!--          class="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md"-->
<!--      >-->
<!--        <span v-if="isPlaying" class="text-black text-lg">❚❚</span>-->
<!--        <span v-else class="text-black text-lg">▶</span>-->
<!--      </button>-->

<!--      &lt;!&ndash; Prev &ndash;&gt;-->
<!--      <button-->
<!--          @click="goPrev"-->
<!--          class="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md"-->
<!--      >-->
<!--        <span class="text-black text-lg">‹</span>-->
<!--      </button>-->

<!--      &lt;!&ndash; Next &ndash;&gt;-->
<!--      <button-->
<!--          @click="goNext"-->
<!--          class="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md"-->
<!--      >-->
<!--        <span class="text-black text-lg">›</span>-->
<!--      </button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from "vue";-->
<!--import { Swiper, SwiperSlide } from "swiper/vue";-->
<!--import { Pagination, Autoplay } from "swiper/modules";-->

<!--// Swiper CSS-->
<!--import "swiper/css";-->
<!--import "swiper/css/pagination";-->

<!--const slides = [-->
<!--  {-->
<!--    img: "/images/banner.webp",-->
<!--    button: ["Shop"],-->
<!--    title: "Real once know",-->
<!--    subTitle: "The jordan shattered backboard capsule",-->
<!--  },-->
<!--  {-->
<!--    img: "/images/banner2.jpg",-->
<!--    button: ["Shop Carlos's Picks", "Shop all tennis"],-->
<!--    title: "Grand slime style",-->
<!--    subTitle: "ace the court like carlos alcaraz in gear for every seat.",-->
<!--  },-->
<!--  {-->
<!--    img: "/images/banner3.jpg",-->
<!--    button: ["Buy", "Try"],-->
<!--    title: "Next level",-->
<!--    subTitle: "example slide",-->
<!--  },-->
<!--];-->

<!--const swiperRef = ref(null);-->
<!--const isPlaying = ref(true);-->

<!--const onSwiper = (swiper) => {-->
<!--  swiperRef.value = swiper;-->
<!--};-->

<!--const goNext = () => {-->
<!--  swiperRef.value?.slideNext();-->
<!--};-->
<!--const goPrev = () => {-->
<!--  swiperRef.value?.slidePrev();-->
<!--};-->

<!--const togglePlay = () => {-->
<!--  isPlaying.value = !isPlaying.value;-->
<!--};-->
<!--</script>-->


<!--3 kod-->
<template>
  <div class="max-h-[800px] relative">
    <Swiper
        :modules="[Pagination, Autoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        pagination
        class="w-full max-h-[800px] rounded-xl"
        @swiper="onSwiper"
    >
      <SwiperSlide
          v-for="(slide, i) in slides"
          :key="i"
          class="relative"
      >
        <!-- background image -->
        <img
            v-if="slide.img"
            :src="slide?.img"
            class="w-full h-[800px] object-cover rounded-xl"
        />
        <video
            v-if="slide.video"
            :ref="el => videoRefs[i] = el"
            :src="slide?.video"
            class="w-full h-[800px] object-cover rounded-xl"
            muted
            playsinline
        ></video>

        <!-- text content at bottom -->
        <div
            class="absolute bottom-0 pb-40 text-center w-full p-6 text-white z-10
                 bg-gradient-to-t from-black/100 to-transparent rounded-b-xl"
        >
          <h1 class="mb-2 text-8xl uppercase font-[900] tracking-[-5px]">
            {{ slide?.title }}
          </h1>
          <p class="text-lg mb-4 capitalize">{{ slide?.subTitle }}</p>
          <div class="flex gap-4 justify-center">
            <button
                v-for="(el, idx) in slide.button"
                :key="idx"
                class="px-5 py-2 bg-white rounded-lg hover:bg-black transition text-black font-[600] hover:text-white rounded-[15px]"
            >
              {{ el }}
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Custom Controls -->
    <div
        class="absolute bottom-6 right-6 flex items-center space-x-3 z-20"
    >
      <!-- Play/Pause -->
      <button
          @click="togglePlay"
          class="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md"
      >
        <span v-if="isPlaying" class="text-black text-lg">❚❚</span>
        <span v-else class="text-black text-lg">▶</span>
      </button>

      <!-- Prev -->
      <button
          @click="goPrev"
          class="w-10 h-10 flex items-center justify-center bg-gray-600 rounded-full shadow-md"
      >
        <span class="text-black text-lg">‹</span>
      </button>

      <!-- Next -->
      <button
          @click="goNext"
          class="w-10 h-10 flex items-center justify-center bg-gray-600 rounded-full shadow-md"
      >
        <span class="text-black text-lg">›</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    img: "/images/banner.webp",
    button: ["Shop"],
    title: "Real once know",
    subTitle: "The jordan shattered backboard capsule",
  },
  {
    img: "/images/banner2.jpg",
    button: ["Shop Carlos's Picks", "Shop all tennis"],
    title: "Grand slime style",
    subTitle: "ace the court like carlos alcaraz in gear for every seat.",
  },
  {
    video: "/video/banner.mp4",
    button: ["Buy", "Try"],
    title: "Next level",
    subTitle: "example slide",
  },
];

const swiperRef = ref(null);
const isPlaying = ref(true);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const goNext = () => {
  swiperRef.value?.slideNext();
  if (!isPlaying.value) {
    isPlaying.value = true;
  }
  swiperRef.value?.autoplay.start();
};

const goPrev = () => {
  swiperRef.value?.slidePrev();
  if (!isPlaying.value) {
    isPlaying.value = true;
  }
  swiperRef.value?.autoplay.start();
};

const videoRefs = ref([]); // store refs for all videos

const togglePlay = () => {
  if (!swiperRef.value) return;

  if (isPlaying.value) {
    swiperRef.value.autoplay.stop();
    pauseAllVideos();
  } else {
    swiperRef.value.autoplay.start();
    playActiveVideo();
  }
  isPlaying.value = !isPlaying.value;
};

const pauseAllVideos = () => {
  videoRefs.value.forEach((v) => v?.pause());
};

const playActiveVideo = () => {
  const activeIndex = swiperRef.value?.realIndex;
  const video = videoRefs.value[activeIndex];
  if (video) video.play();
};
</script>

