// Array con i codici  promozionali
const promoCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

//Richiamo gli elementi dal DOM
const jobsElement = document.getElementById('selectJobs').value;
let promoElement = document.getElementById('promo').value;
const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
let checkPreventivo = document.getElementById("check");

const oreLavoro = 10;
const lavoro = {
    backend: 20.50,
    frontend: 15.30,
    analisi: 33.60
}
let prezzoOra
let prezzoTotale = 0;

function preventivo(){
    let sconto = 0;
    //SE lavoro è contenuto in jobsElement ed è diverso da 0, assegna quel valore alla variabile prezzoOra
if(lavoro[jobsElement] !== 0){
    prezzoOra = lavoro[jobsElement];
}else{ //ALTRIMENTI alla variabile prezzoOra verrà assegnato un valore pari a 0
    prezzoOra = 0;
    alert("Codice non corretto, al prezzo finale non verrà applicato nessuno sconto.")
}

let prezzoFinale = prezzoOra * oreLavoro;

if(promoCode.includes(promoElement)) {
    sconto = 0.25;
}

//calcolo del prezzo finale sottraendo dal prezzo totale lo sconto
let prezzoSconto = prezzoTotale - (prezzoTotale * sconto);

//stampiamo lo sconto con 2 cifre decimali
const prezzoSconto2 = prezzoSconto.toFixed(2);


//stampo il risultato nella pagina HTML
checkPreventivo.innerHTML = prezzoSconto2;
}
//quando il bottone verrà cliccato verra avviata la funzione
const submitElement = document.getElementById("submit");
submitElement.addEventListener("click", function(event){
    event.preventDefault(); //annula il comportamento predefinito del form
    preventivo(); //invoco la funzione
    console.log("Chiede un preventivo: " + name + " " + surname + " " + email + " ");
})


