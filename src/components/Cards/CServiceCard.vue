<template>
    <div class="flex justify-between align-center">
        <div class="flex flex-col justify-between">
            <p :class="[styledVariant.text]">{{ text }}</p>
            <span>
                <img :src="icon" alt="">Learn More
            </span>
        </div>
        <div>
            <img :src="img" alt="">
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    text? : string
    variant?: 'light' | 'dark' | 'green',
    icon?: string,
    img?: string
}>()

const variants = {
    light: {
        bg: 'bg-white',
        text: 'bg-green-400 text-black',
        icon: 'text-black'
    }
}

const styledVariant = computed(()=> variants[props.variant] || variants.light)
</script>