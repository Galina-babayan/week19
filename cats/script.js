// CATS

let nameInfo = document.querySelector("#nameInfo");
let form = document.querySelector("form");

class Cat {
  constructor(data) {
    this.name = data.get("name");
    this.email = data.get("email");
    this.password = data.get("password");
    this.phone = data.get("phone");
    this.gender = data.get("gender");
    this.pet = data.get("pet");
    this.age = data.get("age");
    this.message = data.get("message");
    this.cat = data.get("cat");
    this.color = data.get("color");
    this.agreement = data.get("agreement");

  }

  print() {
    let node = document.createElement("div");
    node.classList.add("comment");

    let nameNode = document.createElement("div");
    nameNode.classList.add("comment__text");
    nameNode.textContent = `Имя: ${this.name}`;
    console.log(nameNode.textContent);

    let emailNode = document.createElement("div");
    emailNode.classList.add("comment__text");
    emailNode.textContent = `Email: ${this.email}`;
    console.log(emailNode.textContent);

    let passwordNode = document.createElement("div");
    passwordNode.classList.add("comment__text");
    passwordNode.textContent = `Пароль: ${this.password}`;
    console.log(passwordNode.textContent);

    let phoneNode = document.createElement("div");
    phoneNode.classList.add("comment__text");
    phoneNode.textContent = `Пароль: ${this.phone}`;
    console.log(phoneNode.textContent);

    let genderNode = document.createElement("div");
    genderNode.classList.add("comment__text");
    genderNode.textContent = `Пол: ${this.gender}`;
    console.log(genderNode.textContent);

    let petNode = document.createElement("div");
    petNode.classList.add("comment__text");
    petNode.textContent = `Есть ли у вас питомец? ${this.pet}`;
    console.log(petNode.textContent);

    let ageNode = document.createElement("div");
    ageNode.classList.add("comment__text");
    ageNode.textContent = `Возраст питомца: ${this.age}`;
    console.log(ageNode.textContent);

    let messageNode = document.createElement("div");
    messageNode.classList.add("comment__text");
    messageNode.textContent = `Что вас интересует? ${this.message}`;
    console.log(messageNode.textContent);

    let catNode = document.createElement("div");
    catNode.classList.add("comment__text");
    catNode.textContent = `Какая порода вам нравится? ${this.cat}`;
    console.log(catNode.textContent);

    let agreementNode = document.createElement("div");
    agreementNode.classList.add("comment__text");
    agreementNode.textContent = `Подтвердите согласие с политикой конфиденциальности: ${this.agreement}`;
    console.log(agreementNode.textContent);

    node.append(nameNode);
    node.append(emailNode);
    node.append(passwordNode);
    node.append(phoneNode);
    node.append(genderNode);
    node.append(petNode);
    node.append(ageNode);
    node.append(messageNode);
    node.append(catNode);
    node.append(agreementNode);
    nameInfo.append(node);
    console.log(this);
  }
}

// FormData - это объект, представляющий данные HTML формы.
// конструктор: let formData = new FormData([form]);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(form);
  
  // деструктуризация объекта:
  let catPet = new Cat(data);

  catPet.print();
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
