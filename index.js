/* Способы створення обьекта

const cat = { // литеральное создание обьекта(литеральный - буквальный, дословный)

}

const cat2 = Object(); // Функция конструктор

const cat3 = new Object(); // Функция конструктор с оператором new

// Синтаксический цукор - спрощення синтаксису мови програмування что бы человеку было проще работать(Они не добовляют новые возможности)

*/

const cat = {
    name: 'Murzik',
    color: 'Red',
    breed: 'Dvorovyi',
    age: 2,
    eat: function(){
        return 'I am eating';
    },
    sleep: function(){
        return 'I am  sleeping';
    }
}

console.log(cat.age); // age = 2

cat.age = cat.age + 1; // age =3
console.log(cat.age); // age =3

cat.age++; // age = 4

console.log(cat.age); // age = 4

cat.sleep = undefined; // Bad practice

delete cat.sleep; // Good practice

// Adding properties

// Задача: Додати имя друга Мурзика до обьекта Мурзика

cat.friend = 'Tuzik';

cat['favorite food'] = 'fish';

cat.meow = function(){
    return 'Meow';
}