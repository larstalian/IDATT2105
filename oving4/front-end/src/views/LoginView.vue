<template>
  <div class="login">
    <h1>Login</h1>
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';
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
