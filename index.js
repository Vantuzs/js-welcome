// Унарные, бинарные, тернырные 

// Тернарный оператор - требует 3-х операндив

// Тернарные оператор - дозвоняэ выбрать 1 из 2 операндив на основе заданой умови.

// let result = умова ? операнд1 : операнд2;
// операнд1 - значення для переменной result, якщо умова буде true
// операнд2 -  значення для переменной result, якщо умова буде false

const age = 17;

// Задача: реализовать обмеження, что бы особы которые не досягли 18 лет, не могли покупать алкогольные и табачные изделия.
const isAdult = age < 18 ? false : true;


console.log(isAdult);
