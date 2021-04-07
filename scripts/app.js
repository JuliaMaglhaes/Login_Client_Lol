
// Olho
function funcaoMostrar() {
    document.getElementById("senha").type = "text";
    document.getElementById("mostrar").setAttribute("onClick", "funcaoEsconder()");
    document.getElementById("mostrarIcon").className = "fas fa-eye";
}

function funcaoEsconder() {
    document.getElementById("senha").type = "password";
    document.getElementById("mostrar").setAttribute("onClick", "funcaoMostrar()");
    document.getElementById("mostrarIcon").className = "fas fa-eye-slash";
}

// Visibilidade
let visibleState = true;
const icon_eye = document.getElementById("mostrar");

function onPasswordFocus(){
    icon_eye.style.opacity = 1;
}
function onPasswordBlur(){
    icon_eye.style.opacity = 0;

    var inputSenha = document.getElementById("senha");
    var inputUsuario = document.getElementById("usuario");

    if (inputSenha.value && inputUsuario.value) {
        document.getElementById("fazerLogin").style.backgroundColor = "#bc252a";
    }
    else{
        document.getElementById("fazerLogin").style.backgroundColor = "transparent";
    }
}

function onUsuarioBlur(){
    var inputSenha = document.getElementById("senha");
    var inputUsuario = document.getElementById("usuario");

    if (inputUsuario.value && inputSenha.value) {
        document.getElementById("fazerLogin").style.backgroundColor = "#bc252a";
    }
    else{
        document.getElementById("fazerLogin").style.backgroundColor = "transparent";
    }
}


