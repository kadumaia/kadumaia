// define property -- define properties -> getters e setter

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        // value: estoque,
        // writable: true,
        configurable: true,
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('mensagem!');
            }
            estoquePrivado = valor;
        }
    });

}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', 'cu');
            nome = valor;
        }
    }
}


const p1 = new Produto('camiseta', 20, 3);
// p1.estoque = 'qualquer coisa'; // a geente utiliza getter e setter para arrumar os valores
// console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);

const p2 = criaProduto('Camiseta!');
p2.nome = 'qualquer outra coisa';
console.log(p2.nome);