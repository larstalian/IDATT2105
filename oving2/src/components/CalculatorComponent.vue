<template>
  <body>
    <div id="calculator">
      <div id="calc-view-wrapper">
        <input type="text" id="calc-view" v-model="inputValue" />
        <input id="result-view" disabled v-model="prevValue" />
      </div>
      <div id="calc-buttons" class="grid-container">
        <div class="grid-item">
          <button id="c" class="calc-button" @click="clear()">C</button>
        </div>
        <div class="grid-item">
          <button id="ans" class="calc-button">ANS</button>
        </div>
        <div class="grid-item">
          <button id="del" class="calc-button" @click="del()">DEL</button>
        </div>
        <div class="grid-item">
          <button id="+" class="calc-button" @click="nextInput(`+`)">+</button>
        </div>
        <div class="grid-item">
          <button id="1" class="calc-button" @click="updateInput('1')">
            1
          </button>
        </div>
        <div class="grid-item">
          <button id="2" class="calc-button" @click="updateInput(`2`)">
            2
          </button>
        </div>
        <div class="grid-item">
          <button id="3" class="calc-button" @click="updateInput(`3`)">
            3
          </button>
        </div>
        <div class="grid-item">
          <button id="-" class="calc-button" @click="nextInput(`-`)">-</button>
        </div>
        <div class="grid-item">
          <button id="4" class="calc-button" @click="updateInput(`4`)">
            4
          </button>
        </div>
        <div class="grid-item">
          <button id="5" class="calc-button" @click="updateInput(`5`)">
            5
          </button>
        </div>
        <div class="grid-item">
          <button id="6" class="calc-button" @click="updateInput(`6`)">
            6
          </button>
        </div>
        <div class="grid-item">
          <button id="*" class="calc-button" @click="nextInput(`*`)">*</button>
        </div>
        <div class="grid-item">
          <button id="7" class="calc-button" @click="updateInput(`7`)">
            7
          </button>
        </div>
        <div class="grid-item">
          <button id="8" class="calc-button" @click="updateInput(`8`)">
            8
          </button>
        </div>
        <div class="grid-item">
          <button id="9" class="calc-button" @click="updateInput(`9`)">
            9
          </button>
        </div>
        <div class="grid-item">
          <button id="/" class="calc-button" @click="nextInput(`/`)">/</button>
        </div>
        <div class="grid-item">
          <button id="none" class="calc-button"></button>
        </div>
        <div class="grid-item">
          <button id="0" class="calc-button" @click="updateInput(`0`)">
            0
          </button>
        </div>
        <div class="grid-item">
          <button id="." class="calc-button" @click="updateInput(`.`)">
            .
          </button>
        </div>
        <div class="grid-item">
          <button id="=" class="calc-button" @click="equal">=</button>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref("");
const prevValue = ref("");
const operator = ref("");

function updateInput(value) {
  if (value === "." && inputValue.value.includes(".")) {
    return;
  }

  inputValue.value += value;
}

function nextInput(op) {
  prevValue.value = parseFloat(inputValue.value);
  inputValue.value = "";
  operator.value = op;
}

function clear() {
  inputValue.value = "";
}

function del() {
  const length = inputValue.value.length;
  inputValue.value = inputValue.value.substring(0, length - 1);
}

function equal() {
  let newValue = parseFloat(inputValue.value);
  let result = 0;

  switch (operator.value) {
    case `+`:
      result = prevValue.value + newValue;
      break;
    case "-":
      result = prevValue.value - newValue;
      break;
    case "/":
      result = prevValue.value / newValue;
      break;
    case "*":
      result = prevValue.value * newValue;
      break;
  }
  inputValue.value = result.toString();
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 0;
  padding-top: 0;
}
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
  font-family: "Courier New", Courier, monospace;
  font-size: large;
  border-radius: 5px;
  width: 60px;
  height: 60px;
  text-align: center;
  justify-content: center;
}
.calc-button:hover {
  background-color: greenyellow;
}
#calculator {
  justify-content: center;
  margin: 70px;
  text-align: center;
  background-color: gray;
  width: min-content;
  height: min-content;
}
#calc-view {
  font-family: "Courier New" , Courier, monospace;
  font-weight: bold;
  display: flex;
  justify-content: center;
  width: 99%;
  height: 80px;
  text-align: right;
  font-size: large;
  border: 0;
}
#calc-view-wrapper {
  border: solid black 3px;
  justify-content: center;
  width: 97%;
}
#result-view {
  font-family: "Courier New", Courier, monospace;
  border: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  width: 99%;
  height: 40px;
  text-align: right;
  font-size: large;
  color: gray;
}
</style>
