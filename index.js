let box1 = 'Hello';

let box2; // undefined
box2 = 15;

const secretWord = 'superSecret!Kyivstar!Cybersecuruti';
// console.log(secretWord);

// secretWord = 'wordd'; // <<-- перевизначить константу невозможно!!! 0о0

// console.log(box2); // не виконаеться через помилку на рядку 9

let result1 = 1 + 2; // 3
// console.log(result1);
let result2 = 3 - 2; // 1 
// console.log(result2);
let result3 = 2 * 2; // 4
console.log(result3);
let result4 = 4 / 2;
//console.log(result4); // 2

let result5 = 0.1 + 0.2;
console.log(result5);

let notAllowed = 10 / 0;
//console.log(notAllowed); // Infinity-бесконечность

let brrrr = 10 / 'hello world';
console.log(brrrr); // NaN 
// NaN - Not a Number -->>> операция, неприпустима с точки зору математики

// +
// складае числа 
// склеивает строки (конкатенация)
let newLine = 'Hello' + 'world';
// console.log(newLine);

newLine = 5 + 'hello'
// console.log(newLine);

newLine = '1' + 1;
console.log(newLine); // 11