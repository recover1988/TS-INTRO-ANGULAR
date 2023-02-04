

console.log('Hola Mundo!!!!!');

// es mejor poner el tipo de la respuesta
function sumar(a: number, b: number): number {
    return (a + b);
};
const suma = (a: number, b: number): number => { return a + b }

// es buena practica poner el tipo del resultado y a los argumentos

function multiplicar(numero: number, otroNumero: number, base: number = 2): number {
    return numero * base;
}
// todo en js retoran undefined, en ts si la funcion no retorna nada le ponemos void

interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarHp: () => void
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX
};

const nuevoPersonajes: PersonajeLOR = {
    nombre: 'Strider',
    pv: 23,
    mostrarHp() {
        console.log('Los puntos de vida', this.pv)
    }
}
curar(nuevoPersonajes, 23)