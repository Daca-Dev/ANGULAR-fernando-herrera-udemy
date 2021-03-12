/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    nombre: string;
    precio: number;
}

const telefono: Producto = {
    nombre: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    nombre: 'iPad air',
    precio: 350
}

export function calcularISV(productos: Producto[]): [number, number] {

    let total = 0;

    productos.forEach( ({precio}) => {
        total += precio;
    });

    return [total, total * 0.15]
}

// const articulos: Producto[] = [telefono, tableta];

// const [total, totalISV] = calcularISV(articulos)
// console.log('Precio total: ', total);
// console.log('ISV: ', totalISV);
