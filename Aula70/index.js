// new array[]

const pessoa = new Object();
pessoa.nome = 'Carlos';
pessoa.sobrenome = 'Maia';
pessoa.idade = 32;

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log('--------------------------');

pessoa.falarNome = function () {
    return console.log(`${this.nome} está falando seu nome.`);
};

pessoa.getDataNascimento = function () {
    dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa.getDataNascimento());
pessoa.falarNome();
console.log('--------------------------');
const pessoa2 = {
    nome: 'Carlos',
    sobrenome: 'Maia'
};
const chave = 'sobrenome';
console.log(pessoa2['sobrenome']);
console.log(pessoa2[chave]); // a gente marca assim quando pegamos dados dinamicos
console.log('--------------------------');

for (let chave in pessoa) {
    console.log(chave);
    console.log(pessoa[chave]);
};
console.log('--------------------------');

// factory functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };

}

const p1 = criaPessoa('Carlos', 'Maia');
console.log(p1.nomeCompleto)
console.log('--------------------------');

// constructor functions; {}<- this -> this
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
};

// p11 = [enderecomemoria] -> 'valor'
// p11 = [novoenderecomemoria] -> não posso fazer isso
// p11 = 'Outra coisa';
const p11 = new Pessoa('Carlos', 'Maia');
p11.nome = 'Outra coisa';
p11.sobrenome = 'Qualquer outra coisa';
const p22 = new Pessoa('Luiz', 'Otavio');
Object.freeze(p22);
p22.nome = 'Outra coisa';

console.log(p11);
console.log(p22);