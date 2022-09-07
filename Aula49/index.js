//delcaracao de funcao (functioon hoisting)
function falaOi() {
    console.log('oie');
}

//first class objects (objetos de primeira classe) <-- fobjeto de primeira classe [doidera] {TODAS FUNCOES}
//function expression

const souUmDado = function () {
    console.log('Sou um dado!');
};

souUmDado();

function executaFuncao(funcao) {
    console.log('vou executar sua funcao agora abaixo');
    funcao();
}

executaFuncao(souUmDado);

//arrowfunction uma function expression mais curta muda quando formos falar de this.algumacoisa

const funcaoArrow = () => {
    console.log('sou uma arrow function');
}

funcaoArrow();

//dentro de um objeto eu posso ter uma funcao modo classico!!

const obj = {
    falar() {
        console.log('Estou falando...');
    }
}

obj.falar();