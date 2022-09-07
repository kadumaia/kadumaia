/**
 * Escreva uma funcao chamada ePaisagem que receba dois
 * argumentos, largura e altura de uma imagem (number).
 * Retorne true se a imagem estiver no modo paisagem.
 */

// retorne se largura for maior que altura retorne true 
// caso contrario retorne falso

function ePaiasgem(largura, altura) {
    //return largua > altura ? true : false;
    return largura > altura;
}


const ePaisagemArrow = (largura, altura) => largura > altura;

console.log(ePaiasgem(1080, 1920));
console.log('-------------------------------------');
console.log(ePaisagemArrow(1920, 1080));