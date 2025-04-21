import { createApp } from 'vue'
import { Buffer } from 'buffer'
import App from './App.vue'
import router from './router'

import './assets/css/global.css'

// 为gray-matter库提供Buffer polyfill
globalThis.Buffer = Buffer

const app = createApp(App)

app.use(router)
app.mount('#app')
