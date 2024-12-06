import App from './App.vue'
import { createApp } from 'vue'
import routes from './router/router_api'

const app = createApp(App)
app.use(routes)
app.mount('#app')
