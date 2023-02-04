interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando',
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Gabriel', 'Natalia']
}
// el ? le dice que intente evaluar si tiene valor
// encadenamiento opcional, o secure operator
function imprimirHijos(pasajero: Pasajero) {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos)
}


imprimirHijos(pasajero2)