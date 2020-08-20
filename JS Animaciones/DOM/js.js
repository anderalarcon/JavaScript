/*queryselector
getelement*/
//var a = document.querySelector(".primero h1"); //ids con #
//var b = document.querySelector("h1");
//var c = document.querySelector(" a[class ='vinculo'] "); //solo afectaria a los links 

//var parrafo = document.querySelector(".primero p");

var asd = document.getElementById("tres"); //con id 
var qwe = document.getElementsByClassName("primero")[0]
var parraf = document.getElementsByTagName("p")[1]
    //a.style.color = "red";
    //c.style.color = "black";
    //parrafo.style.color = "yellow";
asd.style.color = "yellow";
qwe.style.color = "blue";
parraf.style.color = "green";

var ultimo = document.getElementsByClassName("primero")[0]

ultimo.style.color = "green";

ultimo.style.border = "1px solid red";

ultimo.style.fontFamily = "Arial";
ultimo.style.fontSize = "15px"