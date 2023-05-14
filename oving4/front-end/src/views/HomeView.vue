<template>
  <div class="home">
    <CalculatorComponent />
    <CalculatorLog />
  </div>
</template>

<script setup lang="ts">
import CalculatorComponent from "@/components/CalculatorComponent.vue";
import CalculatorLog from "@/components/CalculatorLog.vue";
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
</style>
