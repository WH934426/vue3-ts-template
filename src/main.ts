import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
