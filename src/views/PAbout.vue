<template>
  <div>
    <breadcrumb v-bind="{routes}"/>
    About Page
  </div>
</template>
<script setup lang="ts">
import breadcrumb from '@/components/Common/breadcrumb.vue'
import {computed} from "vue";
import {useI18n} from "vue-i18n";
const {t} = useI18n();
const routes = computed(() => [
  {
    label:t('about'),
    link: "/about",
  },
]);
</script>
