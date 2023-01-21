//----Калькулятор----------------

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const c = document.querySelector("#result");

c.textContent = "";
input1.value = "";
input2.value = "";

class Calc {
  constructor() {}

  static sum(a, b) {
    let result = +a + +b;
    c.textContent = `Сумма чисел равна: ${result}`;
    if (result == "") {
      c.textContent = `Числа не введены!`;
    }
    //return result;
  }

  static sub(a, b) {
    const result = a - b;
    c.textContent = `Разность чисел равна: ${result}`;
    if (result == "") {
      c.textContent = `Числа не введены!`;
    }
  }
  static mult(a, b) {
    const result = a * b;
    c.textContent = `Произведение чисел равно: ${result}`;
  }
  static quot(a, b) {
    const result = a / b;
    if (b > 0 || b < 0) {
      c.textContent = `Частное равно: ${result}`;
    }
    if (b == 0) {
      c.textContent = `На ноль делить нельзя!`;
    }
    if (a == "" && b == "") {
      c.textContent = `Числа не введены!`;
    }
  }
  static clear(a, b) {
    a.value = "";
    b.value = "";
    c.textContent = "";
  }
}

//console.log(Calc.sum(input1.value, input2.value));
function getSum() {
  Calc.sum(input1.value, input2.value);
}

function getSub() {
  Calc.sub(input1.value, input2.value);
}

function getMult() {
  Calc.mult(input1.value, input2.value);
}

function getQuot() {
  Calc.quot(input1.value, input2.value);
}

function Clear() {
  Calc.clear(input1, input2);
}

//---слайдер

let index = 5;
function NextImg() {
  index++;
  document.querySelector(".image").src = `./images/${index}.JPG`;
}

function PreviousImg() {
  index--;
  document.querySelector(".image").src = `./images/${index}.JPG`;
}
