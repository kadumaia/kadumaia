// new Object -> Object.prototype
const objA = {
  chaveA: "A",
  //__proto__: Object.prototype
};

const objB = {
  chaveB: "B",
  //__proto__: Object.prototype
};

const objC = new Object();
objC.chaveC = "C";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveB);
console.log(objC.chaveA);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);

//p1.desconto(100);
//p1.aumento(100);
console.log(p1);
