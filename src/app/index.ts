import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import App from './App.vue'

import './styles/main.scss'

export const app = createApp(App).use(createPinia()).use(router)
