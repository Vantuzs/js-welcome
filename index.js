/*

Задача: у нас есть обьект с разными версиями приветствий для пользователя.

*/

const greets = {
    15: 'Hi',
    17: 'Ya, whats up',
    19: 'Hello',
    30: 'Good mornig!'
}

// const valueFormUser = 19;

// console.log(greets[valueFormUser]);
// greets[19]

/*

Задача: у наст есть обьект, ключем в котором есть день недели, а значением планы на этот день
Принять от пользователя через prompt, названия дня недели и выдать алерт,
 что запланировано у пользователя на этот день

*/

const obj = {
    Mon: 'drive lesson',
    Tue: 'Dantist visit',
    Wed: 'go to patry',
    Thu: 'hard work',
    Fri: 'chill',
    Sat: 'go to park'
}

const a = prompt('Введите день недели \nMon\nTue\nWed\nThu\nFri\nSat ');

alert(obj[a]? obj[a] : 'Error happend')

