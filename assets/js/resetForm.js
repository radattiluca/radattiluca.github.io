'use strict'

const form = document.querySelector('#myForm');
const nameInput = form.elements.user_name;
const emailInput = form.elements.user_email;
const textArea = form.elements.message;

function resetMyForm(){
    nameInput.value = "";
    emailInput.value = "";
    textArea.value = "";  
}
