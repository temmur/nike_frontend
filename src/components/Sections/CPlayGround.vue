<template>
  <div>
    <button v-for="lang in languages"
            class="mx-4"
    :key="lang.code"
            @click="langSwitcher(lang.code)"
    >{{lang.label}}</button>
  </div>
  {{t('header.title')}}
</template>
<script setup lang="ts">
import {ref} from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const languages = ref([
  {
    label: 'UZ',
    code: 'uz'
  },
  {
    label: 'RU',
    code: 'ru'
  },
  {
    label: 'EN',
    code: 'en'
  },
])
const langSwitcher =(lang:string)=> {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>
