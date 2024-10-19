// console.log();
// alert('Hello');
// const greeting = 'Hello, '
let firstOperand = Number(prompt('Введите первое число ')); // '5' --> Number('5') -- 5:number
let secongOperand = Number(prompt('Введите второе число ')); // '10'  --> Number('10') -- 10:number

 // Это актуально до яваного приведения prompt к Number --->>>>           // '5' * '10' (крч джаваскрипс такой пришел, посмотрел что мы хотим умножить строчку на строчку, подумал что за х****я, убрал кавычки'', посмотрел что это выглядит как цифры-числа, и смог решить задачку поменяв строчку на числа)
// console.log(firstOperand*secongOperand);

let result = firstOperand + secongOperand;

if(Number.isNaN(result)){ // Number.isNaN(result) === true
    console.log('Ты не прав, введи число!');
} else{
    console.log(result);
}