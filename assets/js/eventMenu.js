'use strict';

// script.js

// Prendiamo il pulsante e il menu
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const widthClient = document.documentElement.clientWidth;
const rowMenu = document.querySelector('.row-menu');


if(widthClient < 800){
    dropdownContent.style.minWidth = widthClient + "px";
};


// Aggiungiamo un evento click al pulsante per mostrare/nascondere il menu
dropdownBtn.addEventListener('click', function() {
    // Toggle della visibilità del menu
    rowMenu.style.alignItems = "end";
    setTimeout(() => {
        rowMenu.style.alignItems = "center";  
    }, 200);
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    
});

// Chiudiamo il menu se si clicca al di fuori
window.addEventListener('click', function(event) {
    if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});

//chiudiamo il menu se si clicca su un collegamento 
dropdownContent.addEventListener('click', function(event){
    console.log(event.target.tagName );
   if(event.target.tagName === 'A') {
    dropdownContent.style.display = 'none';
   }
});