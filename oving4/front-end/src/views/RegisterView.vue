<template>
  <div class="register">
    <h1>Register</h1>
    <RegisterForm />
  </div>
</template>

<script setup lang="ts">
import RegisterForm from '@/components/RegisterForm.vue';
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}

@media (max-width: 600px) {
  .home {
    flex-direction: column;
  }
}
</style>@/components/LoginForm.vue
