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

class Worker{
    constructor(name,lastName,rate = MIN_RATE,day = WORK_DAYS,coefficient){
        if(name === '' || lastName === ''){
            throw new Error('Name and lastName must be a valid')
        }
        this.name = name;
        this.lastName = lastName;
        if(typeof rate !== 'number' || typeof day !== 'number'){
            throw new TypeError('Rate and days must be a number')
        }

        if(rate<0){
            throw new RangeError('Rate must be a positive number')
        }

        this._rate = Number(rate.toFixed(2));
        
        if(day<0 || day>31){
            throw new RangeError('Days must be in 0 to 31');
        }

        this.day = day; 
        this.coefficient = coefficient;
    }

    getRate(){
        return this._rate;
    }

    setRate(value){
        if(typeof value !== 'number'){
            throw new TypeError('Rate must be a number')
        }

        if(value<0){
            throw new RangeError('Rate must be a positive number')
        }
        this._rate = value;
        return this;
    }

    rateSum(){
        if(this.coefficient){
        return this._rate * this.day * this.coefficient;
        } else{
            return this._rate * this.day
        }
    } 
}


const worker1 = new Worker('John','Doe');
const worker2 = new Worker('Billy','Crew',500,31,2);





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