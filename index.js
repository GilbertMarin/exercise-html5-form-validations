window.onload = function () {

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



    var form = document.getElementById('myForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let mensajesError = [];


        if (cardNum.value.length < 15 || cardNum.value.length > 16 || cardNum.value === null || cardNum.value === '') {
            mensajesError.push('Ingresa la cantidad correcta de dígitos');
            console.log(mensajesError);
        }
        if (cvcNum.value.length != 4 || cvcNum.value === null || cvcNum.value === '') {
            mensajesError.push('Ingresa los 4 dígitos del CVC');
            console.log(mensajesError);
        }
        if (amountNum.value === null || amountNum.value === '') {
            mensajesError.push('Ingresa un Monto');
            console.log(mensajesError);
        }
        if (nameVal.value === null || nameVal.value === '') {
            mensajesError.push('Debes ingresar un nombre');
            console.log(mensajesError);
        }
        if (lastNameVal.value === null || lastNameVal.value === '') {
            mensajesError.push('Debes ingresar tu apellido');
            console.log(mensajesError);
        }
        if (cityName.value === null || cityName.value === '') {
            mensajesError.push('Por favor ingresa la ciudad');
            console.log(mensajesError);
        }
        if (stateName.value === null || stateName.value === '') {
            mensajesError.push('Escoge un estado');
            console.log(mensajesError);
        }
        if (zipNum.value === null || zipNum.value === '') {
            mensajesError.push('Ingresa el Zip Code de tu ciudad');
            console.log(mensajesError);
        }
        if (!document.querySelector('input[name="inlineRadioOptions"]:checked')) {
            mensajesError.push('Debes seleccionar una tarjeta para el pago');
            console.log(mensajesError);
        }
        if (message.value === null || message.value === '') {
            mensajesError.push('Debes colocar un Mensaje');
            console.log(mensajesError);
        }
        if (cardNum.value < 15 || cardNum.value > 16 || cardNum.value === null || cardNum.value === '') {
            mensajesError.push('');
            console.log(mensajesError);
        }
        if(mensajesError.length > 2){
            alert("Acciones a realizar: " + mensajesError.join(', '));

        }
        else{
            alert("Formulario enviado de forma correcta");
        }

        

        
        

    })

}