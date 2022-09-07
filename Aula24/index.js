/**
 * Entre 0 - 11 bom dia
 * entre 12 - 17 boa tarde
 * entre 18 - 23 boa noite
 * IF pode ser usado sozinho
 * ELSE IF nao poder executado sozinho
 * ELSE preciso de um if anterionrmente
 * Eu posso ter varios else ifs na checagem
 * apenas pode ter UM ELSE na checagem
 * Ainda podemmos usar condições sem else if, utilizando apenas if e else
 */

// const hora = 40;

// if (hora >= 0 && hora <= 11) {
//     console.log('Bom dia!');
// } else if (hora >= 12 && hora <= 17) {
//     console.log('Boa tarde!');
// } else if (hora >= 18 && hora <= 23) {
//     console.log('Boa noite!')
// } else {
//     console.log('horario errado amigo');
// }

const tenhoGrana = false;
if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}