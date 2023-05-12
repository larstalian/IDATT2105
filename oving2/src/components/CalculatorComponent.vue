<template>
  <body>
    <div id="calculator">
      <div id="calc-view"></div>
      <div id="calc-buttons" class="grid-container">
        <div class="grid-item">
          <button id="c" class="calc-button">C</button>
        </div>
        <div class="grid-item">
          <button id="ans" class="calc-button">ANS</button>
        </div>
        <div class="grid-item">
          <button id="del" class="calc-button">DEL</button>
        </div>
        <div class="grid-item">
          <button id="+" class="calc-button">+</button>
        </div>
        <div class="grid-item">
          <button id="1" class="calc-button">1</button>
        </div>
        <div class="grid-item">
          <button id="2" class="calc-button">2</button>
        </div>
        <div class="grid-item">
          <button id="3" class="calc-button">3</button>
        </div>
        <div class="grid-item">
          <button id="-" class="calc-button">-</button>
        </div>
        <div class="grid-item">
          <button id="4" class="calc-button">4</button>
        </div>
        <div class="grid-item">
          <button id="5" class="calc-button">5</button>
        </div>
        <div class="grid-item">
          <button id="6" class="calc-button">6</button>
        </div>
        <div class="grid-item">
          <button id="*" class="calc-button">*</button>
        </div>
        <div class="grid-item">
          <button id="7" class="calc-button">7</button>
        </div>
        <div class="grid-item">
          <button id="8" class="calc-button">8</button>
        </div>
        <div class="grid-item">
          <button id="9" class="calc-button">9</button>
        </div>
        <div class="grid-item">
          <button id="/" class="calc-button">/</button>
        </div>
        <div class="grid-item">
          <button id="none" class="calc-button"></button>
        </div>
        <div class="grid-item">
          <button id="0" class="calc-button">0</button>
        </div>
        <div class="grid-item">
          <button id="." class="calc-button">.</button>
        </div>
        <div class="grid-item">
          <button id="=" class="calc-button">=</button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "CalculatorComponent",
  props: {
    msg: String,
  },
};
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
  border-radius: 5px;
  width: 60px;
  height: 60px;
  text-align: center;
  justify-content: center;
}
#calculator{
  display: flex;
  justify-content: center;

  margin: 70px;
  text-align: center;
  background-color: gray;
  width: min-content;
  height: min-content;
}
</style>
