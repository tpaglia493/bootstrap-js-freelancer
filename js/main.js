`Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€ l’ora
se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€ l’ora
se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60€
L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
- YHDNU32
- JANJC63
- PWKCN25
- SJDPO96
- POCIE24
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. 
Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido 
e il prezzo finale viene calcolato senza applicare sconti. 
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” 
(con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send

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
backendServicePrice =  fixedToTwoTransform(backendServicePrice);
frontendServicePrice = fixedToTwoTransform(frontendServicePrice);
projectAnalysisServicePrice = fixedToTwoTransform(projectAnalysisServicePrice);


//CREO E APPENDO ALL'ELEMENTO HTML select LA LISTA DI TIPI DI LAVORO CON IL LORO PREZZO
//TODO: CREARE ARRAY SERVIZI, ARRAY PREZZI, CICLO FOR PER CREARE E APPENDERE ELEMENTI ALLA LISTA

let listOption1 = document.createElement("option");
listOption1.innerText=`${backendService}`+ ` ${backendServicePrice} €`; 

document.getElementById("work").appendChild(listOption1);

let listOption2 = document.createElement("option");
listOption2.innerText=`${frontendService}`+ ` ${frontendServicePrice} €`; 

document.getElementById("work").appendChild(listOption2);

let listOption3 = document.createElement("option");
listOption3.innerText=`${projectAnalysisService}`+ ` ${projectAnalysisServicePrice} €`; 

document.getElementById("work").appendChild(listOption3);









//------------------------------------------------------------------------

//------------------------FUNZIONI----------------------------------------
//TODO: CREARE L'ARRAY DA DA DARE COME PARAMETRO ALLA FUNZIONE
//TOFIX: NON SALVA LE TRASFORMAZIONI
function fixedToTwoTransform(num){
    num = num.toFixed(2);
  
    

    return num;
  
} 

//TODO: RACCHIUDERE LA CREAZIONE DELLA LISTA DI OPZIONI DI LAVORO IN UNA FUNZIONE
function jobOptionListCreator(){};









//------------------------------------------------------------------------
