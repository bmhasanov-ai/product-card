export default class Form{
  constructor(formId){
    this.formElement = document.getElementById(formId);
  }

  getValues(){
    const formData = new FormData(this.formElement);
    const formValues = Object.fromEntries(formData.entries());
    return formValues;
  }

  isValid(){
    return this.formElement.checkValidity();
  }

  reset(){
    this.formElement.reset();
  }

}

