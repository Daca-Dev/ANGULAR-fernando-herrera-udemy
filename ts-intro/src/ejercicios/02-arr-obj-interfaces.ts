/*
    ===== Código de TypeScript =====
*/

// arreglo
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

// interface
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // opcional
};

// objeto
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';