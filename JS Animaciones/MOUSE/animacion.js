//EVENTOS MOOUSE
function apretar() {
    alert("Hola a todos");
}

function apretar2() {
    alert("Pasando x encima");
}

function apretar3() {
    alert("Sali del cuadrado");
}

// defrente en js

var evento = document.querySelector(".boton") //para clases es con "."

evento.addEventListener("click", function() { //click,mouseouver,mouseout
    alert("ConJs")
});

var evento2 = document.querySelector(".boton2")

evento2.addEventListener("mouseover", function() {
    alert("Saliendo");
})