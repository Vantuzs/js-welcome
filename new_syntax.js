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