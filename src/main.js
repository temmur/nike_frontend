// import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router/main.js'

// createApp(App).mount('#app')
// app.use(router)

createApp(App).use(router).mount('#app')
