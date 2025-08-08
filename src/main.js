import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')
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