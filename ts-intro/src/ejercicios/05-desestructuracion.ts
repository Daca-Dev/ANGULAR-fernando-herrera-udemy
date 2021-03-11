/*
    ===== Código de TypeScript =====
*/
// Objetos
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Edd Sheran',
        anio: 2015
    }
}

const { volumen, segundo: seg, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log('El volumen actual es: ', volumen);
console.log('El segundo  actual es: ', seg);
console.log('La canción actual es: ', cancion);
console.log('El Autor es: ', autor);

// Arreglos

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [p1, , p3] = dbz;

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', p3);
