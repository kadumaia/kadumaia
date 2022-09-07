// arrancar coisas do array e ja jogar em uma variavel!!! atribuiução por desustruturação


//               0  1  2  3 ----> indice
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, , terceiroNumero, ...resto] = numeros;   //...pegar o resto de algo, rest ou spread com o memso op.

console.log(primeiroNumero, terceiroNumero, resto);

//                       0          1          2
//                    0  1  2    0  1  2    0  1  2
const numeroArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [, [, , seis]] = numeroArray;                            //complexo de mais para acessar por desestruturação
const [lista1, lista2, lista3] = numeroArray;
console.log(lista2[2]);