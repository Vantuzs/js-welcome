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


class Worker{
    constructor(name,lastName,stavka,nowDay){
        this.name = name;
        this.lastName = lastName;
        this.stavka = stavka;
        this.nowDay = nowDay; 
    }

    stavkaSum(){
        return `${this.stavka * this.nowDay}`;
    }
}


const worker1 = new Worker('Djo','Fisher',20,31);
const worker2 = new Worker('Billy','Crew',500000,31);