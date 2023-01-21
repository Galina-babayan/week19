//----Калькулятор----------------

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const div1 = document.querySelector("#result");

div1.textContent = "";
input1.value = "";
input2.value = "";

class Calc {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    let result = +this.a + +this.b;
    this.c.textContent = `Сумма чисел равна: ${result}`;
    if (result == "") {
      this.c.textContent = `Числа не введены!`;
    }
    // return result;
  }

  sub() {
    const result = this.a - this.b;
    this.c.textContent = `Разность чисел равна: ${result}`;
    if (result == "") {
      this.c.textContent = `Числа не введены!`;
    }
  }
  mult() {
    const result = this.a * this.b;
    this.c.textContent = `Произведение чисел равно: ${result}`;
    if (result == "") {
      this.c.textContent = `Числа не введены!`;
    }
  }
  quot() {
    const result = this.a / this.b;
    if (this.b > 0 || this.b < 0) {
      this.c.textContent = `Частное равно: ${result}`;
    }
    if (this.b == 0) {
      this.c.textContent = `На ноль делить нельзя!`;
    }
    if (this.a == "" && this.b == "") {
      this.c.textContent = `Числа не введены!`;
    }
  }

  // clear() {
  //   this.a = "";
  //   this.b = "";
  //   this.c.textContent = "";
  // }
}

function getSum() {
  let result = new Calc(input1.value, input2.value, div1);
  result.sum();
}

function getSub() {
  let result = new Calc(input1.value, input2.value, div1);
  result.sub();
}

function getMult() {
  let result = new Calc(input1.value, input2.value, div1);
  result.mult();
}

function getQuot() {
  let result = new Calc(input1.value, input2.value, div1);
  result.quot();
}

function Clear() {
  div1.textContent = "";
  input1.value = "";
  input2.value = "";
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
