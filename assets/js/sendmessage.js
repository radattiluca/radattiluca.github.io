'use strict'

function showMessage() {
    let isSubmittedSuccessfully = true;

    if (isSubmittedSuccessfully) {
        // Show a success message
        alert("Thank you for contacting me!");
        return true; // Allow form submission
    } else {
        // Show an error message if form submission failed
        alert("Oops there must be a problem, try again!");
        return false; // Prevent form submission
    }
}