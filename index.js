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

/*

Задача: написать фукнцию, которая принимает обьект и выводит все значения всех властивостей, оформленни *...*
а ключи = "..."
*/

const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5',
    
}

function perebor(obect){
    for(let key in obect){
        console.log(`"${key}" ---> *${obect[key]}*`);
    }
}

perebor(obj);
perebor(user);