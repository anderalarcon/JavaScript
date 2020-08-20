/* alert
    confirm
    prompt*/
var saludo = "Hola concahutamre";
alert(saludo);

a = confirm("Estas de acuerdo mongol ? ");
if (a == true) {
    document.write("Ya mongol");
} else {
    window.location = "ayuda.html";
}

nombre = prompt("Ingresa tu nombre");
if (nombre == null) {
    document.write("Ya te botas mongol de mierda");
}