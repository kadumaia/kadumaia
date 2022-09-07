// IIFE -> Immediately invoked function expression

// function qualquerCoisa() {
//     console.log(123456);
// }
// qualquerCoisa();

(function (idade, peso, altura) {
    // const nome = 'kadu';
    // console.log(123456);
    const sobrenome = 'Maia';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Kadu'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(32, 100, 1.75);

const nome = 'Qualquer coisa';