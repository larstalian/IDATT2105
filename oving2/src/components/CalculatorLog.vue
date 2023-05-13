<template>
  <div id="log-wrapper">
    <h4>Calculator History</h4>
    <ul id="log-list">
      <li v-for="(log, index) in logList" :key="index">
        {{ log }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "../store/store.js";
import { computed } from "vue";

const store = useStore();
const logList = computed(() => store.logList);
</script>

<style scoped>
#log-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
}
#log-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid black 3px;
  width: auto;
  min-width: 300px;
  min-height: 400px;
  min-height: 400px;
  margin: 40px;
  text-align: center;
}
h4 {
  margin: 4px;
  border-bottom: solid black 1px;
  width: 100%;
}
</style>
