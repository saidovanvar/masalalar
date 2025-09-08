<template>
  <section class="bg-[#373737]">
    <div class="px-[120px] pt-[60px]">
      <h2 class="text-xl mb-[37px]">Всё самое интересное о ножах</h2>
      <div class="grid grid-cols-3 gap-6">
        <article
            v-for="(article, index) in articles"
            :key="index"
            class="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
        >
          <img
              :src="article.image"
              :alt="article.title"
              class="w-[380px] h-[465px] object-cover rounded-lg"
          />
          <p
              class="absolute top-3 right-3 text-xs text-white  px-2 py-1"
          >
            {{ article.date }}
          </p>
          <div
              class="absolute bottom-0 left-0 right-0 transition-colors group-hover:bg-[#C80000]"
          >
            <p class="pl-[35px] pb-[22px] pr-[37px] pt-[13px] leading-6	font-medium text-[17px] text-[#fff]">
              {{ article.description }}
            </p>
          </div>
        </article>
      </div>
    </div>


  </section>
  <hr class="my-[60px] h-[1px] w-full">
</template>

<script setup>
import img1 from '../../assets/Rectangle 39.png'
import img2 from '../../assets/Insta cart.svg'
import img3 from '../../assets/Rectangle 43.png'
const articles = [
  {
    image: img1,
    date: '4 августа 2021 19:24',
    description: 'Традиционные виды японских кухонных ножей',
    title: 'Традиционные виды японских кухонных ножей',
  },
  {
    image: img2,
    date: '4 августа 2021 19:24',
    description: 'Всемирная история режущих клинков — взгляд в прошлое',
    title: 'Всемирная история режущих клинков — взгляд в прошлое',
  },
  {
    image: img3,
    date: '4 августа 2021 19:24',
    description: 'Как ухаживать за японскими кухонными ножами?',
    title: 'Как ухаживать за японскими кухонными ножами?',
  },
]
</script>

<style scoped>
.articles-section {
  background-color: #2d2d2d;
}
</style>
