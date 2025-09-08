<template>
  <section class="bg-[#373737] text-white ">
    <div class="px-[120px]">
      <div class="flex flex-col md:flex-row gap-[81px]">
        <!-- Left image -->
        <img
            :src="knifeImage1"
            alt="Knife cutting meat"
            class="rounded-[14px] w-[300px] h-[289px] object-cover"
        />

        <!-- Right content -->
        <div class="flex flex-col gap-2">
          <h1 class="text-[35px] font-medium ">
            «Tuotown» – легендарные ножи, создающие шедевры
          </h1>
          <p class="text-[16px] leading-5 pt-[51px]">
            Компания «Tuotown» – эксклюзивный представитель профессиональных кухонных ножей, изготовленных лучшими мастерами Восточной Азии с применением передового европейского оборудования и современных материалов. Они отличаются идеальным балансом и фантастической остротой. Сочетают в себе вековые традиции и новейшие разработки. Также предлагаем широкий ассортимент сопутствующих товаров.          </p>

        </div>
      </div>

      <!-- Bottom right image -->
      <div class="mt-6 flex gap-[100px]">
        <div>
          <p class="text-[16px] leading-5">
            Истинная красота ножа — совершённая функциональность и визуальная гармония. Этот предмет издревле сопутствовал человеку: от зари цивилизации до сегодняшних дней. На протяжении всей истории человечества он был верным помощником, незаменимым инструментом и грозным оружием. Предлагаем изделия Hi-end качества по доступным ценам настоящим ценителям японских ножей.          </p>
          <p class="text-[16px] leading-5 pt-[27px]">
            Отличительной чертой нашего интернет-магазина являются уникальные торговые предложения, эксклюзивность продукции, неизменно высокое качество и выгодные цены. Осуществляем продажи элитных японских кухонных ножей для профессионалов и любителей. В обширной ассортиментной линейке представлены изделия для различных потребностей и любого бюджета — от столовых приборов до шеф-ножей.          </p>
          <h3 class="text-[28px] font-semibold pt-[43px] leading-9	">
            Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства
          </h3>
        </div>
        <img
            :src="knifeImage2"
            alt="Knife cutting meat closeup"
            class="rounded-[14px] w-[300px] h-[362px] "
        />
      </div>
    </div>
    <hr class="mt-[60px] h-[1px] w-full">
  </section>
  <All />
</template>

<script setup>
import All from './All.vue'
import knifeImage1 from '../../assets/Rectangle 36.png'
import knifeImage2 from '../../assets/Rectangle 39.png'
</script>

<style scoped>

</style>
