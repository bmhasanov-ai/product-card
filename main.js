import "./homework-7.js"
import "./homework-8.js"
import "./homework-9.js"
import "./homework-10.js"
import "./homework-12.js"
import Modal from "./Modal.js"
import ClassForm from "./Form.js"

const productCards = document.querySelectorAll('.product');
const changeAllCardsColorButton = document.querySelector('#change-cards-color-button');
const seaColorHash = '#04a285';
const sunColorHash = '#da8d2f';

changeAllCardsColorButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = seaColorHash)
})

const oneProductCard = document.querySelector('.product');
const changeCardColorButton = document.querySelector('#change-card-color-button');

changeCardColorButton.addEventListener('click', () => {
  oneProductCard.style.backgroundColor = sunColorHash;
})

const openGooglePage = document.querySelector('#google-button')

openGooglePage.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы хотите открыть гугл?');

  if (answer === true) {
    window.open('https://www.google.com/')
  } else {
    return;
  }
}


const openConsoleButton = document.querySelector('#open-console-button')

openConsoleButton.addEventListener('click', () => openConsole('ДЗ №6'));

function openConsole(message) {
  alert('Всё готово!');
  console.log(message);
}

const titleText = document.querySelector('.catalog__title');

titleText.addEventListener('mouseover', () => {
  console.log(titleText.textContent);
});

const colorfulButton = document.querySelector('#colorful-button');

colorfulButton.addEventListener('click', () => {
  colorfulButton.classList.toggle('sun')
});

const registrationModal = new Modal('registration-modal');
const registrationButton = document.querySelector('#registration_button');

registrationButton.addEventListener('click', () => {
  registrationModal.open();
});

const registrationForm = new ClassForm('registration-form');

let user;

registrationForm.formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (!registrationForm.isValid()) {
    registrationForm.formElement.reportValidity();
    return;
  }

  const formValues = registrationForm.getValues();

  if (formValues.password !== formValues.passwordRepeat) {
    alert('Пароли не совпадают');
    return;
  }

  user = { ...formValues, createdOn: new Date() };

  console.log(user);

  registrationModal.close()
});


const subscriptionForm = new ClassForm('subscription-form');

subscriptionForm.formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(subscriptionForm.getValues());
});