let cardNum = document.getElementById("validationCard");
let cvcNum = document.getElementById("validationCVC");
let amountNum = document.getElementById("validationAmount");
let nameVal = document.getElementById("validationName");
let lastNameVal = document.getElementById("validationLastName");
let cityName = document.getElementById("validationCity");
let stateName = document.getElementById("inputState");
let zipNum = document.getElementById("inputZip");
let cardAccepted = document.getElementsByClassName("form-check-input");
let message = document.getElementById("formTextArea");
let error = document.getElementById("error");



function sendForm(){
    let mensajesError = [];
    cardNum.
    if(cardNum.value <15 || cardNum.value>16 || cardNum.value===null || cardNum.value===''){
        mensajesError.push('Ingresa la cantidad correcta de dígitos');
        console.log(mensajesError);
    }
    
    
    //error.innerHTML = mensajesError.join(', ');
    
    
   
    
}