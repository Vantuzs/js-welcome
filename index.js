// Задание с класрума маисвы \/

// const str = 'ayuioewww';
// const arr1 = ['a','y','u','o','e','i'];

// function res(str,array){
//   let sum = 0;
//   const  string = new String(str);
//   for(let i = 0; i<string.length; i++){
//     for(let j = 0;j<array.length;j++){
//       if(string[i] === array[j]){
//         sum+=1
//       }
//     }
//   }
  
//   return `${str} // ${sum}`
// }

// console.log(res(str,arr1));


// variant 2  

// const str = 'ayuioewww';
// const arr1 = ['a','y','u','o','e','i'];

// function res(str,array){
//   let sum = 0;
//   for(let i = 0; i<str.length; i++){
//     array.forEach((a)=>{
//       if(str[i] === a){
//         sum++
//       }
//     })
//   }
  
//   return `${str} // ${sum}`
// }

// console.log(res(str,arr1));




////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Памятка как строку записать в масив
const str = 'abracadabra';

Array.from(str)


*/

////////////////////////////////////////////////////////////////////////////////////////////////////////


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


// array.slice - Используется для создания нового масива, который складаеться только с какойто определённой части входного масива (Немутирующий)
// array.slice([start = 0],[end = array.length-1]); - end не включно - [start, end)
// Копирует масив с индекста М (включно) до индекса N (не вкл.)
// array.slice(M,N)


// array.splice - Используеться для изменения внутрености масива путем удаления, замены или добавления новых элементов (Мутированый)
// array.splice(start, deleteCount, ...items)

// start - начальный индекс, с которого мы начинаем изменять масив

// deleteCount - сколько элементов нужно удалить  с масива начиная с старт
// Если вы не укажете deleteCount будут удалены все элементы от statr до конца масива

// ...items - новые элементы, которые будут вставлены на место УДАЛЁНННЫХ элементов


// Методы, которае меняю выходной масив - мутуючи методи
// Методы, которые НЕ меняют выходной масив - немутуючи методы (Большинство методов масива)
// Мутация - перемена
// Мутабельной - то, что можно изменить
// Имутабельное - то, что не может быть изменено


// Приминивные типы(String, Number,Boolean,Null,Undefined,Symbol,Bigint) - Имутабельные

// С помощью splice вы можете:
// 1. Удалять нужное количество элементов (deleteCount), начиная с оперделенённого индекса масива (start)
// 2. Вставить нужное колечество элементов в масив (...items), в нужную позицию масива(start), при этом удаление элементов с масива может и не проихсодить (deleteCount = 0)
// 3. Вставить (...items) и удалять (deleteCount) элементы одновременно начная с определённой позиции масива (start)

// splice(M,L, ...items)
// M - с какого элемента начинать
// L - сколько элементов удалить 


// function saySomething(howToSay, whatToSay) {
//     howToSay(whatToSay);
// }

// saySomething(alert,'Hello user');
// saySomething(console.log,'hiiiii!');

// Как называются функции, которые принимают другие фукнции в качестве аргумента
// HOF - High Order Function

// Как называется фукнция, которую мы передали как аргумент
// callback - функция зворотнього виклику


// array.forEach - используется для перебору (Итерации) каждого элемента масива и выполнения орпеделёной задачи для каждого элемента
// array.forEach(callback -> (element) => {})

// array.map - работает как forEach, только map будет возвращать новый масив

// Когда мы используем map, в таком случае, значення которое вы возвращаете (return) с колбэку - оно и будет входить в результуючий масив


// Любая JS функция это Обьект

// chaining - обьединение методов в рядок,(лансюжок)

// array.sort() - используется для сортировки елементов в масиве (Мутирующий)
// array.sort([compareFunction]) - compareFunction это вйнкция в которой мы описываем методы сортировки

// array.filter - используется для создания нового масива, который имеет только те елменты, которые удовлетворяют определённому условию (Немутирующий)
// array.filter(callback)
// Колбек будет вызыватся для каждого елемента масива -> 
// -> эта колбек функция всередине filter она должна возвращать true/false для каждого елемента масива

// array.reduce - используется для вычесления котогото ОДНОГО значения на основе всех елементов масива (Немутирующий)
// reduce - сводит все елементы масива до какогото одного результатирующего значения
// array.reduce(callback, initialValue)

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Типы данных

// 7 примитивных типов данных: Number, String, Bigint, Boolean, null, undefined, Symvol
// 1 обьект 

// Примитивные типы данных они копируются всегда за значением и не имеют властивостей та методов
// Обьекты могут иметь властивости и методы и они всегда копируются за ссылкой




// Boolean
// // boolean.toString - приведение булевого типа до строки (не мутирующий)
// const bool = true;
// console.log(bool.toString());

////////////////////////////////////////////////////////////////////////////////////////////////////////

//null/undefined - они не имаеют обьектов обвёрток 

// console.log(undefined.test); // Ошибка!

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Number
// number.isInteger - используется для проверки является ли переданое значение целым числом

//number.isNaN - используется для проверки значения на NaN

//number.toFixed - используется для получения РЯДКОВОГО представления числа с нужным количеством знаков после десятичной запятой
// 15.1 , 15.2 ,15.3 ,15.4  --> 15
// 15.5 , 15.6,15.7,15.8,15.9 --> 16

////////////////////////////////////////////////////////////////////////////////////////////////////////

// String 
// string.length - длина рядка
// string.toUpperCase - приводит строку в верхний регистр 

// string.toLowerCase - приводит строку в нижний регистр

// string.charAt() - используется для возвращение символа с рядка за указаным индексом

// string.charCodeAt() - используется для возвращения кодовой точки Unicode символу с рядка за указаным индексом

// string.concat() - используется для обьединения (конкатенации) двух или больше рядков, и возвращает новый рядок(Не мутирующий)

// string.icludes - используется для проверки, имеется ли определённый подрядок в заданом рядке

// string.indexOf - используется для получения первого вхождения подрядка в рядке(возвращает или индекс подрядка или возвращает -1 если этого елемента нема)

// string.repeat - используется для повторения рядка заданное количество разов, и возвращает новый рядко который складается с повторений входного рядка

// string.replace - используется для замены части рядка другим рядком или регулярным выражением

// string.slice(начальный индекс(beginIndex) [, конечный индекс(endIndex)]) - используется для выбора части рядка с помощью вказаних индексов

// string.trim - используется для удаления пробелов с начала и конца рядка

// string.split - используется для розбивания вихидного рядка на подрядки, используя роздильник(separator) как точку разрыва между рядками и возвращает масив, что складается с этих подрядков




/*

Написать фуенцию, которая принимает рядок и делает каждую первую букву каждого слова с большой буквы

*/


function capitalizeWords(str) {
  // разбиваем рядок на отдельны строки
  let words =str.split(' ')
  for(let i = 0; i<words.length;i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }

return words.join(' ');
}

console.log(capitalizeWords('word flower third'));