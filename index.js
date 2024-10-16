// Логичные операторы

// Работать эти операторы будут с логичными типами данных (Boolean)

const a = true;
// "!"  - Заперечення 
!a; // false
console.log(!a);
// !!  -  двойное заперечення
!!a;
console.log(!!a);
// явное приведення до типа Boolean
console.log(Boolean(1));

// Поривняння чисел

const result1 = 4 > 5; // false
const result2 = 7 < 9; // true

// Поривняння рядков

const result3 = 'a' > 'A'; // 61 > 40 -> true (За юникод таблицей(таблица 16ричной системы, кода цифр))
const result4 = 'b' < 'u'; // 62 < 75 -> true
console.log(result3);
console.log(result4);

const result5 = 'test' > 'word'; // 74 > 77 -> false (Значение береться с первой буквы слова(Сравниваються первые буквы))
const result6 = 'test' > 'tord'; // 65 > 6F -> false (Если первые буквы совпадают то беруться следующие буквы)
console.log(result6); // false

// Проверка равности чисел

// "==" - приводит операнды до одного типа данных и потом сравнивает. НЕ РЕКОМЕНДУЕТСЯ 

const result7 = 5 == 6; // false
console.log(result7);

const result8 = 6 == 6;
console.log(result8);

const result9 = '9' == 9;
console.log(result9);
console.log(typeof result9);

// "===" - сравнивает операторы и за значение и за типом данных. РЕКОНДУЕТСЯ 

const result10 = '9' === 9; // false
const result11 = 9 === 9; // true
console.log(result10);
console.log(result11);

// Больше-или-равно ИЛИ меньше-или-равно
const result12 = 3 >= 3; // true
const result13 = 6 <= 7; // true

console.log(result13);
