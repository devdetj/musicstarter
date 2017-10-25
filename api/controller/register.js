var user_tool = required(../controller/user_tool);

document.getElementById("submit").onclick = function(evnt) {
    var valido = validate();
    if (!valido) return false;
}

function validate() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var passwd = document.getElementById("passwd");

    var mssg = "";

    // Name validator
    if(!name.validity.valid) {
        if(name.validity.tooShort) mssg +=
            "<p>El nombre és demasiado corto</p>";
        if(name.validity.tooLong) mssg +=
            "<p>El nombre no puede contener más de 32 carácteres</p>";
        if(name.validity.patternMismatch) mssg +=
            "<p>El nombre solo puede contener letras</p>";
        if(name.validity.valueMissing) mssg +=
            "<p>El campo nombre, no puede ir vacío</p>";
    }

    // Email validator
    if(!email.validity.valid) {
        if(email.validity.valueMissing) mssg +=
            "<p>El campo email, no puede ir vacío</p>";
        if(email.validity.patternMismatch) mssg +=
            "<p>El email, tiene que tener un formato de email válido</p>"
    }

    // Password validator
    if(!passwd.validity.valid) {
        if(passwd.validity.tooShort) mssg +=
            "<p>La contraseña debe ser de almenos 6 carácteres</p>";
        if(passwd.validity.valueMissing) mssg +=
            "<p>El campo contraseña, no puede ir vacío</p>"
    }

    // Conditions validator
    elemento = document.getElementById("conditions");
    if (!elemento.checked) {
        mssg +=
            "Tiene que aceptar los términos y condiciones"
    }
    document.getElementById("errors").innerHTML = "<strong>" + mssg + "</strong>";
    document.getElementById("errors").style = "display: block";

   if (mssg == true) {
    }

    return mssg?false:true;
}

/*
var form = document.getElementById("form");

if(form.submit()) {
    document.getElementById("submit").classList.add("btn_submit_success");
}
*/

// ..document.getElementById("submit").classList.add("btn_submit_success");
// reCAPTCHA
