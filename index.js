// Зад. 1
// 1
const a = 12;
const b = 2;

console.log(a*b);

//2

const c = 10;
const d = 5;

console.log(c/d);

//3

const e = 20;
const f = 30;

console.log(e+f);

//4 

const number = 11;
const boolean = false;
const text = 'java script';
const textNumber = '100';

console.log(number);
console.log(boolean);
console.log(text);
console.log(textNumber);

//5 

let num =1;

console.log(num += 11);

console.log(num -= 11);

console.log(num *= 11);

console.log(num /= 11);

console.log(++num);

console.log(--num);



// Зад.2

//1

const square = Number(prompt('Введите число и мы поднесём его в квардрат: '));

alert(square**2 + ' = ' + square + ' в квадрате');

//2

const one = Number(prompt('Введите 1 число: '));
const two = Number(prompt('Введите 2 число: '));

alert((one+two)/2 + ' - Среднее арефмитическое ' + one + ' и ' + two);

// 3

const min = Number(prompt('Введите количество минут:'))

alert(min*60 + ' - секунд в ' + min + ' минутах')


//4 

const greeting = 'Hello,';
const userName = prompt('Введите свое имя')

alert(greeting + userName)