// array.concat - используется для обьеднання двох або больше масивов в новый масив(немутирующий)
// array.concat(array1,array2, ..., arrayN)

// array.fill() - используется для заполнения всех элементов масива какмито одним значением(мутирующий)
// array.fill(value,[start,[end]]); // start, end - не обязательные

// array.includes - используется для проверки наявности определённого значения в масиве(немутирующий)
// array.includes(searchValue, [fromIndex])

// array.indexOf - используется для получения первого вхождения определённого значения в масиве(немутирующий)
// array.undexOf(serchElement, [fromIndex])

// array.join - используется для создания рядка, обьединяя все элементы масива(немутирующий)
// array.join([separator])

// array.push - используется для додавання одного или нескольки елементов в конец масива(мутирующий)
// array.push(elemetn1, ... , elementN);

// array.pop - он вызывается на масиве и не принимает никаких аргуметнов, Используется для удаления последнего элемента(мутирующий)

//arrau.shift - используется для удаления элемента с начала масива, и возващает его значение(мутирующий)

// array.unshift - используется для добавления одно или нескольки элементов на начало масива(мутирующий)
// array.unshift(emlement1, element2, ...,  elemtntN)

// console.log( arr2.unshift(-1,0));

//array.reverse - используется для перемены порядка елементов в масиве на противоположный(мутирующий)


// Методы, которае меняю выходной масив - мутуючи методи
// Методы, которые НЕ меняют выходной масив - немутуючи методы (Большинство методов масива)


// array.slice - Используется для создания нового масива, который складаеться только с какойто определённой части входного масива (Немутирующий)
// array.slice([start = 0],[end = array.length-1]); - end не включно - [start, end)
// Копирует масив с индекста М (включно) до индекса N (не вкл.)
// array.slice(M,N)

const arr1 = [1,2,3,4,5,6,7,8];
const arr2 = arr1.slice(2);



const users = [{
    name: 'John',
    lastname: 'Doe'
},{
    name: 'Jane',
    lastname: 'Doe'
},{
    name: 'Jack',
    lastname: 'Dosh'
}];

const newUsers = users.slice(); // newUsers - поверхнастная копия
const upUsers = newUsers.slice(); // upUsers - поверхнастная копия с поверхнастной копии



////////////////////

const newArr = [1, 2, 3, 4, 5, 6]; // link to ARRAY
const arrFromNewArr = newArr; // link to newArr (ORIGINAL ARRAY)
console.log(newArr === arrFromNewArr); // виведе true

const arrFromSlice = newArr.slice(); // new array; new address
console.log(newArr === arrFromSlice); // виведе false