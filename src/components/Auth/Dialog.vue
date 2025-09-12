<template>
  <div>
    <UIDialog
        v-bind="{ show }"
        @on-close="$emit('on-close')"
        class="max-w-[738px] w-full"
        size="max"
    >
      <div class="grid grid-cols-2 w-full gap-6 min-h-[536px]">
        <div class="col-span-1 p-4">
          <component
              :is="steps[authStore.currentStep]"
              @on-change="authStore.currentStep = $event"
          />
        </div>
        <div
            class="bg-authBg bg-cover bg-center col-span-1 rounded-r-xl px-4 py-9 relative"
        >
          <img
              src=""
              alt="parfum logo"
              class="cursor-pointer m-auto"
          />
          <p class="text-sm text-white mt-5">
            {{ $t('authBannerText') }}
          </p>
          <img
              src=""
              alt="Banner"
              class="m-auto my-[20px]"
          />
          <div
              class="items-center relative bottom-0 flex justify-evenly w-full flex-grow"
          >
            <img
                src=""
                alt="app store icon"
                class="cursor-pointer"
            />
            <img
                src=""
                alt="play market icon"
                class="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <template #header>
        <div class=""></div>
      </template>
      <template #footer>
        <div class=""></div>
      </template>
      <i
          class="icon-close-circle absolute -right-10 text-4xl text-white top-0 cursor-pointer active:scale-95 hover:text-red duration-300 transition-all ease-in-out"
          @click="closeModal"
      ></i>
    </UIDialog>
  </div>
</template>
<script setup lang="ts">
import UIDialog from '@/components/UI/Dialog.vue'
import AuthLogin from "@/components/Auth/CLogin.vue";
import AuthResetPassword from "@/components/Auth/ResetPassword/CIndex.vue"
import AuthRegister from '@/components/Auth/Registration/CIndex.vue'

import {useAuthStore} from "@/store/auth";
import {computed} from "vue";
const authStore = useAuthStore()
const show = computed(() => authStore.modalShow)

const steps = {
  login: AuthLogin,
  register: AuthRegister,
  password: AuthResetPassword,
}
const closeModal=()=> {
  authStore.modalShow = false
  authStore.currentStep = 'login'
}
</script>
