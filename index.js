// Задача1. написать функцию, которая принимает 2 числа и возвращает то число, что больше

const value1 = Number(prompt('Введите 1 число:'));
const value2 = Number(prompt('Введите 2 число'));

const getBigger = function(num1, num2){ // num1, num2 - формальные параметры
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Мы ждем числа!');
    } else if(num1>num2){
        return num1;
    } else {
        return num2;
     }
}

console.log(getBigger(value1, value2)); // value1, value2 - фактические парметры


const chislo1 = Number(prompt('Введите 1 число:'));
const chislo2 = Number(prompt('Введите 2 число:'));

const middleArifmetic = function(num1, num2){
    // let average = (num1+num2)/2;
    // return average;                это тоже легал способ
    return (num1+num2)/2;    
}
 
console.log(middleArifmetic(chislo1, chislo2));  // я в ахуе что так можно=3

const number1 = Number(prompt('Введите 1 число:'));

function isEven(num1){
    if(num1%2 === 0){
        console.log('СоСи ХуЙ');
        return
    } else {
        return false;
    }
}

isEven(number1);
