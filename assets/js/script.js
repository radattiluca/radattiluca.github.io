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