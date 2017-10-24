/*document.getElementByName('email').addEventListener('input', function() {
    campo = event.target;
    //valido = document.getElementById('emailOK');

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
      console.log("valido");
      //valido.innerText = "válido";
    } else {
    	console.log("Formato email incorrecto");
      //valido.innerText = "incorrecto";
    }
});*/

function validate() {

	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var passwd = document.getElementById("passwd").value;
	var contador = 0;
	console.log(name + "" + email + "" + passwd);

	// Validación nombre
	if (name == 0 || name == null) { //|| /^\s+$/.test(name)
        document.getElementById("warning_name").innerHTML =
            "El campo nombre no puede ir vacío, ser nulo, ni ser de tipo numérico";
        contador--;
    } else {
        document.getElementById("success_name").innerHTML = "Succes!";
        contador++;
	}

	// Validación email
	if (email == 0 || email == null) {
	    document.getElementById("warning_email").innerHTML =
            "El campo email no puede ir vacío, ser nulo, ni de tipo numérico";
		contador--;
	} else {
	    document.getElementById("success_email").innerHTML = "Success!";
		contador++;
	}

	// Validación contraseña
	if (passwd == 0 || passwd == null) {
	    document.getElementById("warning_passwd").innerHTML = "El campo contraseña no puede ir vacío, ni ser nulo";
	    contador--;
	} else {
	    document.getElementById("success_passwd").innerHTML = "Success!";
		contador++;
	}

	// Validación general
	if (contador == 3) {
		document.getElementById("success_general").innerHTML = "Success all!";
		document.getElementById("submit").classList.add("btn_submit_success");
	} else {
	    document.getElementById("warning_general").innerHTML = "Invalid form!";
	}
}
