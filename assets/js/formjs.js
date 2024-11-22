'use strict';

const form =  document.querySelector('#form');

        document.onload = function() {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                emailjs.sendForm('default_service', 'template_bnovvph', this)
                    .then(() => {
                        console.log('SUCCESS!');
                        this.reset();
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }
