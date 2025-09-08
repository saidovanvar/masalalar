<template>
  <Header @toggle-sidebar="sidebarOpen = true" />
  <Sidebar :isOpen="sidebarOpen" @close="sidebarOpen = false" />
  <Section />
<router-view></router-view>
</template>
<script setup>
import Header from "./components/header/header.vue";
import Sidebar from './components/header/pages/sidebar.vue'
import Section from './components/mian/section.vue'
import { ref } from 'vue'
const sidebarOpen = ref(false)
</script>