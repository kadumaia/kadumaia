// global
// closure, habbilidade que a sa funcao tem de
// de acessar seu escopo léxico
// nesse caso esta mundo o contexto léxico
function retornaFuncao(nome) {
    //const nome = 'Carlos';
    return function () {
        return nome;
    };
}
const funcao = retornaFuncao('Carlos');
const funcao2 = retornaFuncao('Maia');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2())