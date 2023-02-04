class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string,
    ) { }
}


class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;
    // imprimirNombre() {
    //     return this.alterEgo + ' ' + this.nombreReal
    // };
    // con el constructor estoy asignando a las propiedades de la clase cada uno de sus argumentos
    constructor(
        public alterEgo?: string,
        public edad?: number,
        public nombreReal?: string,
    ) {
        super(nombreReal, 'New York USA');
    }
    // this.alterEgo = alterEgo

}
// la interface no aparece al compilarse, solo se usa en desarrollo
// la interface solo puede tener firmas y tipos.
// interface Personaje2 {
//     alterEgo?: string;
//     edad?: number;
//     nombreReal?: number;
//     imprimirNombre?: () => string;
// }
// const spiderman: Personaje2 = {};

const ironman = new Heroe('Ironman', 45, 'Toni');
