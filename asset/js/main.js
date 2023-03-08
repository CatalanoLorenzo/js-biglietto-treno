/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */



//chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const kilometersToGo = prompt ("Quanti chilometri vuoi percorrere ?");
const userAge = prompt ("quanti anni hai?");

console.log(kilometersToGo, userAge);

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
const costForKm = 0.21;
console.log(costForKm);
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
const costTot = costForKm * kilometersToGo;
console.log(costTot);
//va applicato uno sconto del 20% per i minorenni
let costTotWhitSald;
const saldMinors = 20;
const saldOver = 40;
if(userAge <= 18){
    costTotWhitSald = calcolaPerc(costTot,saldMinors);
//va applicato uno sconto del 40% per gli over 65.
    
}else (userAge >=65) {
    costTotWhitSald = calcolaPerc(costTot - saldOver);
}
console.log(costTotWhitSald);
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)