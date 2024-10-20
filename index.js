/*

Об явлена функция - Function Declaration

function имяФункции(аргумент1,аргумент2) {
    Тело функции
}

имяФункции(аргумент1, аргумент2);


hoisting - оголошення функции поднимаеться (hoisted) до верхней части кода

*/
greetungUser('James');

function greetungUser(userName){  
        console.log('Hi, ' + userName);
}

greetungUser('Alex');

/*

Function Expression - Функциональный вираз 

const имяФункции = function(arg1, arg2){
    Тело функции
}

имяФункции(аргумент1, аргумент2);


*/

// greet('Test'); Приведет до ошибки 

const greet = function(userName){
    console.log('Hi, ' + userName);
}

greet('Kevin');


/* 

Arrow Function - Стрелочная функция

const имяФункции = (arg1, arg2) =>{
        Тело функции
    }

имяФункции(аргумент1, аргумент2);

hosting - не видбуваеться 

*/

// greetArrow('Test');  Приведет к ошибке

const greetArrow = (userName) => {
    console.log('Hi, ' + userName);
}

greetArrow('Jo');

// Задача: написать функцию которая выводит системную дату и час(поточные)



// ДЛЯ ТЕХ, КТО ХОЧЕТ ЗНАТЬ БОЛЬШЕ!!!!!!!!!!!!!!!!!!!!!!
const getDeteWithTime = function(){
    // круглые скобки - когда нам не нужны параметры
    // параметры нам не нужны, когда работа фуенкции не зависит от какогото внешнего значения
    const dateWithTime = new Date();
    return dateWithTime;
}

