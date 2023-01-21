// ВАЛИДАЦИЯ ФОРМЫ: STATIC

let error = document.querySelector("#errorInfo");
let fun = document.querySelector("#funInfo");
let nameInfo = document.querySelector("#hello");
let hello = document.querySelector("#formName");
let summaryError;

let patternName = /^[А-ЯЁ|A-Z][а-яё|a-z]*$/;
let patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
let patternLogin = /^[a-z0-9_-]{5,16}$/i;
let patternPassword =
  /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/i;
let patternPhone = /^8[0-9]{10}$/;

let errors = [];
console.log(errors);
let arrErrors = [
  "Укажите ваше имя!",
  "Имя должно начинаться с большой буквы!",
  "Укажите ваш email!",
  "Ваш адрес электронной почты введен неверно!",
  "Укажите ваш логин!",
  "Логин может содержать только буквы и цифры, минимум 5 символов!",
  "Укажите ваш пароль!",
  "Пароль должен содержать не менее 8 символов, включая латинские буквы разных регитсров, символы и цифры!",
  "Пароль повторно не введен!",
  "Пароли должны совпадать!",
  "Укажите ваш телефон!",
  "Номер телефона должен содержать 11 цифр, первая цифра 8!",
  "Пожалуйста, подтвердите согласие!",
  "Пожалуйста, выберите пол!",
];

let form = document.querySelector("form");
let data = new FormData(form);

class Validation {
  constructor() {}

  static Name(usName) {
    if (usName.match(patternName)) {
    } else if (usName == "") {
      errors.push("Укажите ваше имя!");
    } else {
      errors.push("Имя должно начинаться с большой буквы!");
    }
    summaryError = errors.join(". <br>");
  }

  static Email(usEmail) {
    if (usEmail.match(patternEmail)) {
    } else if (usEmail == "") {
      errors.push(arrErrors[2]);
    } else {
      errors.push(arrErrors[3]);
    }
    summaryError = errors.join(". <br>");
  }

  static Login(usLogin) {
    if (usLogin.match(patternLogin)) {
    } else if (usLogin == "") {
      errors.push(arrErrors[4]);
    } else {
      errors.push(arrErrors[5]);
    }
    summaryError = errors.join(". <br>");
  }

  static Password(usPassword) {
    if (usPassword.match(patternPassword)) {
    } else if (usPassword == "") {
      errors.push(arrErrors[6]);
    } else {
      errors.push(arrErrors[7]);
    }
    summaryError = errors.join(". <br>");
  }

  static PasswordTwo(usPasswordTwo, usPassword) {
    if (usPasswordTwo == usPassword) {
    } else if (usPasswordTwo == "") {
      errors.push(arrErrors[8]);
    } else {
      errors.push(arrErrors[9]);
    }
    summaryError = errors.join(". <br>");
  }

  static Phone(usPhone) {
    if (usPhone.match(patternPhone)) {
    } else if (usPhone == "") {
      errors.push(arrErrors[10]);
    } else {
      errors.push(arrErrors[11]);
    }
    summaryError = errors.join(". <br>");
  }

  static Сheckbox(usCheckbox) {
    if (usCheckbox == null) {
      errors.push(arrErrors[12]);
    }
    summaryError = errors.join(". <br>");
  }

  static Select(usGender) {
    if (usGender == "unknown") {
      errors.push(arrErrors[13]);
    }
    summaryError = errors.join(". <br>");
  }

  static Radio(usHaveNot) {
    fun.innerHTML = "";
    if (usHaveNot == "no") {
      fun.innerHTML += `Вы не пожалеете!<br>`;
    }
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  errors = [];
  error.textContent == "";
  summaryError == "";
  fun.innerHTML == "";
  nameInfo.innerHTML == "";
  let data = new FormData(form);

  Validation.Name(data.get("name"));
  Validation.Login(data.get("login"));
  Validation.Email(data.get("email"));
  Validation.Password(data.get("password"));
  Validation.PasswordTwo(data.get("passwordTwo"), data.get("password"));
  Validation.Phone(data.get("phone"));
  Validation.Сheckbox(data.get("agreement"));
  Validation.Select(data.get("gender"));
  Validation.Radio(data.get("have"));
  if (errors.length == 0) {
    nameInfo.innerHTML = `${data.get("name")}, добро пожаловать на сайт!`;
  }

  error.innerHTML = summaryError;
});

//----события-меняем цвет фона------

let formColored = document.querySelector("#maincolor");
let shadeOption = document.querySelector("#shadeOption");
shadeOption.value = "";

function select() {
  formColored.classList.remove("colored1");
  formColored.classList.remove("colored2");
  formColored.classList.remove("colored3");
  switch (shadeOption.value) {
    case "green":
      formColored.classList.add("colored1");
      break;
    case "orange":
      formColored.classList.add("colored2");
      break;
    case "red":
      formColored.classList.add("colored3");
      break;
  }
}

//--- поменять фон инпута при наведении: (наверно, это можно было как-то упорядочить, но так и не смогла)

function colorMeP() {
  document.querySelector("#formPassword").style.background = "#9dae94";
}
function colorMeBackP() {
  document.querySelector("#formPassword").style.background = "white";
}

function colorMeN() {
  document.querySelector("#formName").style.background = "#9dae94";
}
function colorMeBackN() {
  document.querySelector("#formName").style.background = "white";
}

function colorMeE() {
  document.querySelector("#formEmail").style.background = "#9dae94";
}
function colorMeBackE() {
  document.querySelector("#formEmail").style.background = "white";
}

//-- выбор картинки кота---------------------

function show() {
  switch (document.querySelector("#breed").value) {
    case "oriental":
      document.querySelector("#catImage").src = "./images/cats/oriental1.jpg";
      break;
    case "maine coon":
      document.querySelector("#catImage").src = "./images/cats/maine coon.jpg";
      break;
    case "bengal":
      document.querySelector("#catImage").src = "./images/cats/bengal.jpeg";
      break;
    case "siamese":
      document.querySelector("#catImage").src = "./images/cats/siamese.jpg";
      break;
    case "british shorthair":
      document.querySelector("#catImage").src =
        "./images/cats/british shorthair.jpg";
      break;
    case "scottish":
      document.querySelector("#catImage").src = "./images/cats/scottish.png";
      break;
    case "russian blue":
      document.querySelector("#catImage").src =
        "./images/cats/russian blue.jpeg";
      break;
    case "persian":
      document.querySelector("#catImage").src = "./images/cats/persian.jpg";
      break;
    case "nobreed":
      document.querySelector("#catImage").src = "./images/cats/nobreed.jpg";
      break;
  }
}

//-----------поменять картинку по клику-верхняя-------------------------------------------------
let control = 0;
let mittImage = document.getElementById("mitt_image1");
function changeMe() {
  if (control == 0) {
    // let mittImage = document.getElementById("mitt_image1");
    mittImage.src = "./images/cats/main-photo.jpg";
    control = 1;
  } else {
    mittImage.src = "./images/cats/main-photo_2.jpg";
    control = 0;
  }
}
