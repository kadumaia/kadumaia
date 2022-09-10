let entradas = [];

const wrapperEntradas = document.querySelector('#entradas');

function adicionarKilometros(novaKilometragem) {
    wrapperEntradas.removeChild(wrapperEntradas.firstElementChild);
    const itemLista = document.createElement("li");
    const valorLista = document.createTextNode(novaKilometragem);
    itemLista.appendChild(valorLista);

    wrapperEntradas.appendChild(itemLista);
}

function btnSubmmit(evento) {
    evento.preventDefault();
    const kilometros = Number(document.querySelector('#inputKm').value);
    if (!kilometros) return;
    document.querySelector('form').reset();
    entradas.push(kilometros);
    adicionarKilometros(kilometros)
}

const form = document.
    querySelector('form')
    .addEventListener('submit', btnSubmmit);