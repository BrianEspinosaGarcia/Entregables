class Cola {
    var arr = null;

    constructor (){
        this.arr = [];
    }
    function agregaDato (element) {
        this = [element ,...this];
    }
    function extraerCola (){
        var fin = this.length;
        if(fin===0){
            return 'el arreglo esta vacio';
        }

        var outElement = this[fin-1];
        
        this.splice((fin-2),(fin-1));
        return outElement;
    }
}

var cola = new Cola();
//pila.agregarDato ('Hola');
console.log(cola);