// OGGETTO ESERCIZIO:
// ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km),
// ma va applicato uno sconto del 20% per i minorenni
// e del 40% per gli over 65.

// variabili
var distanceinKm;
var userAge;
var ticketPrice;
var newPrice;

// chiedere a utente km da percorrere
distanceinKm = parseInt(prompt("Quanti km vuoi percorrere?"));
// chiedere ad utente età
userAge = parseInt(prompt("Quanti anni hai?"));
// calcolare prezzo viaggio
ticketPrice = 0.21 * distanceinKm;
console.log(ticketPrice);

// calcolo prezzo viaggio se under 18
if (userAge < 18) {
    newPrice = ticketPrice - (ticketPrice * 0.2);
// calcolo prezzo viaggio se over 65
} else if (userAge > 65) {
    newPrice = ticketPrice - (ticketPrice * 0.4);
} else {
    newPrice = ticketPrice;
}

document.getElementById('ticket').innerHTML = "Il prezzo da pagare per la corsa scelta è: " + newPrice + " Euro";
