// angular usa clases
// un decorador no es mas q una funcion

function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override'
    }
}
// se usa antes que la llamada
// es una funcion que es expande su clase añadiendo funcionalidades
@classDecorator
class MiSuperClass {
    public miPropiedad: string = 'ABCD123';

    imprimir() {
        console.log('Hola Mundo')
    } 
}

console.log(MiSuperClass)

const miClase = new MiSuperClass()
