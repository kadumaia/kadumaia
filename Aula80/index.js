/**
 * uma classe é um molde para a criação de objetos
 * uma classe é apenas uma forma diretente de escrever uma função construtora
 */

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} está falando.`);
  }
  comer() {
    console.log(`${this.nome} está comendo.`);
  }
  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Carlos", "Maia");
const p3 = new Pessoa("Rozi", "Menezes");
const p4 = new Pessoa("Ricardo", "Tavares");
const p5 = new Pessoa("Artur", "Inácio");
const p6 = new Pessoa("Felipe", "Alcantra");
const p7 = new Pessoa2("Animal", "Pereira");
console.log(p1);
console.log(p2.falar());
console.log(p3.falar());
console.log(p7.falar());
