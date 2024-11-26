'use strict'

function showMessage() {
    let isSubmittedSuccessfully = true;

    if (isSubmittedSuccessfully) {
        // Show a success message
        errorBox.hidden = false;
        messageError.innerHTML = messageSuccess;
        return true; // Allow form submission
    } else {
        // Show an error message if form submission failed
        errorBox.hidden = false;
        messageError.innerHTML = messageError;
        return false; // Prevent form submission
    }
}