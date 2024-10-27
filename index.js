/*

Обекты 

const названиеОбьекта = {
    ключ: значення,
}

Обьекты имеют:
-Властивости
- Методы

*/

const obj = {
    color: 'red',
    fontSize: 2
}

// ООП - Парадигма програмування, которая дозволяет создавать прогрмамы с использованием обьектов, которые имеют властивости и методы


// Задача: опишите обьект лампочки

const bulb = {
    lightness: 200,
    power: '200w',
    cap: 'small',
    on: function(){
        return 'The light on!'
    },
    off: function(){
        return 'The light off!'
    }
}

console.log( bulb.power);
console.log( bulb.on());
console.log(bulb.off());

const dog = {
    name: 'Tuzik',
    'favorite food': 'meat',

}

console.log(dog.name);

console.log(dog['favorite food']);