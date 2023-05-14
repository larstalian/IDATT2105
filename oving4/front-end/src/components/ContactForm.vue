<template>
  <div id="contact-form">
    <form @submit.prevent="store.submit" v-if="!store.isSubmitted.valueOf()">
      <label for="name-field">Name:</label>
      <input
        id="name-field"
        class="contact-form-field"
        type="text"
        v-model="store.name.value"
        placeholder="Erik Skjellevik"
        required
      />

      <label for="mail-field">E-mail:</label>
      <input
        id="mail-field"
        class="contact-form-field"
        type="email"
        v-model="store.email.value"
        placeholder="your@mail.com"
        required
      />

      <label for="message-field">Message:</label>
      <input
        id="message-field"
        class="contact-form-field"
        v-model="store.message.value"
        placeholder="I really enjoyed your calculator"
        required
      />

      <button
        type="submit"
        :disabled="!store.isFormValid || store.isSubmitted.valueOf()"
      >
        Submit
      </button>
    </form>
    <p v-else>Contact form has been submitted! Thank you.</p>
    <p v-if="store.errorMessage" class="error">{{ store.errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { useContactStore } from "../store/contact";
const store = useContactStore();
</script>

<style scoped>
#contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
}
.contact-form-field {
  resize: none;
  text-align: center;
  width: 100%;
  padding: 15px;
  font-size: 1.1em;
  border: none;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.15s ease-in-out;
}

input::placeholder {
  color: #a9a9ac;
}

input:focus {
  outline: none;
  box-shadow: 0 1px 3px #7700ff;
}

input:focus::placeholder {
  color: transparent;
}

#message-field {
  height: auto;
  min-height: 100px;
}

label {
  font-variant: small-caps;
  font-size: large;
  font-weight: 100;
}

.error {
  color: red;
}
</style>
