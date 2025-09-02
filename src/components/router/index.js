import Home from '../header/pages/Home.vue'
import About from "../header/pages/About.vue";
import Contact from "../header/pages/Contact.vue";
import get from '../header/pages/pegs/get.vue'
import put from '../header/pages/pegs/put.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [

            { path: "/", component: Home, name: "Home" },
            { path: "/about", component: About, name: "About" },
            { path: "/contact", component: Contact, name: "Contact" },
    { path: "/get", component: get, name: "Get" },
    { path: "/put", component: put, name: "Put" },


]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
