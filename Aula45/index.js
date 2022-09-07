// try {
//     //console.log(a);
//     //é esecutado quando nõo há erros
//     console.log('abri um arquivo')
//     console.log('manipulei esse arquivo me gero esse erro');
//     console.log('fechei o arquivo');

//     try {
//         console.log(b);
//     } catch (error) {
//         console.log('deu erro aqui loc');
//     } finally {
//         console.log('aqui tambem deu erro aqui pirocudo, finalmente');
//     }

// } catch (error) {
//     //é executado quando há erros
//     console.log('tratamento de erro vem aqui');
// } finally {
//     //sempre vai ser executado independentemente do erro
//     console.log('eu sempre sou executado')
// } 

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando instacia de Date.');
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pr-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);

} catch (error) {
    //tratar erro
    console.log(error);
} finally {
    console.log('tenha um bom dia!');
}

