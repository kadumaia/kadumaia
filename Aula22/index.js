/*
    Operadores Lógicos
    && -> AND 
    || -> OU
    !  -> NOT
*/

const expressaoAnd = true && true && true && true && true && true;
const expressaoOr = true && true || false && false || false && false
console.log(expressaoAnd);
console.log(expressaoOr);
console.log('______________________________________');

const usuario = 'Luiz';  //form usuario digitou
const senha = '1234';    //form usuario digitou

//                            true               false
const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar);
console.log('______________________________________');

console.log(!!false);