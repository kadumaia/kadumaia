
//arguments que sustenta todos os argumentos enviados apenas para arguments
function funcao(a = 0, b = 0, c = 0) {
    // let total = 0;
    // for (let argumento of arguments) {
    //     total += argumento;
    // }
    // console.log(total, a, b, c);
    //console.log(a, b, c, d, e, f);
    //b = b || 0;
    console.log(a + b + c);
}
funcao(2, 20, 10);
console.log('---------------------------------')

function funcaoDois({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}
let obj = { nome: 'kadu', sobrenome: 'maia', idade: 32 };

funcaoDois(obj);

console.log('---------------------------------')

//desustruturacao de arrays
function funcaoTres([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcaoTres(['Carlos', 'Maia', '32']);
console.log('---------------------------------')

//receber os dois primeiros parametros, e todo o resto dos paprametros ser somados por exemplo
//no for of retorna os valores do array e no for in reetorno os INDICES do array
const conta = function conta(operador, acumulador, ...numeros) {
    //console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        //console.log(numero);
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === 'elevado') acumulador **= numero;
        if (operador === 'modulo') acumulador %= numero;

    }
    console.log(acumulador);
    //console.log(operador, acumulador, numeros);
}

conta('+', 1, 20, 30, 40, 50);