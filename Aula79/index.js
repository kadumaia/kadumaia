// mixing de composição

const falar = {
  falar() {
    console.log(`${nome} está falando`);
  },
};

const comer = {
  comer() {
    console.log(`${nome} está comendo`);
  },
};

const beber = {
  beber() {
    console.log(`${nome} está bebeendo`);
  },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

//factory functions
function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("luiz", "otavio");
const p2 = criaPessoa("kadu", "maia");
console.log(p1);
console.log(p2);
