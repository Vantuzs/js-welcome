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
    constructor(name,lastName,stavka = MIN_RATE,nowDay = WORK_DAYS){
        this.name = name;
        this.lastName = lastName;
        this.stavka = stavka;
        this.nowDay = nowDay; 
    }

    stavkaSum(){
        return `${this.stavka * this.nowDay}`;
    }
}


const worker1 = new Worker('Djo','Fisher');
const worker2 = new Worker('Billy','Crew',500000,31);





////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Параметры по умолчанию */

function sum(a = 10,b = 5) {
    return a+b;
}

console.log(sum());