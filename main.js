class noPerfecto {
    constructor(numero) {
        this.numero = numero;
        this.divisores = [];
        this.suma = 0;
    }
    getDivisores() {
        for (let i = 0; i < this.numero; i++) {
            if ((this.numero % i) == 0) {
                this.divisores.push(i);
            }
        }
        return this.divisores;
    }
    getSuma() {
        this.divisores.forEach(element => {
            this.suma += element;
        });
        return this.suma
    }
    comprobar() {
        if (this.suma == this.numero) {
            return `es perfecto`;
        } else {
            return `no es perfecto`;
        }
    }
}
let n = new noPerfecto(6);
console.log(`Los divisores de ${n.numero} son: ${n.getDivisores()}`);
console.log(`La suma es: ${n.getSuma()}`)
console.log(`El número ${n.numero} ${n.comprobar()}`);