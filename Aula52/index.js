// escopo lexico ela sabe onde ela foi criadaa e todos os seus vizinhos contexto lexico

const nome = 'luiz';

function falaNome() {
    //const nome = 'otavio';
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'otavio';
    falaNome();
}

usaFalaNome()