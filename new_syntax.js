/* 

class MyClass {
    // методы класса
    constructor(){
        ....
    }

    method1() {....}
    method2() {....}
    method3() {....}
}

const user = new MyClass()

*/

class MyClass{
    constructor(name,lastName,age){
        this.name = name;
        this.lastName = lastName;
        this.age = age; 
    }

    getFullName(){
        return `${this.name} ${this.lastName}`;
    }
}

const user1 = new MyClass('Alex','Fiher','22');
const user2 = new MyClass('Dari', 'Dane', '34');


/* 

Правила класов

1. constructor() при создании класа - обязателен
2. Мы не можем самостоятельно обратиться к конструктора
3. Конструктор должен быть только один
4. Как и в функциях конструкторах, название класа пишеься с большой буквы


*/

/* 

Написать клас Worker.
У работника есть имя, фамилия, ставка за рабочий день, количество отработаных дней в этом месяце
Создать метод который возвращает зарплату этого работника за нынешний метод

*/

const MIN_ZP = 7100;
const WORK_DAYS = 21;
const MIN_RATE = MIN_ZP / WORK_DAYS
const BASE_COEFICIENT = 0;

class Worker{
    constructor(name,lastName,rate = MIN_RATE,days = WORK_DAYS,coefficient= BASE_COEFICIENT){
        this.name = name;
        this.lastName = lastName;
        this.rate = Number(rate.toFixed(2)); 
        this.days = days; 
        this.coefficient = coefficient;
    }

    /* 
        Сеттер - метод для утсановление значения
        Геттер - метод для получения значения
    */

   set rate(newValue){ // название сеттеру - название приватного поля БЕЗ знака нижнего подкресливания
        if(newValue < 0){
            throw new RangeError('Rate must be a positive number');
        }
        if(typeof newValue !== 'number'){
            throw new TypeError('Rate must be a number')
        }

        // НО в середине сеттера мы работаем с приватным полем
        this._rate = newValue;
        return this;
   }

   get rate() { // название геттера - название приватного поля БЕЗ знака нижнего подчесрикивания
    // НО в середине геттера мы работаем с приватным полем
    return this._rate;
   }

   set name(newValue){
    if(typeof newValue !== 'string'){
        throw new TypeError('Nema must be a string')
    }
    if(newValue === ''){    
        throw new Error('Name must be a valid')
    }
    this._name = newValue;
   }

   get name(){
    return this._name;
   }

   set lastName(newValue){
    if(typeof newValue !== 'string'){
        throw new TypeError('lastName must be a string')
    }
    if(newValue === ''){    
        throw new Error('lastName must be a valid')
    }
    this._lastName = newValue;
   }

   get lastName(){
    return this._lastName
   }

   set days(newValue){
    if(newValue<0 || newValue>31){
        throw new RangeError('Days must be a range 0-31')
    }
    if(typeof newValue !== 'number'){
        throw new TypeError('Days must be a number')
    }
    this._days = newValue;
   }

   get days(){
    return this._days
   }

   set coefficient(newValue){
    if(newValue<0){
        throw new RangeError('Coefiecient must be a >0')
    }
    if(typeof newValue!=='number'){
        throw new TypeError('Coeffiecietn mus be a number')
    }
    this._coefficient = newValue;
   }

   get coefficient(){
    return this._coefficient
   }

    rateSum(){
        if(this.coefficient && this.coefficient !== 0){
        return this.rate * this.days * this.coefficient;
        } else{
            return this.rate * this.days
        }
    } 
}


const worker1 = new Worker('John','Doe');
const worker2 = new Worker('Billy','Crew',500,31,2);

/* 

В середине класса геттеры/сеттеры работают с приватными полями.
А при обращению к класу изВне мы работаетм с геттерами/сеттерами

*/



////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Параметры по умолчанию */

// function sum(a = 10,b = 5) {
//     return a+b;
// }

// console.log(sum());



/* 

Клас авто
Клас бензина

Задача: расчитать загальный вес авто (вес авто + вес бенза)
                                                    обьем*плотность
*/


class Fuel {
    constructor(volume, density){
        this.volume = volume;
        this.density = density;
    }

    getWeight(){
        return this.volume * this.density
    }
}

const benzin = new Fuel(50,0.9);


class Auto {
    constructor(name, ownWeight, fuel){
        this.name = name;
        this.ownWeight = ownWeight;
        this.fuel = fuel;
    }

    // мутод который обчисливает полный вес авто: его власта ваага ownWeight + вага палива

    getFullWeight() {
        return this.ownWeight + this.fuel.getWeight();
    }
}

const bmw = new Auto('BMW', 4000, benzin);