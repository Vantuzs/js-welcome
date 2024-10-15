//  перетворення (приведення) типу данных


//  перетворення типу данных - коли значення зминюе тип данных з одного на инший
// Иснуе 2 види перетворення данных: явне и неявне

// неявне перетворення типив(implicit type conversion)
let num = 6 - '1';

console.log(num);

// явне перетворення типив (explisit type conversion)
// (приведення типив)

let thisIsNumber = Number('45');

// boolean автоматично приводиться до типу Number при арефметических расчетах
// true -> 1
// false -> 0 

let booleanNumber = true + 1;  // 1 + 1 = 2
console.log(booleanNumber); // 2

// String

let thisIsString = String(45); // '45'
console.log(thisIsString);

let testString = null +''; // неявное преведення до string
console.log(testString);

// явне приведення типов лутше за неявне
let test = 15 - Number('17');
console.log(test);

// NaN - Not-a-Number
let notANumber = 2 * 'hello'; // приведення типов неможливе -> некоректна математична операция -> NaN
console.log(notANumber);

// () - оператор виклику функции
// математични операторы (+,-,*,/)
// оператор конкатенации

// оператор typeof - дозволяе отримати тип данных операнда 
let box = true;
console.log(typeof box);


