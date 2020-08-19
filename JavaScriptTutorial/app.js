document.write("<h1>Hello World</h1>")
    //tipos de datos
    //String "hola"
    //Number 100 -2.3
    //Boolean true false
    //array ['adrian','anderson'],[true,false],[1,3,4]
    //objetos
    /*
    {
        "jugador":'anderson',"score":70.4,"horas":14,"married":true
    }

    {
        "jugador":'anderson2',"score":80.4,"horas":15,"married":false
    }
    */

var nombre = "ander"; //variables 
let apellido = "Achata";
const PI = 3.1415; // cambia nunca 

console.log(nombre);
console.log(apellido);

var a = 1;
var b = 5;
console.log(a + b);
console.log(nombre + apellido); //- , != , ==

var bol = a > b
console.log(bol);

if (a + b == 3) {
    console.log("Conchatumare");
} else if (a + b == 4) {
    console.log("Palla mongol");
} else {
    console.log("xd");
}

var menu = "1";
switch (menu) {
    case "1":
        console.log("1");
        break;
    case "2":
        console.log("2");
        break;
    default:
        console.log("Default");
        break;
}
var d = 1;
while (d <= 50) {
    console.log("Hola");
    d = d + 1;
}

var nombres = ["anderson", "adrian"];
console.log(nombres[1]);
console.log(nombres.length);

for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

function sumar(a, b) {
    console.log(a + b);
}

sumar(1, 2);

function uno() {
    return document.write("titulo");
}

function dos(a, b, c) {
    var datos = document.write("<br>Mi nombre es :" + a + "<br>Mi apellido es :" + b + "<br>Mi edad es :" + c);
    return datos;

}
uno();
dos("Anderson", "Achata", 21);
document.write("<br>")

function tres(nombre, apellido) {
    if (nombre != null && apellido != null) {
        document.write("Esta bien");
    } else {
        document.write("Llena concahtuamre");
    }

}

tres();
document.write("<br>")

var juguete = ["soldado", 2, 1]

function cuatro(array) {
    for (var i = 0; i < array.length; i++) {
        document.write(array[i] + " ");
    }
}
cuatro(juguete);

var qwe = function(nombre, uno) { // f anonima
    var e = nombre;
    uno(e);
}
var qwe2 = function(i) {
    document.write(i);
}
qwe("kath", qwe2);

// arrow
function unoa(nombre) { //lo mismo que abajo
    return nombre;
}
var arrow1 = nombre => nombre;
document.write("<br>")
document.write(arrow1("AAAAAAAAAAA"))

var arrow2 = (nombre, apellido) => nombre + apellido;
document.write("<br>")

document.write(arrow2("Alfonso", "Achata"));