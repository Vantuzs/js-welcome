const num1 = Number(prompt('Введите 1 число:'));
const num2 = Number(prompt('Введите 2 число'));

//  Задача: написать функицию, которя принимает 2 числа и додае их

function addTwoNumbers(arg1, arg2){
    console.log(num2);
    return arg1+arg2;
}

let result = addTwoNumbers(num1, num2);

console.log(result);


// Область видимости - визначення доступности и видимости переменных и функций в певниз частинах коду

/*  в JS существует 2 основные области видимости:

1. Глобальная область видимости - глобально область видимости обхватывает весь документ (програму)


*/

const globalVarialble = 10;

function globalFunction(){
    // тело функции
}

console.log(globalVarialble); // 10

// 2. Локальная область видимости - определяеться блоками кода (фигурные скобками)

function testFunction(num1){
    const localVariable = 20; // Локальная переменная testFunction
    if(true){
        const  innerVariable = 30; // Локальная переменная if
        console.log(innerVariable); // 30
        console.log(localVariable); // 20 , localVariable - находиться в глобальной области видимости по отношению до if
        console.log(globalVarialble); // 10 , globalVariable - находиться в глобальной области видимости по отношению до if
    }

    console.log(localVariable); // 20
    // console.log(innerVariable); // Error - патамушта эта переменная живет в if, и ее не видно от сюда
}

testFunction();

// console.log(localVariable); // Ошибка: localVariable недоступтна тут =(

// 3. Функциональная область видимости - визначае область видимости, за якои все переменные доступтные всередине фукнций, незалежно от блоков, которых они оголошени
// (var) 


// Summary
/*

Scope - область видимости
(это все наши переменные, обьекты и тд., которые нам доступтны)

Local Scope (локальная область видимости) - это все наши переменные, обьекты и тд., ВСЕРЕДИНЕ нашей фукнции

Global Scope (глобальная область видимости) - это все наши переменные, обьекты и тд., с поточного коду


*/