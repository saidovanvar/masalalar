<template>
  <div class="max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-black text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-2 animate-pulse">
        {{ fullName }}
      </h1>
      <p class="text-gray-500 font-medium">Vue.js + Tailwind CSS</p>
    </div>

    <!-- Form -->
    <form @submit.prevent="submitForm" class="space-y-6 bg-white/70 p-6 rounded-xl shadow">
      <input
          v-model="form.name"
          type="text"
          placeholder="Ismingiz"
          class="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full py-3 text-white font-bold rounded-xl transition-all duration-300"
          :class="isSubmitting
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'"
      >
        <span v-if="isSubmitting" class="flex items-center justify-center space-x-2">
          <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke-width="4"></circle>
            <path class="opacity-75" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" fill="currentColor"></path>
          </svg>
          <span>Yuborilmoqda...</span>
        </span>
        <span v-else>✨ YUBORISH ✨</span>
      </button>
    </form>

    <!-- Success Message -->
    <transition name="fade">
      <div
          v-if="showSuccess"
          class="mt-6 p-4 rounded-xl bg-green-100 border-l-4 border-green-500 text-green-700"
      >
        Ma’lumotlar muvaffaqiyatli yuborildi!
      </div>
    </transition>

    <!-- Ismlar qo'shish -->
    <div class="mt-10 space-y-4">
      <h2 class="text-xl font-bold text-gray-800">Yangi ism qo'shish</h2>
      <div class="flex gap-4">
        <input
            v-model="newName"
            @keyup.enter="addName"
            type="text"
            placeholder="Yangi ism"
            class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
            @click="addName"
            class="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
        >
          Qo‘shish
        </button>
      </div>
    </div>

    <!-- Ismlar ro'yxati -->
    <div v-if="names.length" class="mt-10">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Ismlar ro'yxati ({{ names.length }})</h2>
      <ul class="space-y-3">
        <li
            v-for="(name, index) in names"
            :key="`name-${index}`"
            class="flex items-center justify-between bg-blue-50 p-4 rounded-lg shadow"
        >
          <span class="font-semibold text-blue-700">{{ name }}</span>
          <button
              @click="deleteName(index)"
              class="text-red-500 hover:text-red-700 font-semibold"
          >
            O‘chirish
          </button>
        </li>
      </ul>
    </div>

    <!-- Mevalar -->
    <div v-if="fruits.length" class="mt-10">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Mevalar ({{ fruits.length }})</h2>
      <ul class="space-y-3">
        <li
            v-for="(fruit, index) in fruits"
            :key="`fruit-${index}`"
            class="flex items-center justify-between bg-yellow-50 p-4 rounded-lg shadow"
        >
          <span class="font-semibold text-yellow-700">{{ fruit }}</span>
          <button
              @click="deleteFruit(index)"
              class="text-red-500 hover:text-red-700 font-semibold"
          >
            O‘chirish
          </button>
        </li>
      </ul>
    </div>

    <!-- Yuborilgan ma'lumotlar -->
    <div v-if="submittedData.length" class="mt-10">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Yuborilgan ma'lumotlar ({{ submittedData.length }})</h2>
      <ul class="space-y-4">
        <li
            v-for="(data, index) in submittedData"
            :key="`data-${index}`"
            class="bg-white p-4 border rounded-xl shadow"
        >
          <p><strong>Ism:</strong> {{ data.name }}</p>
          <p><strong>Email:</strong> {{ data.email }}</p>
          <p class="text-sm text-gray-500">{{ data.timestamp }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: ''
      },
      fruits: ['Olma', 'Banan', 'Uzum'],
      names: [],
      newName: '',
      firstName: 'Anvar',
      lastName: 'Saidov',
      isSubmitting: false,
      showSuccess: false,
      submittedData: []
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  methods: {
    async submitForm() {
      if (!this.form.name.trim() || !this.form.email.trim()) {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
      }

      this.isSubmitting = true;
      await new Promise(resolve => setTimeout(resolve, 1500));

      this.submittedData.unshift({
        name: this.form.name,
        email: this.form.email,
        timestamp: new Date().toLocaleString()
      });

      if (!this.names.includes(this.form.name.trim())) {
        this.names.unshift(this.form.name.trim());
      }

      this.form.name = '';
      this.form.email = '';
      this.isSubmitting = false;

      this.showSuccess = true;
      setTimeout(() => (this.showSuccess = false), 3000);
    },
    addName() {
      if (this.newName.trim() && !this.names.includes(this.newName.trim())) {
        this.names.unshift(this.newName.trim());
        this.newName = '';
      } else if (this.names.includes(this.newName.trim())) {
        alert('Bu ism allaqachon mavjud!');
      }
    },
    deleteName(index) {
      this.names.splice(index, 1);
    },
    deleteFruit(index) {
      this.fruits.splice(index, 1);
    }
  },
  mounted() {
    const savedNames = localStorage.getItem('savedNames');
    const savedData = localStorage.getItem('submittedData');

    if (savedNames) {
      this.names = JSON.parse(savedNames);
    }
    if (savedData) {
      this.submittedData = JSON.parse(savedData);
    }
  },
  watch: {
    names: {
      handler(newVal) {
        localStorage.setItem('savedNames', JSON.stringify(newVal));
      },
      deep: true
    },
    submittedData: {
      handler(newVal) {
        localStorage.setItem('submittedData', JSON.stringify(newVal));
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
