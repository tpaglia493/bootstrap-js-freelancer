`Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.



Bonus:
Quando l’utente clicca sul pulsante “Send”, se il codice promozionale inserito non è valido, 
facciamo diventare quest’ultimo di colore rosso.
Se il codice inserito è valido, dopo aver calcolato il prezzo scontato, 
eliminare quel codice dall’elenco dei codici sconto disponibili, 
in modo che non sia più utilizzabile la volta successiva. 
(Ovviamente se la pagina viene riaggiornata, tutti i codici tornano disponibili)`


//---------------------PROGRAMMA PRINCIPALE-------------------------------

//DICHIARAZIONE DELLE VARIABILI
let backendServicePrice = 20.50;
const backendService = "Servizio Back-End";

let frontendServicePrice = 15.30;
const frontendService = "Servizio Front-end"

let projectAnalysisServicePrice = 33.60;
const projectAnalysisService = "Servizio di Project Analysis"

let discountCodesArray = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

//TODO: CREARE L'ARRAY DI PREZZI DA DARE COME ARGOMENTO ALLA FUNZIONE
backendServicePrice = fixedToTwoTransform(backendServicePrice);
frontendServicePrice = fixedToTwoTransform(frontendServicePrice);
projectAnalysisServicePrice = fixedToTwoTransform(projectAnalysisServicePrice);


//CREO E APPENDO ALL'ELEMENTO HTML select LA LISTA DI TIPI DI LAVORO CON IL LORO PREZZO
//TODO: CREARE ARRAY SERVIZI, ARRAY PREZZI, CICLO FOR PER CREARE E APPENDERE ELEMENTI ALLA LISTA
//TODO: RACCHIUDERE LA CREAZIONE DELLA LISTA IN UNA FUNZIONE

let listOption1 = document.createElement("option");
listOption1.value = ` ${backendServicePrice}`
listOption1.innerText = `${backendService}` + ` ${backendServicePrice} €`;

document.getElementById("work").appendChild(listOption1);

let listOption2 = document.createElement("option");
listOption2.value = ` ${frontendServicePrice}`
listOption2.innerText = `${frontendService}` + ` ${frontendServicePrice} €`;

document.getElementById("work").appendChild(listOption2);

let listOption3 = document.createElement("option");
listOption3.value = ` ${projectAnalysisServicePrice}`
listOption3.innerText = `${projectAnalysisService}` + ` ${projectAnalysisServicePrice} €`;

document.getElementById("work").appendChild(listOption3);

console.log(document.getElementById("work").value);

//TODO: INSERIRE LA CREAZIONE DEL PREZZO NELLA FUNZIONE ASSOCIATA AL TASTO SUBMIT
//CREAZIONE VARIABILI EQUAZIONE DEL PREZZO


let typeOfWork = document.getElementById("work").value;
let hoursRequested = document.getElementById("hours").value;
let discount = 1;

//VALIDAZIONE CODICE SCONTO

let userCodeInput = document.getElementById("discount").value;
console.log(userCodeInput);
if (discountCodesArray.includes(`${userCodeInput}`)) {
    discount = 0.75;
    discountCodesArray.splice(discountCodesArray.indexOf(userCodeInput));
} else {
    let alert = document.createElement("p");
    alert.innerText = "Il codice inserito non è valido";
    document.getElementById("alert").appendChild(alert)
    console.log("non è incluso")
}

//FORMULAZIONE DEL PREZZO
let price = typeOfWork * hoursRequested * discount;
price = fixedToTwoTransform(price);

document.getElementById("generate-price-button").addEventListener("click", displayPrice);
` 
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” 
(con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send`
function displayPrice() {
    let priceDisplay = document.createElement("p");
    priceDisplay.innerText = `Il prezzo per il lavoro richiesto è di ${price} €`;
    document.getElementById("price-display").appendChild(priceDisplay);
    console.log("almeno fa qualcosa")
}



//------------------------------------------------------------------------

//------------------------FUNZIONI----------------------------------------
//TODO: CREARE L'ARRAY DA DA DARE COME PARAMETRO ALLA FUNZIONE
//TOFIX: NON SALVA LE TRASFORMAZIONI
function fixedToTwoTransform(num) {
    num = num.toFixed(2);



    return num;

}

//TODO: RACCHIUDERE LA CREAZIONE DELLA LISTA DI OPZIONI DI LAVORO IN UNA FUNZIONE
function jobOptionListCreator() { };









//------------------------------------------------------------------------
