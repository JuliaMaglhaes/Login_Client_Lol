$(function(){
    $(".help").mouseover(function(){
        $(".mensagem").css("display","block");
    })
    $(".help").mouseout(function(){
        $(".mensagem").css("display","none");
    })
});


senha = document.querySelector('#senha');
mostrar = document.querySelector('#mostrar')

function funcaoMostrar(){
    document.getElementById("senha").type="text";
    document.getElementById("mostrar").setAttribute("onClick", "funcaoEsconder()");  
}

function funcaoEsconder(){
    document.getElementById("senha").type="password";
    document.getElementById("mostrar").setAttribute("onClick", "funcaoMostrar()");  
}