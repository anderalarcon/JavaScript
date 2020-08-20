/*
    length
    indexOf
    lastIndexOf
    match
    substr
    substring
    charAt
    startsWith -> boleano
    endswith
    includes
    ----------------
    repeat
    replace
    slice
    split
    trim --> quita espacios en blaco innecesarios
    toLowerCase minuscula
    toUpperCase
    concat --> concatenar
*/
var a = "10.55";
var b = parseInt(a); //convertimos de string a entero
var c = parseFloat(a);
var d = isNaN(a); //verifica string
var e = Number.isInteger(a);
var f = a.toString();
var texto = "Hoal,conchtuamre"
document.write(b + "\n");
document.write(c);
document.write(d);
document.write(e + "\n");
document.write(f + "\n");

document.write(texto.length + "\n");
document.write(texto.indexOf("Hoal")); //posicion
document.write(texto.search("Hoal")); //posicion
document.write(texto.lastIndexOf("conchtuamre"));
document.write("<br>")
document.write(texto.substr(5, 2));
document.write("<br>")
document.write(texto.includes("con", 4))
document.write("<br>")
document.write(texto.split(","));