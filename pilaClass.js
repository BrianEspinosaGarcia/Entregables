class Pila {
    var arr = null;

    constructor (){
        this.arr = [];
    }
    function agregaDato (element) {
        this = [...this, element];
    }
    function extraerPila (){
        var fin = this.length;

        var outElement = this[fin-1];
        this.splice((fin-2),(fin-1));
    }
}

var pila = new Pila();
//pila.agregarDato ('Hola');
console.log(pila);