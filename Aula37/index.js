const pessoa = {
    nome: 'Kadu',
    sobrenome: 'Maia'
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
// for classico - geralmente com iteraveis (arrays ou strings)
// for in - retorna o indice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteraveis, arrays ou strings)

console.log('---------------------------------');

const nome = ['kadu', 'luiz', 'otavio', 'pinto', 'pirolito', 'pipoca', 'sandoca', 'animamilo'];

for (let i = 0; i < nome.length; i++) {
    const elemento = nome[i];
    console.log(elemento);
}
console.log('---------------------------------');
for (let i in nome) {
    console.log(nome[i])
}
console.log('---------------------------------');
for (let valor of nome) {
    console.log(valor)
}
console.log('---------------------------------');

nome.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});