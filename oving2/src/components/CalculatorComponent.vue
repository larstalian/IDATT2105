<template>
  <div id="calculator">
    <div id="calc-view-wrapper">
      <input type="text" id="calc-view" v-model="inputValue" />
      <textarea
        readonly
        id="result-view"
        v-model="prevValue"
        class="non-resizable"
      ></textarea>
      <textarea
        readonly
        id="error-view"
        v-model="errorMessage"
        class="non-resizable"
      >
      </textarea>
    </div>
    <div id="calc-buttons" class="grid-container">
      <div class="grid-item">
        <button id="c" class="calc-button" @click="clear()">C</button>
      </div>
      <div class="grid-item">
        <button id="ans" class="calc-button" @click="ans()">ANS</button>
      </div>
      <div class="grid-item">
        <button id="del" class="calc-button" @click="del()">DEL</button>
      </div>
      <div class="grid-item">
        <button id="+" class="calc-button" @click="nextInput(`+`)">+</button>
      </div>
      <div class="grid-item">
        <button id="1" class="calc-button" @click="updateInput('1')">1</button>
      </div>
      <div class="grid-item">
        <button id="2" class="calc-button" @click="updateInput(`2`)">2</button>
      </div>
      <div class="grid-item">
        <button id="3" class="calc-button" @click="updateInput(`3`)">3</button>
      </div>
      <div class="grid-item">
        <button id="-" class="calc-button" @click="nextInput(`-`)">-</button>
      </div>
      <div class="grid-item">
        <button id="4" class="calc-button" @click="updateInput(`4`)">4</button>
      </div>
      <div class="grid-item">
        <button id="5" class="calc-button" @click="updateInput(`5`)">5</button>
      </div>
      <div class="grid-item">
        <button id="6" class="calc-button" @click="updateInput(`6`)">6</button>
      </div>
      <div class="grid-item">
        <button id="*" class="calc-button" @click="nextInput(`*`)">*</button>
      </div>
      <div class="grid-item">
        <button id="7" class="calc-button" @click="updateInput(`7`)">7</button>
      </div>
      <div class="grid-item">
        <button id="8" class="calc-button" @click="updateInput(`8`)">8</button>
      </div>
      <div class="grid-item">
        <button id="9" class="calc-button" @click="updateInput(`9`)">9</button>
      </div>
      <div class="grid-item">
        <button id="/" class="calc-button" @click="nextInput(`/`)">/</button>
      </div>
      <div class="grid-item">
        <button id="none" class="calc-button"></button>
      </div>
      <div class="grid-item">
        <button id="0" class="calc-button" @click="updateInput(`0`)">0</button>
      </div>
      <div class="grid-item">
        <button id="." class="calc-button" @click="updateInput(`.`)">.</button>
      </div>
      <div class="grid-item">
        <button id="=" class="calc-button" @click="equal">=</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../store/store.js";
import { computed } from "vue";

const store = useStore();

const inputValue = computed(() => store.inputValue);
const prevValue = computed(() => store.prevValue);
const errorMessage = computed(() => store.errorMessage);

const updateInput = (value) => store.updateInput(value);
const nextInput = (op) => store.nextInput(op);
const clear = () => store.clear();
const del = () => store.del();
const equal = () => store.calculateAndLog();
const ans = () => updateInput(store.result.toString())
</script>


<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
  margin-top: 0;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, min-content);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  align-self: center;
  justify-content: center;
  border-top: solid black 3px;
}
.grid-item {
  border: solid black 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 0;
  padding: 0;
  padding: 3px;
}
.calc-button {
  display: flex;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  font-size: x-large;
  border-radius: 5px;
  width: 60px;
  height: 60px;
  text-align: center;
  justify-content: center;
  color: black;
}
.calc-button:hover {
  background-color: greenyellow;
}
#calculator {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
  text-align: center;
  background-color: gray;
  width: min-content;
  height: min-content;
  border: 3px solid black;
  border-radius: 5px;
  user-select: none;
}
#calc-view {
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  display: flex;
  width: 230px;
  height: 60px;
  text-align: right;
  font-size: large;
  border: 0;
  border-radius: 0;
  user-select: none;
}
#calc-view-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: solid black 3px;
  width: min-content;
  user-select: none;
}
#result-view {
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  border: 0;
  background-color: white;
  border-radius: 0;
  width: 230px;
  height: 20px;
  text-align: right;
  font-size: large;
  color: gray;
  user-select: none;
}
.non-resizable {
  resize: none;
  user-select: none;
}

#error-view {
  width: 230px;
  border-top: 2px solid black;
  background-color: white;
  color: red;
  font-weight: 200;
  text-align: right;
  font-size: large;
  user-select: none;
}
</style>
