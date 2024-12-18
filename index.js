
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


// // variant 2  

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


////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

Написать фуенцию, которая принимает рядок и делает каждую первую букву каждого слова с большой буквы

*/


// function capitalizeWords(str) {
//   // разбиваем рядок на отдельны строки
//   let words =str.split(' ')
//   for(let i = 0; i<words.length;i++){
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
//   }

// return words.join(' ');
// }

// console.log(capitalizeWords('word flower third'));

/*Задача1

Написать фукнцию checkSpam, которая возвращает true, если переданый рядок имеет слова 'xxx'или  'viagra'
Если запрещенных слов в рядке нету - возвращает false
*/ 

// function checkSpam(str){
//   let otv = null;
//   let string = str.toUpperCase().split(' ')
//   string.forEach((a,index)=> {
//     let danger = a.indexOf('XXX')
//     let viagra = a.indexOf('VIAGRA')
//     if(danger >= 0){
//       console.log(`Index -> ${index} `);
//       console.log(a);
//       console.log(`${danger} xxx -> `);
//       return otv=true
//     } else if(viagra>=0){
//       console.log(a);
//       console.log(`${viagra} Viagra -> `);
//       return otv=true
//     }
//   })
//   if(otv === null){
//     otv=false
//   }
//   return otv
  
// }

// console.log(checkSpam('Wwwxw dsawdsxxxaw viagra viagra  dxxsadw  ewqewqe e weqeqweq '));
// //

// function checkPalinrom(str) {
//   let string = str.toLowerCase()
//   let string2 = Array.from(string).reverse().join('')
  
  
  
//     if(string === string2){
//       console.log(`Cajual string -> ${string}`);
//       console.log(`Reverse string -> ${string2}`);
//       return true;
//     }else{
//       console.log(`Cajual string -> ${string}`);
//       console.log(`Reverse string -> ${string2}`);
//       return false;
//     }
// }

// console.log(checkPalinrom('anna'))


// ////////////////////////////////////////////////////////////////////////////////////////////////////////



// const date = new Date(); // по умолчанию будет создана системная дата и время
// const date1 = new Date('12-31-2023');

// console.log(date1.getDate()); // 31; getDate - используется для получения дня месяца с даты 
// console.log(date1.getDay()); // 0; getDay - используется для получения дня недели с даты(0- воскресенье.... 6 - субота)
// console.log(date1.getUTCFullYear()); // 2023; getFullYear - используется для получения года с даты
// console.log(date.getHours()); // getHours - используется для получения часа с даты
// console.log(date1.getTime()); // get.Time - используется для получения количества милесекунд, которые прошли с 1 января 1970 года 00:00:00.. 

// // Задача: найти сумму первого 1000000 чисел

// let sum = 0; // 1. Создаем перемену

// const time1 = new Date(); // отрезок часа До начала операции 2

// for(let i=0; i<=1000000;i++){ // 2. Накапливаем сумму
//   sum+= i
// }

// const time2 = new Date();// Отрезок времени После операции 2

// console.log(sum); // выводим результат

// console.log(time2.getTime() - time1.getTime()); // количество затрачених милесекунд на операцию 2


// // Пример с консоль.таймами

// console.time('operation') // Включили таймер

// let sum2 = 0;
// for(let i=0; i<=1000000;i++){ // 2. Накапливаем сумму
//   sum2+= i;
// }

// console.timeEnd('operation')

////////////////////////////////////////////////////////////////////////////////////////////////////////

// const value = prompt("Введите высоту и ширину треугольника 1 числом");

// for (let i = 0; i < value; i++) {
//   let line = "";
//   for(let j =0;j<value;j++){
//     if(i===0 || i===value-1 || j===0 || j===value-1 || i===j ){
//       line+='*'
//     } else {
//       line+= ' '
//     }
//   }
//   console.log(line);  
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////

// function ladar(){
//   return {
//     Stair: 1,
//     up: function(){
//       this.Stair++
//       return this;
//     },
//     down: function(){
//       this.Stair--
//       return this;
//     },
//     showStair: function(){
//       console.log(this.Stair);
//       return this;
//     }
//   }
// }

// const obj = ladar()
// console.log(obj);

////////////////////////////////////////////////////////////////////////////////////////////////////////


// function formatDate(str){
//   const arr1 = Array.from(str)
//   let year = '';
//   let mouth = '';
//   let day = '';
//   for(let i = 0; i<arr1.length;i++){
//   if(arr1[i]==='-'){
//     continue
//   }else if(i<=3){
//     year+= arr1[i]
//   } else if(i>4 && i<7){
//     day+= arr1[i]
//   } else if(i>=8){
//     mouth+= arr1[i]
//   }
// }
// return `${day}.${mouth}.${year}`

// }




// 15(4)
// function formatDate(str){
//   const arr= str.split('-');
//   return `${arr[0]}.${arr[1]}.${arr[2]}`
// }


// console.log(formatDate('2021-22-09'));


////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 

Клас Человек и похидный клас Студент

1. Создайте базовы клас людина с такими властивостями:
- ФИО
- Возраст
- Пол


2. Создайте похидный класс Студент, который наследует властивости класа Человек
Добавте к класу Студент такие дополнительный властивости:

- Год Вступу
- Номер зачетки
- Средний бал


3. Реалезуйте следующие методы

В класе Человек
- greeting()- этот метод возвращает приветствие для человека, в зависимости от ее пола(Mr. or Mrs.)

В классе Сутдента:
- isExcellentStudent()- этот метод проверяет, есть ли студент отличныиком на основе его среднего бала.
Если средний бал студент выший или равный 90, то метод вернет true, в другом случае - false




////////////////////////////////////////////////////////////////////////////////////////////////////////


*/
// OOП

/* 

1. ООП збудоване навколо обьктов
2. Подил нужен для того, что бы можно было создавать, обслуживать и переделывать какието части програмы не затрагивая другие
3. Сенс обькты в том, что он имеет какието методы, тоесть он чтото умеет делать, но при этом, другие обьекты они не знают как он это делает 
4. Обькт имеет понятиея Атрибута и Метода
Атрибут - любые данный которые хранятся всередине обькта
Методы - любые действия который можно выполнять с обьектом, атрибутами обьекта 
Атрибуты обычно выражаются переменными, а методы - функциями
5. Обьекты можно создавать за шаблоном - такие шаблоны называют класами

*/


// Геттеры и сеттери - аксессори (от англ. access - доступ)


// Абстракция - когда мы сосредотачиваемся только на суттэвих для задания деталях(когда описуем обькт) и игнорируем все другое
// Чем меньше характеристик у обькта, тем лутше абстракция, но ключевые характеристики нельзя убирать

// что бы работать с абстракциями, используют интерафейс
// Интерфейс - способ взаимодействия с обьктом, который вызначае, какие операции можно сделать с этим обьектом и какие данный можно получить или изсенить

// Инкапсуляция - процес обьединения данных и методов в 1 обьекте и скрытие деталей реалезации от пользователя

// В чем отличие между инкапсуляциэю и абстакцией?
// Инкапсуляция сосредоточена на организации и скрытие деталий реализации обькта
// Абстракция спрощуэ сложность систем путем выдиления ключевых аспектов и скрытии незначных деталей



// Спадкування - возможность к копированию, возможность описать новый класс на основе уже сущетсвующего

// Полиморфизм - дозволяе использовать общий интерфейс (методы базового класа) через екземпляры похидних класов
// Суть полифморфизма полягае в том, что мы можем одн  и тотже самый код использовать для обьектов разных класов


// class Figure{ // абстрактный клас(клас шаблон)
//     constructor(sideQuantiti){
//         this.sideQuantiti = sideQuantiti;
//     }

//     set sideQuantiti(value){
//         if(typeof value !== 'number'){
//             throw new TypeError('Side must be a number')
//         }
//         if(value < 0){
//             throw new RangeError('Side cannot be less than 0')
//         }
        
//         this._sideQuantiti = value
//     }

//     get sideQuantiti(){
//         return this._sideQuantiti
//     }

//     getArea(){ // абстрактный метод

//     }
// }

// class Triangle extends Figure{ // 
//     constructor(a,b,angle){
//         super(3);
//         this.a = a;
//         this.b = b;
//         this.angle = angle;
//     }

//     set a(value){
//         if(typeof value !== 'number'){
//             throw new TypeError('Side must be a number')
//         }
//         if(value < 0){
//             throw new RangeError('Side cannot be less than 0')
//         }

//         this._a = value
//     }

//     get a(){
//         return this._a
//     }

//     set b(value){
//         if(typeof value !== 'number'){
//             throw new TypeError('Side must be a number')
//         }
//         if(value < 0){
//             throw new RangeError('Side cannot be less than 0')
//         }

//         this._b = value
//     }

//     get b(){
//         return this._b
//     }

//     set angle(value){
//         if(typeof value !== 'number'){
//             throw new TypeError('Side must be a number')
//         }
//         if(value < 0){
//             throw new RangeError('Side cannot be less than 0')
//         }

//         this._angle = value
//     }

//     get angle(){
//         return this._angle
//     }

//     getArea(){ // виртуальный метод
//         return this.a * this.b * Math.sin(this.angle)
//     }
// }


// class Square extends Figure{
//     constructor(a){
//         super(4);
//         this.a = a;
//     }
//     set a(value){
//         if(typeof value !== 'number'){
//             throw new TypeError('Side must be a number')
//         }
//         if(value < 0){
//             throw new RangeError('Side cannot be less than 0')
//         }

//         this._a = value
//     }

//     get a(){
//         return this._a
//     }
//     getArea(){ // виртуальный метод
//         return this.a**2
//     }
// }

// const square = new Square(4);
// const triangle = new Triangle(3,5,2)

// Задача: написать ОКРЕМУ функцию, которая будет принимать обьект какойто фигуры и будет вызывать у этой фигуры метод getArea

// function getFigureArea(figure){
//     if(figure instanceof Figure){
//         return figure.getArea();
//     }
//     throw new TypeError('параметр не есть фигура ЕЖЕ')
// }

// console.log(getFigureArea(square));


/* 

Переваги

1. Визуально код становиться проще
2. Меньше одинакового кода
3. Сложные програмы пишуться проще
4. Увеличивается скорость написания (достаточно быстро можем прийти до минимально работающего простотипа)



НЕдолики

1. Сложно начать работать
2. Требует больше памяти 
3. Иногда продуктивность кода может быть довольно низкой
( ссучасными мощьностями процесоров недолик №3 невалируется)
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////



/* 

Фабричный метод - способ создавать обьеты, который позволяет нам не указывать конкретный клас обьекта
Используем специальную "фабрику" для создания обьктов.
Фабрика знает какой имено обькт нужно созвонится и возвращает его нам

new Student(); // НЕ РОБИМО!

Звертаємось до фабрики, фабриці повідомляємо, що нам потрібно, фабрика уже буде робити нам екземпляри потрібного класу (new Student())

*/

// Абстрактный клас или интерфейс
class Animal { 
    constructor(nickname){
        this.nickname = nickname
    }

    makeSound(){ // абстрактный метод

    }
}

// Конкретный клас для собаки

class Dog extends Animal{
    constructor(nickname){
        super(nickname);
    }

    makeSound(){ // Виртуальный метод
        console.log('Gav-Gav');
    }
}

// конкретный клас для кота
class Cat extends Animal{
    constructor(nickname){
        super(nickname)
    }

    makeSound(){ // Виртуальный метод
        console.log('Meow-Meow');
    }
}

// Фабричный клас который создает обькты
class AnimalFactory {
    static createAnimal(type,nickname){
        switch(type){
            case 'dog': return new Dog(nickname);
            case 'cat': return new Cat(nickname);
            default: throw new Error(`Неизветсный тип животного: ${type}`)
        }
    }
}


// Использование фабрики для создания обьктов


// Создать обькт собаки

const dog = AnimalFactory.createAnimal('dog', 'Tuzick');

// Создать обькт кота
const cat = AnimalFactory.createAnimal('cat','Murzik')

////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 

Symbol - представляет собой уникальный идентефикатор.
Каждый созданный символ имеет свой собственный уникальный идентвефикатор который нигде и никогда не будет повторятся

Особенность символов - они всегда уникальные
Каждый созданный символ, матиме уникальный идентефикатор который нигде и никогда не будет повторятся
*/

const mySimbol = Symbol() // без new!!!!!!!!!!!!!!!!!!!!!!!!

// const symb2 = Symbol('My second symbol'); // label for human

const obj = {
    //  В обьктах ключами могут быть рядки или символы
    test: 1,
    [mySimbol]: 123,
}

// console.log(obj[mySimbol]); // 123



////////////////////////////////////////////////////////////////////////////////////////////////////////


// const arr = [2,4,1,3,7,3,2,1,3,5,2,8,2,4,1];

// // Задача: реализовать функцию линейного поиска какогото значаения в масиве

// function linearSearch(array, value){ // линейнная сложность алгоритма
//     for(let i = 0;i<array.length;i++){
//         if(array[i]=== value){
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(linearSearch(arr, 3));

// // Линейная сложность, кода Big O, тоесть, когда столько итераций(операций), сколько у нас входных данных




// // Квадратическая сложность

// //Задача: вывести таблицу умножения

// function multyTable(limit){ // Квадратическая сложность
//     const table = [];
//     for(let i = 1;i<=limit;i++){
//         for(let j = 1;j<=limit;j++){
//             table.push(`${i} * ${j}=${i*j}`)
//         }
//     }

//     return table;
// }

// multyTable(1); // 1(1^2=1)
// multyTable(2); // 2(2^2=4)
// multyTable(3); // 3(3^2=9)
// // Квдратическая сложность - когда мы на выходе получаем количество входных данных(n) в квадрате




// // Логарифмическая сложность ---> 100 входных данный припадает примерно 6 операций

// const arr2 = [2,3,4,5,6,7,8,9,10];



////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Map (Карта, Мапа, Словарь)

Сохраняет пары "ключ: значение"
Имеет размер (size)

Отличия от обычного обьекта:
1. Запоминает елементы в том же порядке, в котором мы их добовляем
2. Ключем может быть будь какой тип данных: String, Number, Boolean, BigInt, Object -> Function
(Обькты (в том числе функици)) - передаются за ссылкой



Ключ в Мар должен быть уникальным

*/


const map = new Map();

map.set(1,{});
map.set('1', 'value');

map.get('1') // value

map.has(1) // true


const vocalbuary = new Map();

vocalbuary.set('cat', 'кот');
vocalbuary.set('dog', 'собака');
vocalbuary.set('eat', 'кушать');

// Написать функцию которая принимат строку английским языком и переводит эту строку на украинский язык, используя словарь

function translater(str,vocalbuary){
    const arrayWords = str.toLowerCase().trim().split(' ');
    // У нас есть словаря
    // перебрать масив arrayWords и перевод для каждого англ. слова в масиве доствать с нашего словаря 
    const translatedArray = arrayWords.map((word) => {
        if(vocalbuary.has(word)){
            return vocalbuary.get(word)
        } else {
            return word;
        }
    });

    return translatedArray.join(' ');
}

// console.log(translater('       Cat eat dog        ', vocalbuary));





// Задача: сохранить расписание занятий, используя дни недели как ключи, а значения будут списки занятий, которые идут в определённый день

const schedule = new Map();

schedule.set('Понедельник', ['Математика', 'Физика']);
schedule.set('Вторник', ['Английский', 'История']);
schedule.set('Среда', ['Химия', 'География']);
schedule.set('Четверг', ['Литература', 'Биология']);
schedule.set('Пятница', ['Информатика', 'Физкультура']);
// Получения расписания занятий для опеределённого дня
// console.log(schedule.get('Понедельник'))

// // Проверка, есть ли расписание для определённого дня
// console.log(schedule.has('Ce,,j=='));

// // Получения количества дней занятий в расписании
// console.log(schedule.size);




// new Map(); // <-- [[key1, value1], [key2, value2], [key3, value3]];

// // Map.prototype.entries - метод, який повертає ітератор. Ітератор повертає пари ключ-значення для кожного елемента

// const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);

// const entriesIterator = map1.entries();

// entriesIterator.next().value; // ['key1', 'value1']
// entriesIterator.next().value; // ['key2', 'value2']
// entriesIterator.next().value; // value: undefined, done: true


// // Map.prototype.keys - метод, який повертає ітератор з усіма ключами з об'єкта Map

// const keysIterator = map1.keys();

// keysIterator.next().value; // 'key1'
// keysIterator.next().value; // 'key2'
// keysIterator.next().value; // undefined, done: true

// // Map.prototype.values - метод, який повертає ітератор з усіма значеннями ключей з об'єкта Map

// const valuesIterator = map1.values();

// valuesIterator.next().value; // 'value1'
// valuesIterator.next().value; // 'value2'
// valuesIterator.next().value; // undefined, done: true



// // Map.prototype.forEach - використовується для ітерації (перебору) всіх елементів у Map і виклику певної функції (callback) для кожного елементу

// // Задача: вивести на консоль мапу

// map1.forEach((value, key, map) => {
//   console.log(`${key} - ${value}`);
// });



// // Map.prototype.delete - використовується для видалення пари ключ-значення з об'єкта Map відповідно до якогось ключа
// //map1.delete('key1');

// console.log(map1.has('key1')); // false
// console.log(map1.get('key1')); // undefined


// // Map.prototype.clear - використовується для повного очищення об'єкта Map, видаляючи всі пари ключ: значення, які знаходяться там
// //map1.clear();

// console.log(map1.size); // 0



// // Задача: вивести на консоль мапу

// console.log(...map1);
// console.log(...map1.keys());
// console.log(...map1.values());



////////////////////////////////////////////////////////////////////////////////////////////////////////

// Set - множина (множество) набір унікальних значень


const set = new Set();

// Set.prototype.add - додає новий елемент із заданним значенням у кінець об'єкта Set

set.add(1);
set.add(4);
set.add('hello');


// Set.protoype.has - перевіряє наявність елементу у множині

// console.log(set.has(1)); // true
// console.log(set.has(12)); // false


// Set.prototype.delete - видаляє елемент з множини

set.delete('hello');


// Set.prototype.values - використовується для отримання ітератора, який повертає нам всі значення з об'єкта Set

const valuesIterator = set.values();

valuesIterator.next().value; // 1
valuesIterator.next().value; // 4
valuesIterator.next().value; // undefined, done: true

const arrayFromSet = [...set.values()];


////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Задание 1

Дано масив: [2,3,3,5,6,77,77,5,1,1,12,12,13]
Вернуть масив без повторений

*/
// var1
const set2 = new Set([2,3,3,5,6,77,77,5,1,1,12,12,13]);
// const arraySet = [...set2.values()];


// var1

const arrWithoutDoubles = [...new Set([2,3,3,5,6,77,77,5,1,1,12,12,13]).values()]


/* 
Задача 2

Дано два маисва:

const arr1 = [4,3,7,5,-11,];
const arr2 = [3,4,8,7,2,-11];

Вернуть с функции масив, что складается с разници двух масивов(тоесть тех значений, которы не повторяются в обох масивах)

// логика:
вы принимаете 2 масива
нужно сделать новый масив, но там не должно быть дубликатов

*/

const arr1 = [4,3,7,5,-11,];
const arr2 = [3,4,8,7,2,-11];

function returnArr(arr1,arr2){
    return [...new Set([...arr1,...arr2])]
    
}

// console.log(returnArr(arr1,arr2))




////////////////////////////////////////////////////////////////////////////////////////////////////////



const monitor = {
    sizes: {
        height: {
            value:30,
            scale: 'cm // 1'
        },
        widht: {
            value: 50,
            scale: 'cm // 2'
        }
    },
        brightness: 750,
        refresh: {
            value: 144,
            scale: 'Ggrc',
        },
        color: 'black',
        resolution: '4K'
    
}

// const height = monitor.sizes.height.value;

// const {resolution,color: monitorColor} = monitor

// console.log(resolution);
// console.log(monitorColor);


// Задача: вытянуть value для высоты и ширины монитора

const {sizes: {height: {value: heightValue, scale: scaleHeight}, widht: {value: widhtValue, scale: scaleWidht}}} = monitor

// console.log(heightValue);
// console.log(widhtValue);
// console.log(scaleHeight);
// console.log(scaleWidht);

const {color,brightness,resolution, ...restOfMonitor} = monitor


// У нас есть обькт юзера

// const user = {
//     name:'John',
//     age: 30,
//     address: {
//         city:'Kyiv',
//         country: 'Ukraine'
//     },
//     contacts: {
//         email: 'john@gmail.com',
//         phone: '+3809944875717'
//     }
// }

// Задача: с использованием деструктуризации получить name, city email и phone

// const {name: userName, address: {city}, contacts: {email,phone}} = user

// console.log(userName,city,email,phone);



/* 

Существует 3 вида деструктуризации в JS:
+ 1. Деструктуризация обьктов
+ 2. Деструктуризация входных параметров
+ 3. Деструктуризация масивов

*/

function getFullName({firstName, lastName,...restObject}){ // все другое кроме firstName, lastName игнорируется
    console.log(restObject);
    return `${firstName} ${lastName}`
}

const user3 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 42,
    geolocation: '42.2232154321 56.3213214521',
    browser: 'Chrome'
}

console.log(getFullName(user3));











const arr = [1,2,3,4,5,6];
// const firstElement = arr[0]

const [firstElement, secondElement, ...restOfArr] = arr;









////////////////////////////////////////////////////////////////////////////////////////////////////////

// примеры с видоса 046 1:45:00








// const user2 = {
//     name:'John',
//     age: 30,
//     address: {
//         city:'Kyiv',
//         country: 'Ukraine'
//     },
//     contacts: [
//         {email: 'john@gmail.com'},
//         {phones: ['+3809944875717', '+380554113443', '+380969949292']}
//     ]
// }

// // const {contacts: {phones}}= user2

// // const [firstNum,twoNums,threeNums] = phones


// // const {contacts: {phones: [firstNum,twoNums,threeNums]}}= user2





// const {contacts: [emailObject, phonesArray] } = user2

// // const {email: email}= emailObject
// // const {phones: [firstNum,twoNums,threeNum]} = phonesArray

// console.log(email);
// console.log(firstNum, twoNums);






////////////////////////////////////////////////////////////////////////////////////////////////////////


// Замикання дозволяє функціям зберігати доступ до змінних, навіть коли ці функції завершують своє виконання
// Замикання - здатність функції запам'ятовувати локальну область видимості

let value = 10; // глобальна область видимості


function wrapper() {
    let value = 20; // локальна область видимості

    console.log('WRAPPER function', value);

    return function log() {
        console.log('LOG function', value);
    }
}







//////////////


// function counter() {
//     let i = 0;
//     i++;
//     return i;
// }

function makeCounter() {
    let i = 0;
    return function() {
        return i++; // i - змінна у замиканні
    }
}




/////////////

function makeCounterVersion2() {
    // Якщо буде бажання - спробуйте зробити методи, які будуть збільшувати/зменшувати counter на певну кількість одиниць
    let counter = 0;

    return {
        increment() {
            const val = Number(prompt('Ведите число на которое хотите увеличить значение:'))
            return counter+=val;
        },
        decrement() {
            const val = Number(prompt('Ведите число на которое хотите уменьшить значение:'))
            return counter-+val;
        }
    }
}

const fnObj = makeCounterVersion2();