import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "main",
  state: () => ({
    logList: [],
    inputValue: "",
    prevValue: "",
    operator: "",
    newValue: "",
    lastAnswer: "",
    errorMessage: "",
    result: 0,
  }),
  actions: {
    updateInput(value) {
      this.updateErrorMessage("");
      if (value === "." && this.inputValue.includes(".")) {
        return;
      }
      if (this.operator !== "" && this.inputValue === this.result.toString()) {
        this.inputValue = value;
      } else {
        this.inputValue += value;
      }
    },
    nextInput(op) {
      if (/\D/.test(parseFloat(this.inputValue))) {
        this.updateErrorMessage("Only Numbers!");
        this.inputValue = "";
        return;
      }
      if (this.inputValue !== "") {
        this.prevValue = parseFloat(this.inputValue);
        this.inputValue = "";
        this.operator = op;
      }
    },
    clear() {
      this.inputValue = "";
      this.errorMessage = "";
    },
    del() {
      const length = this.inputValue.length;
      this.inputValue = this.inputValue.substring(0, length - 1);
    },
    calculateAndLog() {
      this.calculate();
      this.addToLog();
    },
    addToLog() {
      const logItem = `${this.prevValue} ${this.operator} ${this.newValue} = ${this.result}`;
      this.logList.push(logItem);
    },
    calculate() {
      if (/\D/.test(this.inputValue)) {
        this.updateErrorMessage("Only Numbers!");
        this.inputValue = "";
        return;
      }
    
      if (this.inputValue !== "") {
        this.newValue = parseFloat(this.inputValue);
      }
    
      let result = 0;
    
      switch (this.operator) {
        case "+":
          result = this.prevValue + this.newValue;
          break;
        case "-":
          result = this.prevValue - this.newValue;
          break;
        case "/":
          if (this.newValue !== 0) {
            result = this.prevValue / this.newValue;
          } else {
            this.errorMessage = "Cannot divide by zero"; // Corrected typo here
            return;
          }
          break;
        case "*":
          result = this.prevValue * this.newValue;
          break;
      }
    
      this.result = result; 
      this.inputValue = result.toString(); 
    },
    updateErrorMessage(message) {
      this.errorMessage = message;
    },
  },
});
