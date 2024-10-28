/* Способи створення об'єкта

const cat = { // літеральне створення об'єкта

}

const cat2 = Object(); // Функція-конструктор

const cat3 = new Object(); // Функція-конструктор з оператором new

*/

// Конструктор визначае шаблот або "скелет" Обьектов, которые будут создаваться

/*
Угоды у фукнциях конструкторах:

1. Имя фукнции конструктора мае починатыся с большой буквы
2. Фукнция конструктор должна выполняться только за помощью оператора new


*/

// Задача: написать функцию конструктор для создания кота

function Cat(name, color, breed, age, speed){
    this.name = name; // this - посилання на ось цього новостворенного кота
    this.color = color;
    this.breed = breed;
    this.age = age;
    this.run = function(){
        return this.name + ' is runing ' + speed + ' km';
    }
}

// Задача: создать несколько (двух) котов, с помощью нашей фукнции конструктора

const cat1 = new Cat('Bublik','white','Dvorovyi', 3, 15);
const cat2 = new Cat('Murzik', 'black', 'siam', 4, 12);

/*

Создайте функци констуктор собаки, у которога мае бути Имя, цвет и возраст

Сделайте несколько собак

*/

function Dog(name,color,age){
    this.name = name;
    this.color = color;
    this.age = age;
}

const dog1 = new Dog('Baton', 'black', 5);
const dog2 = new Dog('Dublon', 'grey', 10);