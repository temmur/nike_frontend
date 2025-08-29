<template>
  <div
      class="flex items-center"
      :class="variants[variant], {'!border-red-500': error}"
  >
    <!-- Prefix -->
    <slot name="prefix"></slot>

    <!-- Prefix bilan input orasiga joy -->
    <div class="ml-3 flex-1">
      <input
          type="text"
          :id="id"
          :value="modelValue"
          :class="[inputClass]"
          v-bind="{ placeholder }"
          :disabled="disabled"
          :readonly="readonly"
          @input="$emit('update:modelValue', $event.target.value)"
          @change="$emit('change')"
          :max="max"
          :min="min"
          :placeholder="placeholder"
          class="w-full outline-0 bg-transparent"
      />
    </div>

    <!-- Suffix -->
    <slot name="suffix"></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: string,
  variant?: 'light' | 'dark',
  loading?: boolean,
  disabled?: boolean,
  inputClass?: string,
  placeholder?: string,
  min?: number,
  max?: number,
  error?: boolean,
  readonly?: boolean,
  id?: string
}>()

const variants = {
  light: 'bg-white',
  dark: 'dark',
}
</script>

