/**
 * Retorne a soma do dobro de todos os pares
 * --> Filtrar pares
 * --> Dobrar Valores
 * --> Reduzir (somar tudo)
 */
//               1  2   3   4  5  6  7  8  9 10  11  12  13  14
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((ac, valor) => ac + valor);

// const numerosPares = numeros.filter(function (valor) {
//     return valor % 2 === 0;
// }).map(function (valor) {
//     return valor * 2;
// }).reduce(function (ac, valor) {
//     return ac + valor;
// });

// const numerosPares = numeros.filter(function (valor) {
//     return valor % 2 === 0;
// }).map(function (valor) {
//     return valor * 2;
// }).reduce(function (ac, valor) {
//     return ac + valor;
// });

// [ 100, 160, 4, 8, 12, 44 ] dobro
//[ 50, 80, 2, 4, 6, 22 ] pares
console.log(numerosPares);