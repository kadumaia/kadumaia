/**
 * Escreeva uma função que receba um
 * numero e retorne o seguinte:
 * Numero é divisive por 3 = Fizz
 * Numero é divisivel por 5 = Buzz
 * Numero é divisivel por 3 e 5 = retorna
 *     o próprio numero
 * Use a função com números de 0 a 100
 */

//  modulo de n e 3 tem que retornar 0

function fizBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizBuzz(i))
}