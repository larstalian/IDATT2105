import { defineStore } from "pinia";
/**
 * This is options API. Not nice. See contact.ts for composition api setup
 */
interface State {
  logList: string[];
  inputValue: string;
  prevValue: string;
  operator: string;
  newValue: string;
  lastAnswer: string;
  errorMessage: string;
  result: number;
}

export const useStore = defineStore({
  id: "main",
  state: (): State => ({
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
    updateInput(value: string) {
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
    nextInput(op: string) {
      if (/\D/.test(this.inputValue)) {
        this.updateErrorMessage("Only Numbers!");
        this.inputValue = "";
        return;
      }
      if (this.inputValue !== "") {
        this.prevValue = this.inputValue;
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
    addToLog() {
      const logItem =
        this.prevValue +
        " " +
        this.operator +
        " " +
        this.newValue +
        " = " +
        this.inputValue;
      this.logList.push(logItem);
    },
    calculate() {
      if (/\D/.test(this.inputValue)) {
        this.updateErrorMessage("Only Numbers!");
        this.inputValue = "";
        return;
      }

      if (this.inputValue !== "") {
        this.newValue = this.inputValue;
      }

      let result = 0;

      switch (this.operator) {
        case "+":
          result = Number(this.prevValue) + Number(this.newValue);
          break;
        case "-":
          result = Number(this.prevValue) - Number(this.newValue);
          break;
        case "/":
          if (this.newValue !== "0") {
            result = Number(this.prevValue) / Number(this.newValue);
          } else {
            this.errorMessage = "Cannot divide by zero";
            return;
          }
          break;
        case "*":
          result = Number(this.prevValue) * Number(this.newValue);
          break;
      }
      this.prevValue = this.inputValue;
      this.inputValue = result.toString();
      this.result = result;
    },
    updateErrorMessage(message: string) {
      this.errorMessage = message;
    },
  },
});
