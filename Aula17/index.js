function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));


function saudacao(nome) {
    ///console.log(`Bom dia ${nome}!`);
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel);
// saudacao('Maria');
// saudacao('Felipe');

const raiz = function (numero) {
    return numero ** 0.5;
};

console.log(raiz(25));


const menos = (numero1, numero2) => numero1 - numero2;

console.log(menos(0.5, 10));