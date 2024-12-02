'use strict';

// Selezioniamo tutti gli elementi <p>
const containerP = document.querySelector('.row-text-profile');
const iconSpan = containerP.querySelectorAll('span');
//console.log(containerP);
//console.log(iconSpan);

// Iteriamo su tutti gli elementi <p>
iconSpan.forEach((span, index) => {
    // Se l'indice è pari (0, 2, 4, ...), applica un cambiamento
    if (index % 2 === 0) {
        span.style.justifyContent = 'end';  // Modifica il colore del testo per i paragrafi con indice pari
        // Puoi aggiungere altre modifiche qui
    } else {
        span.style.justifyContent = 'start'; // Modifica il colore del testo per i paragrafi con indice dispari
    }
});

// Selezioniamo tutti gli elementi <p>
const paragrafi = containerP.querySelectorAll('p');

// Iteriamo su tutti gli elementi <p>
paragrafi.forEach((paragrafo, index) => {
    // Se l'indice è pari (0, 2, 4, ...), applica un cambiamento
    if (index % 2 === 0) {
        paragrafo.style.textAlign = 'left';  // Modifica il colore del testo per i paragrafi con indice pari
        // Puoi aggiungere altre modifiche qui
    } else {
        paragrafo.style.textAlign = 'right'; // Modifica il colore del testo per i paragrafi con indice dispari
    }
});


const rotateArrows = document.querySelector('#svgArrows');
const showCv = document.querySelector('.grid-cv');
const downOverflow = document.querySelector('#btn-down');

let isFirstClick = true; // Variabile che tiene traccia del comportamento del pulsante


    downOverflow.addEventListener('click', function(event) {
        // qui posso creare una nuova classe e andarla semplicemente a cambiare quando avviene il click
        if (isFirstClick) {
        // Primo comportamento
            showCv.style.overflow = "visible";
            showCv.style.height = "auto";
            rotateArrows.style.rotate = "180deg";
            isFirstClick = false;  // Cambiamo lo stato per il prossimo clic
        } else{
            showCv.style.overflow = "hidden";
            showCv.style.height = "115px";
            rotateArrows.style.rotate = "0deg";
            isFirstClick = true;  // Cambiamo lo stato per il prossimo clic
        }
        
    });

//evento per far chiudere il messaggio
const closeMessage = document.querySelector('#close');

closeMessage.addEventListener('click', function(event){
    errorBox.hidden = true; //we set the error div to invisible
});

    
