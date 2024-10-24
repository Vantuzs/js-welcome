/*

Детерминована фукнция - 
функция, при одних и тех же аргументах в вызове возвращает ЗАВЖДИ один и той самий результат

*/

function sum(a, b) {
  // Детерминована фукнция
  return a + b;
}

// console.log( sum(2, 2));
// console.log( sum(2, 2));
// console.log( sum(2, 2));
// console.log( sum(2, 2));

let variable = 5;

function addToNumberSomeVariable(number) {
  // НЕДЕТЕРМИНОВАНА ФУКНЦИЯ
  return number + variable;
}

console.log(addToNumberSomeVariable(5)); //10
console.log(addToNumberSomeVariable(5));
console.log(addToNumberSomeVariable(5));
console.log(addToNumberSomeVariable(5));

variable = 20;

console.log(addToNumberSomeVariable(5)); //25

// Если функция работает только с теми данными, которые в нее приходят - Детерминована
// Если функция "вылазит в свет(global scope  и тд.)", то в таком случае, она может не всегда возвращать один и тот же результат при одних и тех же входных параметров - Недетерминована
