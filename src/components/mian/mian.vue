<template>
  <div>
    <h2 class="mt-[110px]">Lead Form</h2>
    <form class="mt-[100px]" @submit.prevent="submitForm">
      <input v-model="form.firstName" placeholder="First Name" required />
      <input v-model="form.lastName" placeholder="Last Name" required />
      <input v-model="form.phoneNumber" placeholder="Phone Number" required />
      <textarea v-model="form.comment" placeholder="Comment"></textarea>
      <button type="submit">Submit</button>
    </form>

    <div v-if="responseMessage" class="response">
      {{ responseMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  comment: '',
  categoryId: 17
})

const responseMessage = ref('')

const submitForm = async () => {
  try {
    const response = await axios.post('https://crm-test-api.duckdns.org/api/Leads/public', form.value)
    responseMessage.value = 'Successfully submitted!'
    console.log('Response:', response.data)
    // Clear form
    form.value = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      comment: '',
      categoryId: 17
    }
  } catch (error) {
    console.error('Error:', error)
    responseMessage.value = 'Error occurred. Please try again.'
  }
}
</script>

<style scoped>
input, textarea {
  display: block;
  margin: 10px 0;
  padding: 8px;
  width: 300px;
}
button {
  padding: 8px 16px;
}
.response {
  margin-top: 15px;
  color: green;
}
</style>
