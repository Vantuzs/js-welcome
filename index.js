/*

High Order Function (HOF, Функция высшего порядка) - 
функция, которя принимает другою функцию в качесве аргумента


*/

function calculator(num1, num2, functionLink){ // HOF
  let result = functionLink(num1,num2);
  return result;
} 
                      //num1    //num2      //functionLink
console.log( calculator(5,        5,          sum)); // sum - посылание на функцию

// Используя калькулятор, поднесите число 1 в степень числа 2
console.log( calculator(3, 2, function (a, b) { // callback
  return a**b;
}));


function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multy(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
/*

High Order Function(HOF, Функция высшего порядка) - 
функция, которя принимает другою функцию в качесве аргумента 

Callback - Колбек (Функция зворотньго виклику),
функция, ЯКУ мы передали как агрумент при вызове другой фукнции

 */