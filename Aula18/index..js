// const array = [1, 2, 3];
// array.push(4);
// array[0] = 'Luiz';
// array = 'Outra';
// console.log(array);


function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}


const pessoa1 = criaPessoa('Otávio', 'Luiz', 25);
const pessoa2 = criaPessoa('Carlos', 'Maia', 32);
const pessoa3 = criaPessoa('Paulo', 'Gustavo', 22);
const pessoa4 = criaPessoa('Despirocado', 'Silva', 19);
const pessoa5 = criaPessoa('Pinto', 'Mole', 25);
console.log(pessoa1.nome);
console.log(pessoa2.nome, pessoa2.idade);
console.log(pessoa3.sobrenome, pessoa3.idade);
console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade);
console.log(pessoa5.nome + ' Meio bosta');


const pessoa10 = {
    nome: 'Carlos',
    sobrenome: 'Maia',
    idade: 32,

    fala() {
        // console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é: ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa10.fala();
pessoa10.incrementaIdade();
pessoa10.fala();
pessoa10.incrementaIdade();
pessoa10.fala();
pessoa10.incrementaIdade();
pessoa10.fala();
pessoa10.incrementaIdade();
pessoa10.fala();
pessoa10.incrementaIdade();

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);