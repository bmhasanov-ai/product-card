export default class Modal {
  constructor(modalId) {
    this.modalElement = document.getElementById(modalId);
    this.setEventListeners();
  }
  open() {
    this.modalElement.classList.add('modal-showed');
  }
  close() {
    this.modalElement.classList.remove('modal-showed');
  }
  isOpen() {
    return this.modalElement.classList.contains('modal-showed');
  }
  setEventListeners() {
  const closeButton = this.modalElement.querySelector('.modal__close-button');

    closeButton.addEventListener('click', () => {
      this.close();
    });
  }
}