
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

// Visibilidade e erro
let visibleState = true;
const icon_eye = document.getElementById("mostrar");

function onPasswordFocus(){
    icon_eye.style.opacity = 1;
}
function onPasswordBlur(){
    icon_eye.style.opacity = 0;

    var inputSenha = document.getElementById("senha");
    var inputUsuario = document.getElementById("usuario");

    if (inputSenha.value.length && inputUsuario.value.length < 2){
        document.getElementById("usuario").style.backgroundColor = "#f4e3f5";
        document.getElementById("status").style.display = "block";
    }
    else if (inputSenha.value.length && inputUsuario.value.length >= 2) {
        document.getElementById("usuario").style.backgroundColor = "#ededed";
        document.getElementById("fazerLogin").style.backgroundColor = "#bc252a";
        document.getElementById("status").style.display = "none";
    }
    else if(inputUsuario.value.length < 2 && inputSenha.value) {
        document.getElementById("usuario").style.backgroundColor = "#f4e3f5";
        document.getElementById("status").style.display = "block";
    }
    else{
        document.getElementById("fazerLogin").style.backgroundColor = "transparent";
        document.getElementById("status").style.display = "none";
    }
}

function onUsuarioBlur(){
    var inputSenha = document.getElementById("senha");
    var inputUsuario = document.getElementById("usuario");

    if (inputUsuario.value.length >= 2 && inputSenha.value) {
        document.getElementById("usuario").style.backgroundColor = "#ededed";
        document.getElementById("fazerLogin").style.backgroundColor = "#bc252a";
        document.getElementById("status").style.display = "none";
    }
    else if (inputSenha.value.length && inputUsuario.value.length < 2){
        document.getElementById("usuario").style.backgroundColor = "#f4e3f5";
        document.getElementById("fazerLogin").style.backgroundColor = "transparent";
        document.getElementById("status").style.display = "block";
    }
    
}


