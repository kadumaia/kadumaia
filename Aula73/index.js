/**
 * object.values
 * objejct.entries
 * object.assign (des, anu)
 * object.getOwnPropertyDescriptor(o,'prop')
 * ...(spread)


//já vimos
objejct.keys(retorna as chaves)
object.freeze (congela o objeto)
object.defineProperties (define propriedades)
object.defineProperty (define uma propriedade)
 */

const produto = { nome: 'Caneca', preco: 1.8 };

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'qualquer outra buceta aqui tb'
})

const outraCoisa = { ...produto };
// Object.freeze(produto)

const caneca = {
    ...produto,
    material: 'porcelana'
};

const outraCaneca = Object.assign({}, produto, { material: 'plastico' });

outraCoisa.nome = 'Outro Produto';
outraCoisa.preco = 2.5;

// produto.nome = 'Carlinhos Maia';

console.log(outraCoisa);
console.log(produto);
console.log(caneca);
console.log(outraCaneca);
console.log(Object.keys(produto));

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Piroquinha pequena';

for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}