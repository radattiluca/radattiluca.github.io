'use strict';

// script.js

// Prendiamo il pulsante e il menu
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const widthClient = document.documentElement.clientWidth;

if(widthClient < 800){
    dropdownContent.style.minWidth = widthClient + "px";
};


// Aggiungiamo un evento click al pulsante per mostrare/nascondere il menu
dropdownBtn.addEventListener('click', function() {
    // Toggle della visibilità del menu
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    
});

// Chiudiamo il menu se si clicca al di fuori
window.addEventListener('click', function(event) {
    if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});
