// string, number, undefined

const nome = 'Kadu';    // string,
const nome1 = "Kadu";   // string,
const nome2 = `Kadu`;   // string,

const num1 = 10;     // number,
const num2 = 10.42;  // number,

let nomeAluno;                   // undefine, não aponta para local nenhum na memoria
const sobreNomeAluno = null;     // nulo, não aponta para local nenhum na memoria
const arovado = true;            // boolean = true, false (lógico)



console.log (typeof nome, nome);
console.log (typeof num1, num1);
console.log (typeof sobreNomeAluno, sobreNomeAluno);
console.log (typeof arovado, arovado);

const a = [1, 2];
const b = a;

console.log (a, b);
console.log (typeof a, typeof b);

b.push  (3);
console.log(a, b);       // dados são passados por referencia