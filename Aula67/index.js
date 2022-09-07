// aula sobre reduce, mais interessante para reduzir numeros, some com tudo de uma vez só
// retorne um array com os pares (filter)
// retorne um array com o dobro dos valores (map)
//               1  2   3   4  5  6  7  8  9 10  11  12  13  14
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    //if (valor % 2 === 0) acumulador += valor;
    if (valor % 2 !== 0) acumulador += valor;
    //acumulador.push(valor * 2);
    //if (valor % 2 !== 0) acumulador.push(valor);
    //acumulador += valor;
    //console.log(acumulador, valor);
    return acumulador
}, 0);

console.log(total);


// retorne a pessoa mais velha
const pessoas = [
    { nome: 'Maria', idade: 62 },
    { nome: 'João', idade: 72 },
    { nome: 'Kadu', idade: 32 },
    { nome: 'Rozi', idade: 58 },
    { nome: 'Felipe', idade: 37 },
    { nome: 'Artur', idade: 33 }
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
    //console.log(acumulador, valor);
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);