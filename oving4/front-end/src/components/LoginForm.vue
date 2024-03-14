<template>
  <form class="login-form" @submit.prevent="store.submit">
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      v-model="store.username.value"
      placeholder="Enter your username"
    />
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      v-model="store.password.value"
      placeholder="Enter your password"
    />
    <button type="submit">Login</button>
    <div id="message-field">
      <p v-if="store.errorMessage" class="error">{{ store.errorMessage }}</p>
    </div>
  </form>
  <p class="login-form">Don't have an account? <router-link to="/register">Register</router-link></p>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';
const store = useUserStore();


</script>

<style scoped>

.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: 0 auto;
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
</style>@/store/user
