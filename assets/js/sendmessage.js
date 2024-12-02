'use strict'
const errorBox = document.querySelector('#boxError'); // message container
const messageSend = document.querySelector("#messageSend"); // div for message
errorBox.hidden = true; //we set the error div to invisible

let messageSuccess = "Thank you for contacting me!";
let messageFailure = "Oops there must be a problem, try again!";

function showMessage() {
    let isSubmittedSuccessfully = true;

    if (isSubmittedSuccessfully) {
        // Show a success message
        errorBox.hidden = false;
        messageSend.textContent = messageSuccess;
        return true; // Allow form submission
    } else {
        // Show an error message if form submission failed
        errorBox.hidden = false;
        messageSend.textContent = messageFailure;
        return false; // Prevent form submission
    }
}