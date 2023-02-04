/*
    ===== Código de TypeScript =====
*/
//Typescript se puede quejar de las variables si estan declaradas varias veces por el scoope global
// poner de manera explicita despues de los :
// typescript lo infiere de manera automatica
let nombre: string = 'strider';

nombre = 'fernando';
// nombre = 12321; --> no esta permitido cambiar de tipo

let hp: number | string = 87;

hp = 'esta muerto'; // --> con | se puede declarar otro tipo

