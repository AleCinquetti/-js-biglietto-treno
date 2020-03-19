// OGGETTO ESERCIZIO
// Quanti minuti mancano alla fine dell’ora?

var minutes = new Date();
var missingMinutes;
missingMinutes = 60 - minutes.getMinutes();

document.getElementById("time").innerHTML = missingMinutes;
