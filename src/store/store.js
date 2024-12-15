// store.js
import { makeAutoObservable } from "mobx";

class Store {
  error = true;
  code = `/* 
filterEvenNumbers([1, 2, 3, 4, 5, 6]) 
Возвращает: [2, 4, 6]

filterEvenNumbers([11, 13, 15]) 
Возвращает: []

Возвращает: [0, -2, -4, 8]
*/

function filterEvenNumbers(arr) {
    /* Your code */ 
    return arr
}
console.log(filterEvenNumbers([11, 13, 15]) ) 

`;
  lang = "javascript";
  message = ``;
  constructor() {
    makeAutoObservable(this);
  }

  setError(state) {
    this.error = state;
  }
  setCode(code) {
    this.code = code;
  }

  setMessage(message) {
    this.message = message;
  }
  setLang(lang) {
    this.lang = lang;
  }
}

const store = new Store();
export default store;
