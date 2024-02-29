function showMessage() {
    var isSubmittedSuccessfully = true;

    if (isSubmittedSuccessfully) {
        // Show a success message
        alert("Form submitted successfully!");
        return true; // Allow form submission
    } else {
        // Show an error message if form submission failed
        alert("Form submission failed!");
        return false; // Prevent form submission
    }
}