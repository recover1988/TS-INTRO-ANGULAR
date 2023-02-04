interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
};

interface Detalles {
    autor: string;
    anio: number;
};

const reproductos: Reproductor = {
    volumen: 90,
    segundo: 23,
    cancion: 'Mes',
    detalles: {
        anio: 1233,
        autor: 'Ed sherdida'
    }
}
// se puede cambiar le nombre volumen : vol;
const { volumen, cancion, segundo, detalles: { autor } } = reproductos;
// const { autor } = detalles;

// el intellisense ayuda a ser mas rapido y no errar

// Desestructuracion de arreglos
// en la desetructuracion de arreglos lo importante es la ubicacion o posicion
// se puede dejar un espacion si no quieres esa variables
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, , p3] = dbz;