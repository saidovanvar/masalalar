<template>
  <div class="min-h-screen bg-[#373737] text-white p-6">
    <div class="flex justify-center gap-6 border-b border-gray-700 mb-6">
      <button
          v-for="tab in ['Новинки', 'Популярное']"
          :key="tab"
          @click="activeTab = tab"
          class="pb-2 text-lg font-semibold relative"
          :class="activeTab === tab ? 'text-white' : 'text-gray-400'"
      >
        {{ tab }}
        <span
            v-if="activeTab === tab"
            class="absolute left-0 -bottom-[1px] w-full h-[2px] bg-red-500"
        ></span>
      </button>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
          v-for="(p, i) in filteredProducts"
          :key="i"
          class="bg-[#373737] relative rounded-[14px]"
      >
        <!-- Image -->
        <img :src="p.img" alt=""  class="bg-[#2A2A2A] w-[286px] rounded-[14px] h-[412px]  " />

        <!-- + Button -->
        <button
            @click="toggleExpand(i)"
            class="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-red-500 transition"
        >
          <span class="text-xl">+</span>
        </button>

        <!-- Name -->
        <h3 class="text-sm font-medium truncate mt-[11px]">{{ p.name }}</h3>

        <div class="flex items-center gap-[28px]">

          <p class="text-gray-400 text-sm">{{ p.price }} р.</p>

          <!-- Badge -->
          <span
              v-if="p.badge"
              class="text-xs font-semibold text-red-400 mt-1 inline-block"
          >
          {{ p.badge }}
        </span>
        </div>

        <!-- Hidden Info -->
        <div
            v-if="expanded.includes(i)"
            class="mt-3 p-3 bg-gray-700 rounded-lg text-sm text-gray-200"
        >
          {{ p.desc }}
        </div>
      </div>
    </div>
    <hr class="my-[60px] h-[1px] w-full">
  </div>
  <All />
</template>

<script setup>
import { ref, computed } from "vue"
import All from "../mian/sec.vue"
import img1 from "../../assets/image 16.svg"
import img2 from "../../assets/image 17.svg"
const activeTab = ref("Новинки")
const expanded = ref([])

const products = ref([
  {
    name: "Складной нож SQ01-B",
    price: "850",
    badge: "Новинка",
    img: img1,
    desc: "Описание ножа SQ01-B",
    category: "Новинки",
  },
  {
    name: "Складной нож JJ001-TUO-B",
    price: "12 850",
    badge: "Новинка",
    img: img2,
    desc: "Описание ножа JJ001-TUO-B",
    category: "Популярное",
  },
])

const filteredProducts = computed(() =>
    products.value.filter((p) => p.category === activeTab.value)
)

function toggleExpand(i) {
  if (expanded.value.includes(i)) {
    expanded.value = expanded.value.filter((x) => x !== i)
  } else {
    expanded.value.push(i)
  }
}
</script>
