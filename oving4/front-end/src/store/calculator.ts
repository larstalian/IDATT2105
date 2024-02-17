  import { defineStore } from "pinia";
  import axios from 'axios';
  
  interface State {
    logList: string[];
    inputValue: string;
    prevValue: string;
    prevPrevValue: string;
    operator: string;
    newValue: string;
    lastAnswer: string;
    errorMessage: string;
    result: number;
  }

  const api = axios.create({
    baseURL: 'http://localhost:8080',
  });

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
    prevPrevValue: "",
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
        this.prevPrevValue +
        " " +
        this.operator +
        " " +
        this.prevValue +
        " = " +
        this.result.toString();
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

       this.calculateWithApi();
    },
    async calculateWithApi() {
      try {
        const response = await api.post('/api/equation/solve', {
          number1: Number(this.prevValue),
          number2: Number(this.newValue),
          operator: this.operator,
        });

        const result = response.data.result;
        this.prevPrevValue = this.prevValue;
        this.prevValue = this.inputValue;
        this.inputValue = result.toString();
        this.result = result;
        this.addToLog();
      } catch (error) {
        console.error(error);
        this.errorMessage = (error as Error).message;
      }
    },
    updateErrorMessage(message: string) {
      this.errorMessage = message;
    },
  },
});