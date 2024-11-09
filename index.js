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
// array.forEach(callback)

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

function MyArray() {
    this.length = 0;
}

function MyArrayProtorype() {
    this.push = function(){
        // Значение додати в конец масива
        for(let i = 0;i<arguments.length;i++){
            this[this.length] = arguments[i];
            this.length++;
        }
        // this[this.length] = arguments;
        // this.length++;
        return this.length;
    },

    this.pop = function(){
        if(this.length >0){
            // 1. Сохранить последний елемент
            const lastItem =  this[this.length - 1];
            // 2. Удалить последний елемент с масива
            delete this[this.length - 1];
            // 3. Зменшити длину масива на 1
            this.length--;
            // 4. Вернуть последний елемент
            return lastItem;
        } else {
            return undefined;
        }
    },

    this.forEach = function(callback){
        
        for(let i = 0;i<this.length;i++){
            callback(this[i], i,this);
        }
        return ;
    }
}

MyArray.prototype = new MyArrayProtorype(); // прототипне посилання

const arr = new MyArray();
arr.push(1,2,3,4,5);

arr.forEach((item) => {
    return console.log(item**2);
})
// Какая разница между __proto__ та .prototype

// __proto__ работает только тогда когда мы литерально создали обьект
{
    //
}

// .prototype - когда обьекты создаются с помощью конструктора 

/*

Задача 1

Задача: сделать функицю конструктор для сходив. (ladder)
Обьект имеет властивость:
currentStair - ступенька на которой мы сейчас находимся, изначально = 0

Имеет методы: <<<<----- .prototype
up() - поднимает на ступеньку ниже
down() - опускает на ступеньку выше 
showStair() - показывает,  на какой ступеньке мы сейчас находимся

*/

function Ladder() {
    this.currentStair = 0;
}


function LaddrePrototype() {
    this.up = function(){
        this.currentStair++
        return this;
    }
    this.down = function(){
        if(this.currentStair <= 0){
            this.currentStair=0
            return this;
        } else{
            this.currentStair --
            return this;
        }
    }
    this.showStair = function(){
        this.currentStair;
        return this;
    }
    
}

Ladder.prototype = new LaddrePrototype();


const Ladder1 = new Ladder();


/*
Задача 2

Перепешите методы таким образом, что бы можно было использование чейнинга, тоеть что бы можно было обьеденить вызом методов в рядок

const ladder = new Ladder();

ladder.up().up().down().up().showStair



*/

