// OGGETTO ESERCIZIO
// Inserisci con due prompt l’età di due persone (persona1, persona2) e stampa a schermo il numero più grande.


// variabili
var agePersonOne;
var agePersonTwo;
var msg;
// Chiedere età persona1
agePersonOne = parseInt(prompt("Quanti anni hai?"));
// Chiedere età persona2
agePersonTwo = parseInt(prompt("Quanti anni hai?"));
// Condizioni per stampa
if(agePersonOne > agePersonTwo) {
    msg = agePersonOne;
} else if(agePersonOne < agePersonTwo) {
    msg = agePersonTwo;
} else {
    msg = agePersonOne = agePersonTwo;
}
// Stampa
document.getElementById('age').innerHTML = msg;
