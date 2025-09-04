// import './assets/tailwind.css'
import uz from '@/locale/uz.json'
import ru from '@/locale/ru.json'
import en from '@/locale/en.json'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
const app = createApp(App);
import { createI18n } from "vue-i18n";
import './assets/main.css'
import router from './router/main.js'

// createApp(App).mount('#app')
// app.use(router)

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: localStorage.getItem('locale') || 'en',
    messages: {
        en: en,
        ru: ru,
        uz: uz,
    }
})
app.use(i18n)
app.use(createPinia())
app.use(router).mount('#app')
// createApp(App).use(router).mount('#app')
