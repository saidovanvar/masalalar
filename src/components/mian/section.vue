<template>
  <div class="accordion-container mt-[100px]">
    <div
        v-for="(manga, index) in mangas"
        :key="index"
        class="accordion-item"
    >
      <button class="accordion-btn" @click="toggle(index)">
        {{ manga.title }}
      </button>
      <div v-show="activeIndex === index" class="accordion-content">
        <p>{{ manga.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mangas = [
  {
    title: 'Manga 1',
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa, eius error et nemo omnis optio. Aliquam beatae, ex fuga id, illo inventore molestias numquam quae quasi, quibusdam tempore voluptate?',
  },
  {
    title: 'Manga 2',
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa, eius error et nemo omnis optio. Aliquam beatae, ex fuga id, illo inventore molestias numquam quae quasi, quibusdam tempore voluptate? ',
  },
  {
    title: 'Manga 3',
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa, eius error et nemo omnis optio. Aliquam beatae, ex fuga id, illo inventore molestias numquam quae quasi, quibusdam tempore voluptate?',
  },
]

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.accordion-container {
  max-width: 600px;
 margin-top: 110px;

  font-family: Arial, sans-serif;
}

.accordion-item {
  margin-bottom: 10px;
}

.accordion-btn {
  width: 100%;
  padding: 15px;
  font-size: 18px;
  text-align: left;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.accordion-btn:hover {
  background-color: #34495e;
}

.accordion-content {
  padding: 15px;
  background-color: #ecf0f1;
  border-left: 3px solid #2c3e50;
}
</style>
