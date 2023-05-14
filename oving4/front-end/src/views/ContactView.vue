<template>
  <div class="contact">
    <h1>Contact me!</h1>
    <ContactForm/>
  </div>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';
</script>

<style scoped>

.contact{
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
</style>