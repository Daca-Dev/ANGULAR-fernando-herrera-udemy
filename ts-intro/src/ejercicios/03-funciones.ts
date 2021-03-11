/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero, otroNumbero, base) {
    return numero * base;
}

const resultado = sumar(2, 4);
console.log(resultado);

// funciones con objetos como parametros

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarPv() {
        console.log(this.pv);
    }
}

curar(nuevoPersonaje, 50);