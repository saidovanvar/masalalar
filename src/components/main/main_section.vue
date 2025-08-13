<template>
  <div class="flex gap-[199px] p-8 bg-[#F6F6F6] min-h-screen">
    <div class="flex gap-[62px]">
      <div
          v-for="(product, index) in products"
          :key="index"
          class="bg-[#F6F6F6] w-72 flex flex-col relative"
      >
        <div class="flex gap-[15px]">
          <img
              :src="product.image"
              :alt="product.title"
              class="w-[265px] h-[314px] object-cover"
          />
          <div class="flex flex-col ml-3 items-center">
            <button
                @click="removeProduct(index)"
                class="text-gray-500 w-[10px] h-[10px] hover:text-black"
            >
              ✕
            </button>
            <span class="py-1 mt-[68px] text-sm font-medium">{{
                product.size
              }}</span>
            <span
                class="w-6 h-6 border"
                :style="{ backgroundColor: product.color }"
            ></span>
            <button
                @click="increaseQty(product)"
                class="w-6 h-6 border border-[#8A8A8A] flex items-center justify-center mt-2"
            >
              +
            </button>
            <span
                class="w-6 h-6 border border-[#8A8A8A] flex items-center justify-center"
            >{{ product.qty }}</span
            >
            <button
                @click="decreaseQty(product)"
                class="w-6 h-6 border border-[#8A8A8A] flex items-center justify-center"
            >
              -
            </button>
            <button class="mt-2 text-gray-500 hover:text-black">⟳</button>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-3">Cotton T Shirt</p>
        <p class="text-base font-medium">{{ product.title }}</p>
        <p class="mt-1 font-medium">
          ${{ product.price * product.qty }}
        </p>
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
        <span
        >TOTAL <span class="text-gray-500 text-sm">(TAX INCL.)</span></span
        >
        <span>${{ total }}</span>
      </div>

      <div class="flex items-center gap-2 mb-4">
        <input type="checkbox" v-model="agree" />
        <label class="text-sm">I agree to the Terms and Conditions</label>
      </div>

      <button
          class="bg-gray-300 text-sm w-full py-2 hover:bg-gray-400"
          :disabled="!agree"
      >
        CONTINUE
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Rectangle from "../../assets/Rectangle 3.png";
import Group from "../../assets/Group 19.png";

const products = ref([
  {
    image: Rectangle,
    size: "L",
    color: "black",
    qty: 1,
    price: 99,
    title: "Full Sleeve Zipper",
  },
  {
    image: Group,
    size: "L",
    color: "black",
    qty: 1,
    price: 99,
    title: "Basic Slim Fit T-Shirt",
  },
]);

const shipping = ref(10);
const agree = ref(false);

const subtotal = computed(() =>
    products.value.reduce((sum, p) => sum + p.price * p.qty, 0)
);
const total = computed(() => subtotal.value + shipping.value);

function increaseQty(product) {
  if (product.qty < 20) {
    product.qty++;
  }
}

function decreaseQty(product) {
  if (product.qty > 1) {
    product.qty--;
  }
}

function removeProduct(index) {
  products.value.splice(index, 1);
}
</script>
