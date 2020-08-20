/* lenght
    push
    pop
    join -> convierte a arreglo 
    split -> separada una cadena de texto medienate un identificador
    array.from
    sort
    reverse
    ---------------------------
    for in
    foreach
    find
    findIndex -> mismo que arriba solo qeu da la posicon
    filter
    some
    */
var arreglo = ["lunes", "martes", "miercoles"];
console.log(arreglo[0]);

var arreglo2 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8],
    [9, 10]
];

var arreglo3 = ["aasd", "basd", "c"];
var arreglo4 = [1, 2, 3];
console.log(arreglo2[0][0]); //ingresar 2 veces p animal
console.log(arreglo2.length);
arreglo2.push(100);
console.log(arreglo2);
arreglo2.pop();
console.log(arreglo2);


console.log("<br>");
for (let i in arreglo3) { //con mayuscula el Let
    document.write(arreglo3[i] + " ");
};

arreglo3.forEach(
    (dos, i) => document.write(i + "-" + dos + "<br>")
);

var buscar = arreglo3.find(tres => tres == "aasd"); //el primer tres es todo el arreglo 
document.write(buscar);

var algunos = arreglo3.some(algun => algun > 5);
document.write(algunos);