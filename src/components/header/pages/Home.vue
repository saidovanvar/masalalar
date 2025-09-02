<template>
  <div>
        <button class="p-4 bg-blue-500 text-blue-400  font-bold mt-6">
      <RouterLink
          v-for="(item, index) in menu"
          :key="index"
          :to="item.link"
          class="hover:text-blue-600 transition flex gap-[10px] p-3 mt-[100px]"
      >
        {{ item.name }}
      </RouterLink>
    </button>
  </div>
</template>



<script setup>
const menu = [
  { name: "Get", link: "/get" },
  { name: "Put", link: "/put" },
];
import {RouterLink} from "vue-router";
</script>
