<template>
  <header class="   fixed top-0 left-0 z-50">
   <div>
     <div v-if="isTrue" id="logo">
       <div class=" bg-black mx-auto px-6 py-4  justify-between items-center">

         <div class="text-xl font-bold text-[#fff]">
           <RouterLink to="/">MyBrand</RouterLink>
         </div>

         <nav class=" items-center space-x-8  text-[#fff] font-medium">
           <RouterLink
               v-for="(item, index) in menu"
               :key="index"
               :to="item.link"
               class="hover:text-blue-600 transition none"
           >
             {{ item.name }}
           </RouterLink>

         </nav>
       </div>
     </div>
   <div @click="click()">
     <img src="../../assets/button.nav-list_nav__burger-btn__6_6p4.svg" alt="">
   </div>
   </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import {ref} from "vue";
let isTrue = ref(false);

const menu = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];
function click() {
isTrue.value = !isTrue.value;
}
</script>
