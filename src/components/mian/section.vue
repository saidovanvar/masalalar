<template>
    <div class="h-full bg-black text-white">
    <img
        :src="slides[currentIndex].image"
        alt="Slide"
        class="w-full h-full absolute top-0 "
    />
    <div class="absolute left-12 top-1/4 max-w-md">
      <h2 class="text-4xl font-semibold mb-4 leading-tight">
        Исключительное качество<br />без компромиссов
      </h2>
      <p class="mb-6 text-gray-300">
        Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства
      </p>
      <button class="px-6 py-2 border-[2px] border-[#C80000] text-white rounded-full hover:bg-[#C80000] transition">
        ПОДРОБНЕЕ
      </button>
    </div>
    <div class="absolute bottom-[76px] left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
      <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="text-white text-sm font-semibold transition"
      >
        <span
            class="w-4 h-4 rounded-full inline-block"
            :class="currentIndex === index ? 'text-white' : 'text-gray-500'"
        >
          {{ index + 1 }}
        </span>
      </button>
    </div>
    <button
        @click="prevSlide"
        class="absolute bottom-6 active:bg-red-600 left-6 bg-black bg-opacity-40 text-white  border-[1px] border-[#FFFFFF] py-[10px] px-[20px] rounded-[100px] text-xl z-10"
        :disabled="currentIndex === 0"
    >
      ‹
    </button>

    <button
        @click="nextSlide"
        class="absolute bottom-6 active:bg-red-600 right-6 bg-black bg-opacity-40 text-white  border-[1px] border-[#FFFFFF] py-[10px] px-[20px] rounded-[100px] text-xl z-10"
        :disabled="currentIndex === slides.length - 1"
    >
      ›
    </button>
  </div>
  <br>
  <Main />
</template>

<script setup>
import Main from './mian.vue'
import { ref } from 'vue'
import img from '../../assets/5042c54c541b0dce556fd947e20b6ccbe9ae18f2.png'
import img2 from '../../assets/williams-oliver-kitchen-accessories-store-scaled.webp'
const slides = [
  { image: img },
  { image: img2 },
  { image: img },
  { image: img2 },
]

const currentIndex = ref(0)
let backClickCount = 0

function goToSlide(index) {
  currentIndex.value = index
  backClickCount = 0
}

function nextSlide() {
  if (currentIndex.value < slides.length - 1) {
    currentIndex.value++
    backClickCount = 0
  }
}

function prevSlide() {
  if (currentIndex.value === slides.length - 1) {
    backClickCount++
    if (backClickCount >= 4) {
      currentIndex.value = 0
      backClickCount = 0
    }
  } else if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>
