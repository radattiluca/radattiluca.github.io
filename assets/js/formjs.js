'use strict';

window.onload = function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('default_service', 'template_bnovvph', this)
            .then(() => {
                console.log('SUCCESS!');
                resetMyForm();
                
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}