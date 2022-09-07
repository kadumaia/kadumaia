/**
 * Nessa aula aqui ele apenas explicou sobre recursividade, sem muita adrenalina, ele fez um 
 * for prar conta numero chamando uma função dela mesma 
 * 
 * */

function recursiva(max) {
	console.log(max);
	if (max >= 1000) return;
	max++;
	recursiva(max);
}

recursiva(0);