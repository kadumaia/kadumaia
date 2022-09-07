class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
    }
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'O.');  // <-- Pessoa = funcao construtora
const pessoa2 = new Pessoa('Maria', 'A.');  // <-- Pessoa = Funcao construtora
const data = new Date(); // <-- funcao construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);