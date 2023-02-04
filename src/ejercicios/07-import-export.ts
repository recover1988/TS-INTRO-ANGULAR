import { Producto, calcularISV } from "./06-desetructuracion-funcion";
// sino se exporta no se puede usar
// cuando se llama a una funcion se ejecuta el modulo completo donde esta alojado
// principios de reutilizacion y reutibilidad
const carritoCompras: Producto[] = [
    {
        desc: 'Telefono1',
        precio: 12,
    },
    {
        desc: 'Telefon21',
        precio: 12,
    },
];


const [total, isv] = calcularISV(carritoCompras);


console.log('Total: ', total);
console.log('ISV: ', isv);

