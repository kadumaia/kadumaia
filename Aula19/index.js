/*
 Primitios (imutáveis) - string, number, boolean, undefined, ** COPIADOS **
 null (bigint,symbol)

 Referêcia (mutável) - array, object, funcition  ** PASSDOS POR REFERENCIA NO MESMO VALOR NA MEMÓRIA**
*/

const a = {
    nome: 'Carlos',
    sobrenome: 'Maia'
};

const b = a;
//const b = { ...a };

a.nome = 'Pirocudo';
console.log(b);
console.log(a);
console.log(a, b);


// let nome = 'Carlos';
// nome = 'Maia';
// console.log(nome);

// let a = [1, 2, 3];
// let b = [...a]; //copiado -> spread de a para b
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Luiz');
// console.log(a, c);