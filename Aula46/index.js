function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,

    });
}

function funcaoDoIntavel() {
    console.log(mostraHora());
}


const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);


setTimeout(() => {
    clearInterval(timer)
}, 3000);


setTimeout(() => {
    console.log('ola mundinho!');
}, 5000);