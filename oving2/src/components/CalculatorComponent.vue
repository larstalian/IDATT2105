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

<script>
export default {
  name: "CalculatorComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      inputValue: "",
      prevValue: "",
      operator: "",
    };
  },
  methods: {
    updateInput(value) {
      if (value === "." && this.inputValue.includes(".")) {
        return;
      }

      this.inputValue += value;
    },
    nextInput(operator) {
      this.prevValue = parseFloat(this.inputValue);
      this.prevValue = this.inputValue;
      this.inputValue = "";
      this.operator = operator;
    },
    clear() {
      this.inputValue = "";
    },
    del(){
      const length = this.inputValue.length;
      this.inputValue = this.inputValue.substring(0, length -1);
    },
    equal() {
      let newValue = parseFloat(this.inputValue);
      let result = 0;

      switch (this.operator) {
        case `+`:
          result = this.prevValue + newValue;
          break;
        case "-":
          result = this.prevValue - newValue;
          break;
        case "/":
          result = this.prevValue / newValue;
          break;
        case "*":
          result = this.prevValue * newValue;
          break;
      }
      this.inputValue = result;
    },
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
