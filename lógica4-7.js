//Cara ou Coroa
//O programa irá fubcionar as

const ler = require("prompt-sync")();
let boolean = isTooSmall = false; 
console.log("Cara ou Coroa")

console.log("Como está sua sorte?")
let A = ler("Jogue a moeda (digite qualquer número): ");
A = Number(A);

A = A % 2

boolean = A

console.log("Veja o resultado abaixo: Sendo 0 = Cara e 1 = Coroa")
console.log("O resultado é: " + boolean);