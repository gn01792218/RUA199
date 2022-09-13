import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/i18n/index"
import router from './router'
import store from './store'
import './assets/style/style.css'


createApp(App).use(router).use(store).use(i18n).mount('#app')
