const h1 = document.querySelector('.container h1');

// h1.innerHTML = 'só pra conferir';

const data = new Date();
//h1.innerHTML = data.toString();


function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingueira', 'Segunda Feira', 'Teça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sábadeira',];
    return diasSemana[diaSemana];
    // let diaSemanaTexto;

    // switch (diaSemana) {
    //     case 0:
    //         diaSemanaTexto = 'Domingueira';
    //         return diaSemanaTexto;
    //     case 1:
    //         diaSemanaTexto = 'Segunda Feira';
    //         return diaSemanaTexto;
    //     case 2:
    //         diaSemanaTexto = 'Terça Feira';
    //         return diaSemanaTexto;
    //     case 3:
    //         diaSemanaTexto = 'Quarta Feira';
    //         return diaSemanaTexto;
    //     case 4:
    //         diaSemanaTexto = 'Quinta Feira';
    //         return diaSemanaTexto;
    //     case 5:
    //         diaSemanaTexto = 'Sexta Feira';
    //         return diaSemanaTexto;
    //     case 6:
    //         diaSemanaTexto = 'Sábadeira';
    //         return diaSemanaTexto;
    //     default:
    //         diaSemanaTexto = 'Dia de Semana INVALIDO!';
    //         return diaSemanaTexto;
    // }
}

function getNomeMes(numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',];
    return meses[numeroMes];
    // let nomeMesTexto;

    // switch (numeroMes) {
    //     case 0:
    //         nomeMesTexto = 'Janeiro';
    //         return nomeMesTexto;
    //     case 1:
    //         nomeMesTexto = 'Fevereiro';
    //         return nomeMesTexto;
    //     case 2:
    //         nomeMesTexto = 'Março';
    //         return nomeMesTexto;
    //     case 3:
    //         nomeMesTexto = 'Abril';
    //         return nomeMesTexto;
    //     case 4:
    //         nomeMesTexto = 'Maio';
    //         return nomeMesTexto;
    //     case 5:
    //         nomeMesTexto = 'Junho';
    //         return nomeMesTexto;
    //     case 6:
    //         nomeMesTexto = 'Julho';
    //         return nomeMesTexto;
    //     case 7:
    //         nomeMesTexto = 'Agosto';
    //         return nomeMesTexto;
    //     case 8:
    //         nomeMesTexto = 'Setembro';
    //         return nomeMesTexto;
    //     case 9:
    //         nomeMesTexto = 'Outubro';
    //         return nomeMesTexto;
    //     case 10:
    //         nomeMesTexto = 'Novembro';
    //         return nomeMesTexto;
    //     case 11:
    //         nomeMesTexto = 'Dezembro';
    //         return nomeMesTexto;
    //     default:
    //         diaSemanaTexto = 'Mes Invalido!';
    //         return diaSemanaTexto;
    // }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()}, ` +
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}


h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });