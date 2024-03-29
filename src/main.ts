import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/obsidian.min.css'

const app = createApp(App)

app.use(router)
app.use(VueHighlightJS)

app.mount('#app')
