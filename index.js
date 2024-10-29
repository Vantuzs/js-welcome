
const user = {
    name: 'John',  // ключ 'name', значення - 'John'
    'favorite color': 'red',
    0: 'value',
}

// Ключом в обьекте может быть рядок или тип данных Symvol

// . - оператор доступа за именем властивости (когда речь идет про валидные индефикаторы)

console.log(user.name); // John
// user.'faborite color'; -->> syntax error
// user.0; -->> syntax error


// [] - Оператор доступа до обчислювальнои властивости (когда речь идет про невалидные индефикаторы)

console.log(user['favorite color']); // red
console.log(user[0]); // value

const someObj = {
    2: 10
}

// Задача: получить значение, которое находиться под клбчем 2

console.log(someObj[2]);
console.log(someObj['2']);
