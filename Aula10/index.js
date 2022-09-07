/* Aritimeticos
 * Adicao / concatenacao
 * - / *
 * ** Potenciacao
 * % Retorna o resto da divisão
 * () executa primeiro
 * ** potenciacao
 * * / %
 * + e -
 * incremento ++ (pre e pros)
 * decremento -- (pre e pros)
*/

const num1 = 10;
const num2 = 5;
const num3 = 10;
let contador = 1;
contador++;
contador++;
contador++;
contador++;
contador++; // cuidar pq na hora que colocamos a incrementacao depois da variavel ele não mostra a incrementacao
console.log(contador);
console.log(contador++); //vai mostrar 6  ainda pq ele fez o calculo mas mostrou primeiro
console.log(++contador); //vai mostrar 8 por que vai adicionar o 7 da linha passada q n foi mostrado e incrementar
console.log(--contador);

console.log((num1 + num2) * num3);

console.log('______________________________________________________');
let contador2 = 1;
const passo = 2;

contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);

console.log('______________________________________________________');


let contador3 = 0;
contador3 += passo; // contador = contador + contador + 2
contador3 += passo; 
contador3 += passo; 
contador3 += passo; 
contador3 += passo; 
console.log(contador3);


console.log('______________________________________________________');


let contador4 = 10;
contador4 *= passo; // contador = contador * contador + 2
contador4 *= passo; 
contador4 *= passo; 
contador4 *= passo; 
contador4 *= passo; 
console.log(contador4);

console.log('______________________________________________________');


let contador5 = 10;
contador5 **= passo; // contador = contador ** na potenciacão de passo
contador5 **= passo; 
contador5 **= passo; 
contador5 **= passo; 
contador5 **= passo; 
console.log(contador5);

console.log('______________________________________________________');

// NaN not a number parseint(inteiro) parsefloat(decimais) Number (fodase)
const numero1 = 10;
//const numero2 = parseInt('5');
const numero2 = Number('5.2');
console.log(numero1 + numero2);
console.log(typeof numero2);