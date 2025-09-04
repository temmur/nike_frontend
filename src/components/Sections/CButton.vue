<template>
  <button
      class="flex items-center rounded-lg w-fit flex-center cursor-pointer"
      :class="[variants[variant], sizes[size], { 'pointer-events-none opacity-50': disabled }, btnClass]"
      v-bind="{ disabled }"
  >
    <slot name="prefix"></slot>
    {{ text }}
    <slot name="suffix"></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  text?: string

  disabled?: boolean
  loading?: boolean
  variant?: 'light' | 'dark'
  size?: 'normal' | 'extra'

}

withDefaults(defineProps<Props>(), {
  text: 'Button',
  btnClass: '',
  disabled: false,
  loading: false,
  variant: 'light',
  iconName: ''
})

// Light & Dark variantlar uchun style
const variants = {
  light: 'rounded-full px-4 py-1.5 bg-white text-black font-medium hover:bg-gray-100 transition-colors',
  dark: 'rounded-[14px] py-[10px] px-[20px] bg-black text-white border hover:bg-gray-800 active:scale-95 transition-all shadow'
}
// Size opsiyalari
const sizes = {

}
</script>
