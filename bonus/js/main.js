
//---------------------PROGRAMMA PRINCIPALE-------------------------------

//DICHIARAZIONE DELLE VARIABILI
let backendServicePrice = 20.50;
const backendService = "Servizio Back-End";
addToTypeOfWorkList(backendService, backendServicePrice);

let frontendServicePrice = 15.30;
const frontendService = "Servizio Front-end";
addToTypeOfWorkList(frontendService, frontendServicePrice);

let projectAnalysisServicePrice = 33.60;
const projectAnalysisService = "Servizio di Project Analysis";
addToTypeOfWorkList(projectAnalysisService, projectAnalysisServicePrice)


let discountCodesArray = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

document.getElementById("generate-price-button").addEventListener("click", calculateAndDisplayPrice);


//------------------------------------------------------------------------

//------------------------FUNZIONI----------------------------------------

//FUNZIONE CHE FORMULA E STAMPA A SCHERMO IL PREZZO
function calculateAndDisplayPrice() {
    //CREAZIONE VARIABILI EQUAZIONE DEL PREZZO
    let typeOfWork = document.getElementById("work").value;
    let hoursRequested = document.getElementById("hours").value;
    let discount = 1;

    //VALIDAZIONE CODICE SCONTO
    let userCodeInput = document.getElementById("discount").value;
    document.getElementById("alert-div").innerHTML = "";
    if (discountCodesArray.includes(`${userCodeInput}`)) {
        discount = 0.75;
        discountCodesArray.splice(discountCodesArray.indexOf(userCodeInput), 1);
    } else if (userCodeInput != "") {
        let alert = document.createElement("p");
        alert.innerText = "Il codice inserito non è valido";
        document.getElementById("alert-div").append(alert);
    }
    //FORMULAZIONE DEL PREZZO
    let price = typeOfWork * hoursRequested * discount;
    price = price.toFixed(2)


    //STAMPA A SCHERMO DEL PREZZO
    document.getElementById("price-display").innerHTML = "";
    let priceDisplay = document.createElement("p");
    priceDisplay.innerText = `Il prezzo per il lavoro richiesto è di ${price} €`;
    document.getElementById("price-display").appendChild(priceDisplay);
}


//CREAZIONE DELLA LISTA DI OPZIONI DI LAVORO
function addToTypeOfWorkList(serviceName, servicePrice) {

    let listOption = document.createElement("option");
    servicePrice = servicePrice.toFixed(2);
    listOption.value = ` ${servicePrice}`;
    listOption.innerText = `${serviceName}` + ` ${servicePrice} €`;

    document.getElementById("work").appendChild(listOption);
}
//------------------------------------------------------------------------
