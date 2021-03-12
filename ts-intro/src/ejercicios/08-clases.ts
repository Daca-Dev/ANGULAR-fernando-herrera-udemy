/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {
    // alterEgo: string; // visible en la clase
    // edad: number; // visible fuera de la clase
    // nombreReal: string; // acceder a esta propiedad sin necesidad de una instacia

    constructor(
        public alterEgo: string,
        public nombreReal?: string,
        public  edad?: number,
    ) {
        super(nombreReal, 'New York, USA');
    }
}

const ironman = new Heroe('Iron Man', 'Tony Stark', 35);

console.log(ironman);
