/*
    ===== Código de TypeScript =====
*/

import { Producto, calcularISV } from './06-desestructurar-funciones';


const carritoCompras: Producto[] = [
    {
        nombre: 'telefono 1',
        precio: 100
    },
    {
        nombre: 'telefono 2',
        precio: 150
    }
];

const [total, isv] = calcularISV( carritoCompras );

console.log('Total: ', total);
console.log('ISV: ', isv);

