// Array con i codici  promozionali
const promoCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

//definisco una variabile con le ore di lavoro
const oreLavoro = 10; 
//Creo un oggetto con all'interno i prezzi per ogni lavoro
const lavoro = {
    backend: 20.50,
    frontend: 15.30,
    analisi: 33.60
};

// recupero gli elementi dal DOM
const jobsElement = document.getElementById('selectJobs');
let promoElement = document.getElementById('promo');
const formElement = document.getElementById ('form');
let priceSectionElement = document.getElementById('priceSection');
let name = document.getElementById('name');
let surname = document.getElementById ('surname');
let email = document.getElementById ('email');
let textArea = document.getElementById ('Textarea');

//ascoltiamo un l'evento "submit" nel form. Quando viene inviato compilato ed inviato il formo verrà eseguita la funzione.
formElement.addEventListener("submit", function(event){
    event.preventDefault(); //annullo il comportamento di default del form

    let nameValue = name.value;
    let surnameValue = surname.value;
    let emailValue = email.value;
    let textAreaValue = textArea.value; 
    

    //L'utente seleziona il tipo di lavoro, e viene assegnato alla variabile "tipoLavoro"
    let tipoLavoro = jobsElement.value;

    //prendiamo il prezzo orario per ogni lavoro e l'assegnamo alla variabile "prezzoOra"
    let prezzoOra = lavoro[tipoLavoro];
    let prezzoTotale = prezzoOra * oreLavoro;

    //L'utente inserisce un codice sconto, e viene assegnato alla variabile "sconto"
    let sconto = promoElement.value;

    //SE il contenuto della variabile "sconto" è incluso pure nell'array "promoCode" si applica uno sconto del 25%
    if(promoCode.includes(sconto)){
        prezzoTotale = prezzoTotale * 0.25;  //sconto del 25% moltiplicando il prezzo totale per 0,25
    }else { //ALTRIMENTI se il codice non è incluso l'utente viene avvisato, e non viene applicato lo sconto del 25%
        alert("Il codice promozionale non corretto, o non inserito. Al prezzo finale non sarà aggiunto alcuno sconto.")
    }

    //il prezzoTotale viene stampato con 2 cifre decimali
    prezzoTotale.toFixed(2);

    //il risultato viene stampato nella pagina HTML
    priceSectionElement.textContent = "€ " + prezzoTotale;

    //Stampo le informazione del form nella console
    console.log("Chiede un preventivo: " + "NOME:" + " "+ nameValue + " " + "COGNOME:" +" "+ surnameValue + " " + "EMAIL:" + " " + emailValue + "per il ruolo di: " + tipoLavoro);
    console.log("info aggiuntive: " + textAreaValue);
})
