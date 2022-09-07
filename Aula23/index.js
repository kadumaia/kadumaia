/*
Avaliação de curto circuito
&&  -> Todas as expressoes precisam ser verdadeiras para que and retorne verdadeiro, se uma tiver como true ele tretorna false [false && true -> false 'O VALOR MESMO']
||  -> Todas as expressoes precisam ser falsas para que or retorne false, se uma tiver como true ele retorna true              [false || true -> true 'O VALOR REAL']

FALSY  -> fingem ser valores falsos
*false -> literal
0
'' "" `` string vazia
null / undefined
NaN
*/

// function falaOi() {
//     return 'Oi';
// }

// const vaiExecutar = 'joazinho';

// console.log(vaiExecutar && falaOi());

// console.log('Luiz' && '' && 'Maria');
// console.log('Carlos Maia' && true && 'Maria');

// console.log(0 || false || null || 'Carlos Maia' || true)

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';  //true pq é uma string
const d = false;
const e = NaN;

console.log(a || b || c || d || e);