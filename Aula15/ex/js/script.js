// let numero = prompt('Digite um número: ');
// numero = Number(numero);
const numero = Number(prompt('Digite um número: '));
const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.<p> <br>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.<p> <br>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.<p> <br>`;
texto.innerHTML += `<p>Arredando pra baixo: ${Math.floor(numero)}.<p> <br>`;
texto.innerHTML += `<p>Arredando pra cima: ${Math.ceil(numero)}.<p> <br>`;
texto.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}.<p> <br>`;