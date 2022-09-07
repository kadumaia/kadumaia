// retorne os numeros maiores que 10
// filter -> sempre retorna um array com a mesma quantidade de elementos ou menos
//               1  2   3   4  5  6  7  8  9 10  11  12  13  14
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27]


// function callbackFilter(valor, indice, array) { // não precisa passar isso aqui só pra ilustrasr ja vai automatico
//     return (valor > 10);
//     //if (valor > 10) 
//     //{
//     //         return true;
//     //     } else {
//     //         return false;
//     //     }
//     // }
//     //}
// }

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array)
//     return (valor > 10);
// });
//console.log(numerosFiltrados);

const numerosFiltrados = numeros.filter(valor => (valor > 10));
console.log(numerosFiltrados);

// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Maria', idade: 62 },
    { nome: 'João', idade: 72 },
    { nome: 'Kadu', idade: 32 },
    { nome: 'Rozi', idade: 58 },
    { nome: 'Felipe', idade: 37 },
    { nome: 'Artur', idade: 33 }
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasVelhas = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasVelhas);

const pessoasFinalA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasFinalA);