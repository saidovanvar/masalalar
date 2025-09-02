<template>
  <div>
    <div class="text-2xl font-bold mb-0 text-[#fff]">
      <RouterLink to="/"> <h2 class="absolute top-[60px] left-[700px]">Contact</h2></RouterLink>
    </div>

  </div>
  <div>
    <Mian />
  </div>
</template>

<script setup>
import Mian from "../../mian/mian.vue";
import {RouterLink} from "vue-router";
</script>
