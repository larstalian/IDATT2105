<template>
  <header>
    <h1>Calculator</h1>
  </header>
  <div class="main-content">
    <CalculatorComponent/>
  </div>
</template>

<script setup>
import CalculatorComponent from './components/CalculatorComponent.vue';
</script>

<style>
#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
body {
  margin: 0;
  justify-content: center;
}
.main-content {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
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
}
</style>
