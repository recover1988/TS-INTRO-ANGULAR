// La restricciones de typescript solo funcionan en modo desarrollo, cuando se traduce lo hace en javascript
// el tipo any es muy flexible pq acepta cualquier cosa pero es mejor no usarlo
let habilidad: string[] = ['Bash', 'Counter', 'Healing'];
// podemos poner mas tipos :(string | number | boolean)

// para trabajar con objetos usar interface
interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string, //--> al poner ? la variable es opcional
}


const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing'],
};
personaje.puebloNatal = 'Pueblo Paleta';