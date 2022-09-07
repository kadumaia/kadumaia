//função construtora retorna objetos
//função fabrica retorna objetos
//construtora -> Pessoa (new)
//método função dentro do objeto

function Pessoa(nome, sobrenome) {
    //privadas nao disponiveis fora do corpo
    const id = 123456;

    const metodoInterno = function () {
        console.log('valide aqui seu cpf:')
    };


    //atributos ou métodos públicos privados
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': Sou um método');
    };

}

const p1 = new Pessoa('Kadu', 'Maia');
const p2 = new Pessoa('Maria', 'Eduarda');

p1.metodo();