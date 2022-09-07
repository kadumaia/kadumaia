/**
 * vamos falar sobre funções geredoras, um rercurso espeecial de quase pausar
 * o codigo em um ponto especifico, laisy evaluation
 * 
 * função geradora!
 * */


function* geradora1() {
	yield 'Valor 1';
	yield 'Valor 2';
	yield 'Valor 3';
} ;

function* geradora2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

function geradora3(){
    yield 0;
    yield 1;
    yield 2;

}

function geradora4(){
    yield 3;
    yield 4;
    yield 5;

}

const g4 = geradora4();

function* geradora5 (){
    yield function (){
       console.log('vim do y1');
    };

    yield function(){
        console.log('vim do return')
    };

    //...

    yield function(){
        console.log('vim do y3');
    }
};

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
const func4 = g5.next().value;
const func5 = g5.next().value;
const func6 = g5.next().value;

func1();
func2();
func3();