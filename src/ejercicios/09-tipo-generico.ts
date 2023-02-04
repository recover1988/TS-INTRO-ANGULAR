// GENERICOS
// se puede usar otras letras como G S H
// se puede poner el resultado que devuelve y muchas otras cosas
function queTipoSoy<T>(argumento: T) {
    return argumento;
};

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(122);
let soyArreglo = queTipoSoy([1, 2, 3, 4, 5]);

let soyExlpicito = queTipoSoy<number>(12)

