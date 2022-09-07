const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'footer', texto: 'frase 3' },
    { tag: 'section', texto: 'frase 4' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];   //desustruturação do objeto
    // const elemento = elementos[i];
    // console.log(elementos[i].tag);
    let tagCriada = document.createElement(tag);
    // tagCriada.innerHTML = texto;
    // tagCriada.innerText = texto;
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
    console.log(tag, texto);
}

container.appendChild(div);