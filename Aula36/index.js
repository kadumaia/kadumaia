// for in -> le os indices ou chaves do objeto

const pessoa = {
    nome: 'Kadu',
    sobrenome: 'Maia',
    idade: '32'
}

console.log(pessoa);
console.log(pessoa['nome']);

const frutas = ['Pera', 'Maca', 'Uva', 'Salada Mista',];

for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    console.log(frutas);
}

for (let indice in frutas) {
    console.log(frutas[indice]);
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}