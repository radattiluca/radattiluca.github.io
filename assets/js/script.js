'use strict'

// Selezioniamo tutti gli elementi <p>
const containerP = document.querySelector('.row-text-profile');
const iconSpan = containerP.querySelectorAll('span');
console.log(containerP);
console.log(iconSpan);

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

// quando si vede si sovrappone alle altre grid
const overFlowCv = document.querySelector('.row-arrows-more');
const rotateArrows = document.querySelector('#svgArrows');
const showCv = document.querySelector('.grid-cv');
const upOverflow = document.querySelector('#btn-down');

upOverflow.id = "btn-down";
console.log(upOverflow.id);


    overFlowCv.addEventListener('click', function(event) {

        if (event.target.tagName === 'BUTTON') { 
            if(event.target.id === "btn-down"){
              showCv.style.overflow = "visible";
              showCv.style.height = "auto";
              rotateArrows.style.rotate = "180deg";
              upOverflow.id = "btn-up";
              console.log(upOverflow.id);
            }
        }else{
            return;
            }
    });

    document.addEventListener('click', function(event) {
        if(event.target.tagName === 'BUTTON') { 
            if(event.target.id === "btn-up"){
                showCv.style.overflow = "hidden";
                showCv.style.height = "100px";
                upOverflow.id = "btn-down";
                rotateArrows.style.rotate = "0deg";
                console.log(upOverflow.id);
            }
        }
    });