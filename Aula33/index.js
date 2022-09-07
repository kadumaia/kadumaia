const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Miranda',
    idade: 32,
    endereco: {
        rua: 'Aureo Syng',
        numero: 80
    }
}

// atribuicao via desustruturação extrai desse objeto aqui essa chave
const { nome, sobrenome, idade, endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero, endereco);