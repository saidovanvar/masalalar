<template>

 <div >

   <div
       v-if="isOpen"
       class="fixed  inset-0 z-[100] bg-black/50 backdrop-blur-sm"
       @click.self="$emit('close')"
   >

     <transition name="slide">
       <div
           class="absolute  left-0 h-full w-[300px] text-white p-6 shadow-lg z-50 overflow-y-auto"
       >

         <div class="absolute inset-0 bg-[#1A1A1ACC] z-0 backdrop-blur-sm"></div>
         <div class="relative z-10">
           <button
               @click="$emit('close')"
               class="text-white text-xl mb-6 hover:text-gray-400 transition"
           >
             <svg
                 width="20"
                 height="20"
                 viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
             >
               <path
                   d="M15 18L9 12L15 6"
                   stroke="white"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
               />
             </svg>
           </button>
           <ul class="space-y-4 text-[15px] font-light">
             <li class="hover:text-gray-400 cursor-pointer">КУХОННЫЕ НОЖИ TUOTOWN</li>
             <li class="hover:text-gray-400 cursor-pointer">СКЛАДНЫЕ НОЖИ TUOTOWN</li>
             <li class="hover:text-gray-400 cursor-pointer">КУХОННЫЕ НОЖИ QXF</li>
             <li class="hover:text-gray-400 cursor-pointer">ТОЧИЛЬНЫЕ КАМНИ</li>
             <li class="hover:text-gray-400 cursor-pointer">НАБОРЫ ДЛЯ BBQ</li>
             <li class="hover:text-gray-400 cursor-pointer">КУХОННЫЕ ПРИНАДЛЕЖНОСТИ</li>
             <li class="hover:text-gray-400 cursor-pointer">ТУРИСТИЧЕСКИЕ ТОВАРЫ</li>
           </ul>

           <ul class="mt-10 pt-6 border-t border-gray-600 space-y-3 text-sm text-gray-300 font-light">
             <li class="hover:text-white cursor-pointer">НОВОСТИ</li>
             <li class="hover:text-white cursor-pointer">О КОМПАНИИ</li>
             <li class="hover:text-white cursor-pointer">КОНТАКТЫ</li>
             <li class="hover:text-white cursor-pointer">КАК ПРОЕХАТЬ</li>
           </ul>
         </div>
       </div>
     </transition>
   </div>
 </div>
</template>

<script setup>
import img from '../../../assets/5042c54c541b0dce556fd947e20b6ccbe9ae18f2.png'
defineProps({
  isOpen: Boolean,
  backgroundImage: String
})
defineEmits(['close'])
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
