import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './components/router'

createApp(App).
use(router).
mount('#app')
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
