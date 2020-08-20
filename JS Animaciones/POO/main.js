class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    mostrar() {
        console.log("El nombre es:" + this.nombre + "y la edad es :" + this.edad);
    }
}

class Animal {
    constructor(tipo, raza) {
        this.tipo = tipo;
        this.raza = raza;
    }

    mostrar() {
        console.log("El tipo es :" + this.tipo);
        console.log("La raza es :" + this.raza)
    }

}

class domestico extends Animal {
    constructor(tipo, raza, nombre, edad, peso) {
        super(tipo, raza);
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }
    mostrar() {
        super.mostrar();
        console.log("El nombre es:" + this.nombre);
        console.log("La edad es :" + this.edad);
        console.log("El peso es :" + this.peso);
    }
}
var animal1 = new domestico("dOMESTRICO", "sIVERIANO", "BOBY", 2, 25);
animal1.mostrar();