/**
 * Escreva uma funcao que receba 2 numeros e 
 * retorne o maior deles
 * @param {numeric values} x 
 * @param {numeric values} y 
 * @returns {bigger numbers}
 */

function max(x, y) {
    // if (x > y) return x;
    // return y;
    return x > y ? x : y;
}

const max2 = (x, y) => {
    return x > y ? x : y;
}

const max3 = (x, y) => x > y ? x : y;


console.log(max(5, 10));
console.log("-------------------------------------");
console.log(max2(100, 10));
console.log("-------------------------------------");
console.log(max3(300, 10));