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
const showCv = document.querySelector('.grid-cv');

    overFlowCv.addEventListener('click', function(event) {
        console.log(event.target.tagName);
        if (event.target.tagName === 'BUTTON') { 
            if(event.target.id === "btn-down"){
              showCv.style.overflow = "visible";  //bisogna mettergli l'onfocus quando si preme da un'altra parte
            }
        }else{
            return;
            }
        });
