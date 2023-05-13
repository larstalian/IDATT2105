<template>
  <header>
    <h1>Calculator</h1>
  </header>
  <div class="main-content">
    <CalculatorComponent />
    <CalculatorLog />
  </div>
</template>

<script setup>
import CalculatorComponent from "./components/CalculatorComponent.vue";
import CalculatorLog from "./components/CalculatorLog.vue";
</script>

<style>
#app {
  font-family: "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
.main-content {
  display: flex;
  justify-content: center;
  width: 100%;
}

h1 {
  margin: 0;
  padding: 10px;
}

header {
  font-size: large;
  color: white;
  margin-top: 0;
  background-color: #7700ff;
  height: fit-content;
  width: 100%;
}

@media (max-width: 600px) {
  .main-content {
    flex-direction: column;
  }
}
</style>
