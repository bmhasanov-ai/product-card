const subscriptionForm = document.querySelector('.subscription__form');
const input = document.querySelector('.subscription__form_input');
subscriptionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formForFooter = e.target
  const subscriptionFormData = new FormData(formForFooter)
  const subscriptionData = Object.fromEntries(subscriptionFormData.entries());
  console.log(subscriptionData);
});

const registrationButton = document.querySelector('#registration_button');
const modal = document.querySelector('.modal.overlay')
const modalForm = document.querySelector('.modal__form')
const modalCloseButton = document.querySelector('.modal__close-button')
const modalFormInput = document.querySelector('.modal__form_input')
const modalFormSubmitButton = document.querySelector('.modal__form_submit-button')
const modalPassword = document.querySelector('.password')
const modalPasswordRepeat = document.querySelector('.password-repeat')
registrationButton.addEventListener('click', () => {
  modal.classList.add('modal-showed');
});
modalCloseButton.addEventListener('click', () => {
  modal.classList.remove('modal-showed')
});

let user;

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!modalForm.checkValidity()) {
    modalForm.reportValidity();
    return;
  }

  if (modalPassword.value !== modalPasswordRepeat.value) {
    alert('Пароли не совпадают');
    return;
  }

  const formData = new FormData(modalForm);
  user = { ...Object.fromEntries(formData.entries()), createdOn: new Date() };

  console.log(user);
  modal.classList.remove('modal-showed');


});