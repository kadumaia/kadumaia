/*

Luiz Otávio Miranda tem 30 anos, pesa 84 KG tem 1.8 metros de altura e seu IMC é 25.00000
Luis Otávio nasceu em 1980
*/

const nome = 'Carlos Eduardo';
const sobrenome = 'de Menezes Maia';
const idade = 32;
const peso = 100;
const alturaEmM = 1.75; 
 
let imc = peso/(alturaEmM * alturaEmM); //peso /(altura * altura)
let anoNascimento;

anoNascimento = 2022 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos de idade, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} metros de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);