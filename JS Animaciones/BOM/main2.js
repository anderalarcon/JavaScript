window.name = "Nombre de la ventana";
var dato = "El nombre es :" + window.name + "<br>";
var ancho = "El ancho es :" + window.outerWidth + "<br>";
var alto = "El alto es :" + window.outerHeight + "<br>";
document.write(dato, ancho, alto);
/* inner width ancho interno
 innerheight altura interna
 pagexoffset scroll horizontal
 pageyfofset scroll vertical
 screenx distancia izquierda
 screeny distancia derecha */
function visitar() {
    ventana = window.open("ayuda2.html");
};

function cerrar() {
    ventana.close();
};

function dimesion() {
    ventana.resizeTo(500, 500);
    /*
    focus
    print
    */
}

alert(window.length); //nro de frames
/*
parent
self*/

document.write("asdsda");
var qwe = window.location;
document.write(qwe);

//todo bom con "window"