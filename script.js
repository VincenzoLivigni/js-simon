/*
Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
*/


// Visualizzare in pagina 5 numeri casuali (Math.random)

// Seleziono i paragrafi per salvare i numeri
const numeri_casuali = [
  document.getElementById("numero1"),
  document.getElementById("numero2"),
  document.getElementById("numero3"),
  document.getElementById("numero4"),
  document.getElementById("numero5")
];

// creo un array vuoto per salvare i numeri randomici
const salva_numeri = [];
console.log(salva_numeri);


// ciclo for 
for (let i = 0; i < 5; i++) {

    // genero numeri random
    let random = Math.floor(Math.random() * 20) +1;
    // rendo visibili in pagina i numeri random
    numeri_casuali[i].textContent = random;
    // salvo i numeri nella variabile vuota
    salva_numeri.push(random);

    console.log(salva_numeri);
}

// inserisco timer, numeri e input in pagina
const timerEl = document.querySelector(".timer");
const contenitoreNumeri = document.getElementById("numeri");
const contenitoreInput = document.getElementById("inputs");

let tempo = 5;

console.log(timerEl);
console.log(tempo);
// console.log(tempo);

// estraggo il 30 in pagina dentro il timerEl
timerEl.innerHTML = tempo;

// avvio l'intervallo che deve scorrere da 30 a 0s
let clock = setInterval(() => {
    
// se la variabile tempo === 0
if (tempo === 0) {
    // - interrompo il contatore
    clearInterval(clock);
    console.log("ferma il counter");
        // stampo "Il gioco ha inizio"
        timerEl.innerHTML = "Il gioco ha inizio!";
        // nascondo numeri quando il timer si azzera
        contenitoreNumeri.style.display = "none";
        // compaiono gli input quando il timer si azzera
        contenitoreInput.style.display = "block"; // mostra input
    } else {
    timerEl.innerHTML = tempo;
    console.log("mostro il decremento"); 
}

tempo--;

}, 1000)

// seleziono il pulsante e il paragrafo del risultato
const risultatoEl = document.getElementById("risultato");
const numeriIndovinati = document.getElementById("numeri_indovinati");

// seleziono gli input
const inputEl = contenitoreInput.querySelectorAll("input")

// evento clic del bottone

// prendo i numeri inseriti dall'utente
// pusho i numeri in un array vuoto

// creo un array per i numeri corretti indovinati
// li confronto 

// Mostro il risultato finale

