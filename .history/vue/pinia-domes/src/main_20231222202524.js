import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)


app
    .use(router)
    .use(createPinia())
    .mount('#app')