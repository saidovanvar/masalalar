<template>
  <div class="bg-[#F6F6F6] min-h-screen">
    <!-- HEADER -->
    <header class="flex items-center justify-between px-8 py-4  border-b">
      <div class="flex items-center gap-8">
        <button class="flex flex-col gap-[4px]">
          <img src="../../assets/Group%2036.svg" alt="">
        </button>
        <nav class="flex items-center gap-8 ">
          <a href="#" class="font-medium text-16px hover:text-gray-500">Home</a>
          <a href="#" class="font-medium text-16px hover:text-gray-500">Collections</a>
          <a href="#" class="font-medium text-16px hover:text-gray-500">New</a>
        </nav>
      </div>
      <div class="flex items-center gap-[43px]">
        <button class="w-8 h-8 flex bg-black items-center justify-center border border-black rounded-full"><img src="../../assets/Group%209.svg" alt="logo"></button>
       <div class="flex items-center">
         <button class="px-[20px] py-[12px] flex items-center justify-center border border-black rounded-[22px] bg-black text-white text-xs">Cart</button>
         <button class="p-[6px]  bg-[#fff] items-center  border-[6px] border-black rounded-full"><img src="../../assets/Vector.svg" alt="logo"></button>
       </div>
        <button class="w-8 h-8 flex bg-black items-center justify-center border border-black rounded-full"><img src="../../assets/Group%2010.svg" alt=""></button>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <div class="flex gap-[199px] p-8">
      <div class="flex gap-[62px]">
        <div
            v-for="(product, index) in products"
            :key="index"
            class="bg-[#F6F6F6] w-72 flex flex-col relative"
        >
          <div class="flex gap-[15px]">
            <div>
              <img
                  :src="product.image"
                  :alt="product.title"
                  class="w-[265px] h-[314px] object-cover relative"
              />
             <div class="w-[40px] bg-[#fff] h-[40px] absolute top-[275px] right-[50px]">

               <svg
                   v-if="product.liked"
                   @click="toggleLike(index)"
                   class="pl-[2px] pt-[14px]"
                   width="40" height="28"
                   viewBox="0 0 20 18" fill="none"
                   xmlns="http://www.w3.org/2000/svg"
               >
                 <path d="M0 6.13734C0 11.0003 4.01943 13.5917 6.96173 15.9111C8 16.7296 9 17.5002 10 17.5002C11 17.5002 12 16.7296 13.0383 15.9111C15.9806 13.5917 20 11.0003 20 6.13734C20 1.27441 14.4998 -2.17429 10 2.50088C5.50016 -2.17429 0 1.27441 0 6.13734Z" fill="red"/>
               </svg>

               <svg
                   v-else
                   @click="toggleLike(index)"
                   class="pl-[2px] pt-[14px]"
                   width="40" height="28"
                   viewBox="0 0 22 20" fill="none"
                   xmlns="http://www.w3.org/2000/svg"
               >
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62436 2.4241C2.96537 3.18243 1.75 4.98614 1.75 7.13701C1.75 9.33441 2.64922 11.0281 3.93829 12.4797C5.00072 13.676 6.28684 14.6675 7.54113 15.6345C7.83904 15.8642 8.13515 16.0925 8.42605 16.3218C8.95208 16.7365 9.42132 17.1004 9.87361 17.3647C10.3261 17.6292 10.6904 17.7499 11 17.7499C11.3096 17.7499 11.6739 17.6292 12.1264 17.3647C12.5787 17.1004 13.0479 16.7365 13.574 16.3218C13.8649 16.0925 14.161 15.8642 14.4589 15.6345C15.7132 14.6675 16.9993 13.676 18.0617 12.4797C19.3508 11.0281 20.25 9.33441 20.25 7.13701C20.25 4.98614 19.0346 3.18243 17.3756 2.4241C15.7639 1.68739 13.5983 1.88249 11.5404 4.02065C11.399 4.16754 11.2039 4.25054 11 4.25054C10.7961 4.25054 10.601 4.16754 10.4596 4.02065C8.40166 1.88249 6.23607 1.68739 4.62436 2.4241ZM11 2.45873C8.68795 0.390153 6.09896 0.100781 4.00076 1.05987C1.78471 2.07283 0.25 4.42494 0.25 7.13701C0.25 9.80254 1.3605 11.836 2.81672 13.4757C3.98287 14.7888 5.41022 15.8879 6.67083 16.8585C6.95659 17.0785 7.23378 17.292 7.49742 17.4998C8.00965 17.9036 8.55954 18.3342 9.11682 18.6598C9.67386 18.9853 10.3096 19.2499 11 19.2499C11.6904 19.2499 12.3261 18.9853 12.8832 18.6598C13.4405 18.3342 13.9903 17.9036 14.5026 17.4998C14.7662 17.292 15.0434 17.0785 15.3292 16.8585C16.5898 15.8879 18.0171 14.7888 19.1833 13.4757C20.6395 11.836 21.75 9.80254 21.75 7.13701C21.75 4.42494 20.2153 2.07283 17.9992 1.05987C15.901 0.100781 13.3121 0.390153 11 2.45873Z" fill="#1C274C"/>
               </svg>


             </div>

            </div> 
            <div class="flex flex-col ml-3 items-center">
              <button
                  @click="removeProduct(index)"
                  class="text-gray-500 w-[10px] h-[10px] hover:text-black"
              >✕</button>
              <span class="py-1 mt-[68px] text-sm font-medium">{{ product.size }}</span>
              <span class="w-6 h-6 border" :style="{ backgroundColor: product.color }"></span>
              <button
                  @click="increaseQty(product)"
                  class="w-6 h-6 border border-[#8A8A8A] flex items-center justify-center mt-2"
              >+</button>
              <span class="w-6 h-6 border border-[#8A8A8A] flex items-center justify-center">{{ product.qty }}</span>
              <button
                  @click="decreaseQty(product)"
                  class="w-6 h-6 border border-[#8A8A8A] flex items-center justify-center"
              >-</button>
              <button class="mt-[21px] text-gray-500 hover:text-black"><img src="../../assets/Group%2095.svg" alt=""></button>
            </div>
          </div>
         <div class="flex gap-[54px] items-end">
           <div>
             <p class="text-sm text-gray-500 mt-3">Cotton T Shirt</p>
             <p class="text-base font-medium">{{ product.title }}</p>
           </div>
           <div>
             <p class="mt-1 font-medium">${{ product.price * product.qty }}</p>
           </div>
         </div>
        </div>
      </div>

      <div class="bg-[#F6F6F6] border p-6 mt-[50px] w-72 self-start">
        <h2 class="font-medium mb-4">ORDER SUMMARY</h2>
        <div class="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span>${{ subtotal }}</span>
        </div>
        <div class="flex justify-between text-sm mb-4">
          <span>Shipping</span>
          <span>${{ shipping }}</span>
        </div>
        <div class="flex justify-between font-medium mb-6">
          <span>TOTAL <span class="text-gray-500 text-sm">(TAX INCL.)</span></span>
          <span>${{ total }}</span>
        </div>
        <div class="flex items-center gap-2 mb-4">
          <input type="checkbox" v-model="agree" />
          <label class="text-sm">I agree to the Terms</label>
        </div>
        <button
            @click="showSuccessModal"
            class="bg-gray-300 text-sm w-full py-2 hover:bg-gray-400"
            :disabled="!agree"
        >
          CONTINUE
        </button>
      </div>
    </div>

    <!-- SUCCESS MODAL -->
    <transition name="fade">
      <div
          v-if="isModalOpen"
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all scale-100">
          <h2 class="text-lg font-semibold mb-2">✅ Muvaffaqiyatli amalga oshirildi</h2>
          <p class="text-gray-600">Buyurtmangiz qabul qilindi.</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Rectangle from "../../assets/Rectangle 3.png";
import Group from "../../assets/Rectangle 3 (1).png";

const products = ref([
  { image: Rectangle, size: "L", color: "black", qty: 1, price: 99, title: "Full Sleeve Zipper", liked: false },
  { image: Group, size: "L", color: "black", qty: 1, price: 99, title: "Basic Slim Fit T-Shirt", liked: false },
]);

const shipping = ref(10);
const agree = ref(false);
const isModalOpen = ref(false);

const subtotal = computed(() =>
    products.value.reduce((sum, p) => sum + p.price * p.qty, 0)
);
const total = computed(() => subtotal.value + shipping.value);

function toggleLike(index) {
  products.value[index].liked = !products.value[index].liked;
}

function increaseQty(product) {
  if (product.qty < 20) product.qty++;
}
function decreaseQty(product) {
  if (product.qty > 1) product.qty--;
}
function removeProduct(index) {
  products.value.splice(index, 1);
}
function showSuccessModal() {
  if (agree.value) {
    isModalOpen.value = true;
    setTimeout(() => {
      isModalOpen.value = false;
    }, 2500);
  }
}
</script>
