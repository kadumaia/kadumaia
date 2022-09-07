// dobre os numeros, nesse caso aqui nós podemos alterar os valores retornados no array
// map tem sempre o tamanho do array original, diferentemente do filter {lembradar dessa porra}
// mapeamento de valores
//               1  2   3   4  5  6  7  8  9 10  11  12  13  14
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);

// para cada elemento:
// retorne apenas uma string com o nome da pessoa
// remova apenas a chave "nome" do objeto
// adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Maria', idade: 62 },
    { nome: 'João', idade: 72 },
    { nome: 'Kadu', idade: 32 },
    { nome: 'Rozi', idade: 58 },
    { nome: 'Felipe', idade: 37 },
    { nome: 'Artur', idade: 33 }
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }));
const comId = pessoas.map(function (obj, indice) {
    const newObj = { ...obj };
    newObj.id = (indice + 1) * 10000;
    return newObj;
});

// const idades = pessoas.map(function (obj) {
//     // delete obj.nome;
//     // return obj;
//     // objeto novo so com a idade
//     return { idade: obj.idade };
// });

console.log(pessoas);
console.log(nomes);
console.log(idades);
console.log(comId);