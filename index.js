const user = {
    name: 'John',
    lastname: 'Doe',
    age: 20,
    'favorite color': 'red',
    movie: 'Blue moon',
    avatar: 'http://.....'
}

// for..in  -используется для перебора (Итерации) ключей в обьекте
// НЕ ЭТОТ for(;;)
/*

for (variable in object){
    // Код что выполняется для каждой властивости
}

variable - переменная, которая будет принимать значение ключей властивостей
object - обьект, властивости (ключи) которого мы хотим перебрать

*/

// Задача: в обьекте user вывести название всех ключей и властивости

for(let key in user){
    console.log(`${key} ---> ${user[key]}`); // key ---> value
}