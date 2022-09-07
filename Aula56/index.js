// o this sempre se refere a pessoa que chamou a função
// Factory Function (Função Fábcrica)
// Constructor function (Função Construtora)
// qual a vantagem de cada uma? na hora de criar os obetos é mais simples


function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // funcoes aqui dentro do objeto são métodos
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // criar setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            //console.log(valor);
        },
        fala: function (assunto = 'falando sobre nada') {
            return `${nome} ${this.nome} está ${assunto}`;
        },
        peso: peso,
        altura: altura,
        // quando colocamos o get ele finje ser um atributo, então não precisamos colocar ()
        //getter apenas obter o valor
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
//                           | atributios simples n utilizam ()
const pessoa1 = criaPessoa('Kadu', 'Maia', 1.75, 100);
console.log(pessoa1.fala('falando sobre JS'));
console.log(`seu IMC é de ${pessoa1.imc}`);

console.log('---------------------------');

pessoa1.nomeCompleto = 'Carlos Eduardo de Menezes Maia';
//console.log(pessoa1.nomeCompleto);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.fala());

console.log('---------------------------');

const pessoa2 = criaPessoa('Maria', 'Joaquina', 1.50, 50);
console.log(pessoa2.fala('só sabe encher o saco'));
console.log(`seu IMC é de ${pessoa2.imc}`);


// console.log(pessoa1.fala('falando sobre JS'));
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.imc());

