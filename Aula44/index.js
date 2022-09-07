// try {
//     console.log(naoExisto)
// } catch (error) {
//     console.log('naoExiste não existe.');
//     console.log(error);
// }   

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y precisam ser numeros');
        //throw new Error('x e y precisam ser numeros');
    }
    return x + y;
}


try {
    console.log(soma(20, 30));
    console.log(soma('20', 30));
} catch (error) {
    console.log(error);
    //console.log('alguma coisa mais bonitinha');
}
