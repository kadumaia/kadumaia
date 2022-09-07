// operação ternaria
// (condicao ) ? 'valor para verdadeiro': 'valor para falso';

const poontuacaoUsuario = 999;
const nivelUsuario = poontuacaoUsuario >= 1000 ? 'usuario vip' : 'usuario normal'

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; //callback

console.log(nivelUsuario, corPadrao);

// if (poontuacaoUsuario >= 1000) {
//     console.log('Usuario VIP');
// } else {
//     console.log('Usuario Normal');
// }