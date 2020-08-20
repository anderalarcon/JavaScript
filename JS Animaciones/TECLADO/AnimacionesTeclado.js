window.addEventListener("keydown", function() { //keydown,keypress,keyup
    alert("Accion")
})

window.addEventListener("keypress", function() {
    alert("keypress");
})

window.addEventListener("keyup", function() { //cuando lo suelto
    alert("keyup");
})

window.addEventListener("keypress", function(event) {
    alert(String.fromCharCode(event.keyCode)); //tecla que aprieto
})

window.addEventListener("load", function() {
    alert("Ya cargo");
})

var tiempo = setInterval(function() { //infinito
    document.write("repitiendo texto <br>")
}, 2000);

var tiempo2 = setTimeout(function() { //solo 1 vez
    document.write("que hace ?") //document con minuscula
}, 3000);