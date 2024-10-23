// Задача: написать програму, которая проверяет число на то, чи делиться оно на 5, 3, 2.

// const number = Number(prompt('Введите число: '));
// if(number %5===0){
//     console.log(number + ' делиться на 5');
// } else if(number %3===0){
//     console.log(number + ' делиться на 3');
// } else if(number %2===0){
//     console.log(number + ' делиться на 2');
// } else{
//     console.log(number + ' Число нацело не делиться не на 5, не на 3, не на 2');
// }

// switch - способ реализации выбора с нескольки возможных вариантов в задежности от значення выразу
// Конструкция switch используеться у випадках, когда проверяется одна переменная на разные значения.
/*

Синтаксиз

switch(вираз - якась переменная){
    case значення_виразу: делаем что-то одно;
    case значение_виразу: робимо что-то другое;
    case значення_виразу: робимо еще что-то другое;
    default: делаем что-то, если другие значения не подошли
} 


*/

// Задача: нам приходит номер месяца. За номером месяца нужно вызначить время года

// const monthNuber = 2;
// switch(monthNuber){
//     case 1:
//         case 2:
//             case 12:{
//         console.log(' зима');
//         break;
//     } 
//     case 3:
//         case 4:
//             case 5:{
//         console.log(' весна');
//         break;
//     }
//     case 6:
//     case 7:
//     case 8:{
//         console.log('лето');
//         break;
//     }
//     case 9:
//     case 10:
//     case 11:{
//         console.log('осень');
//         break;
//     }
//     default: {
//         console.log('Введи число от 1 до 12');
//         break;
//     }
// }


/*
Задача 1 :^

prompt
Вывидите пользователю пропозицию меню:
1 - Сок
2 - Вода
3 - Кофе
4 - Чай
5 - Лимонад

Вивести в консоль напиток, цифру которого ввел пользователь
Сделайте через switch-case

*/

/*
Задача 2 (За бажанням)

Сделать калькулятор =)

Пользователь последовательно (один за одним) вводит
- Первое число
- Второе число
- Один с вариантов: +, -, *, /

Для каждой математической задачи, сделайте отдельную функцию

Весь калькулятор - это тоже отдельная функция, роль которой спросить у пользователя 2 числа и действие
и вернуть результат в качестве alert

P.S. Полная творческая свобода
Если вы видите решение этой задачи както по другому - Вы можете реализовать свое видиниее калькулятора

*/

// Задача с урока 024 №1

const menu = Number(prompt('Меню: \n 1 - Сок \n 2 - Вода \n 3 - Кофе \n 4 - Чай \n 5 - Лимонад \n Введите номер напитка который хотите заказать=)'));
console.log(typeof menu);
if(isNaN(menu)===true){
    alert('Мы ждем номер из меню(а именно цифру)=/');
    
} else {
    switch(menu){
        case 1:{
            alert('Вот ваш Сок');
         break;
        }
        case 2:{
            alert('Вот ваша Вода');
            break;
        }
        case 3:{
            alert('Вот ваш Кофе');
            break;
        }
        case 4:{
            alert('Вот ваш Чай');
            break;
        }
        case 5:{
            alert('Вот ваш Лимонад');
            break;
        } 
        default:{
            alert('Введите номер напитка из меню !И ТОЛЬКО ЕГО!');
        }
    }
}




// Задача с урока 024  №2



const number1 = Number(prompt('Введите певрое число для калькулятора=)'));
const number2 = Number(prompt('Введите второе число для калькулятора=)'));
const operator = prompt('Введите один из операторов +, -, *, /.\n для чисел ' + number1 + ' и ' + number2);


function plus(num1, num2){
    return num1+num2;
}
function minus(num1, num2){
    return num1-num2;
}
function umnijit(num1, num2){
    return num1*num2;
}
function dilenie(num1, num2){
    return num1/num2;
}

switch(operator){
    case '+':{
        alert(number1 + operator + number2 + '=' + plus(number1,number2));
        break;
    }
    case '-':{
        alert(number1 + operator + number2 + '=' + minus(number1,number2));
        break;
    }
    case '*':{
        alert(number1 + operator + number2 + '=' + umnijit(number1,number2));
        break;
    }
    case '/':{
        alert(number1 + operator + number2 + '=' + dilenie(number1,number2));
        break;
    } 
    default: {
        alert('Введите оператор из предложеных!')
    }
    
}


// Задачи с классрума №10

//1

const variable1 = Number(prompt('Введите 1 число:'));
const variable2 = Number(prompt('Введите 2 число:'));
const result1 = variable1+variable2;

if((variable1+variable2)%5===0){
    alert(variable1 + '+' + variable2 + '=' + result1 + ' (делится на 5)');
} else{
    alert(variable1 + '+' + variable2 + '=' + result1 + ' (не делится на 5)');
}


//2

const stotona = Number(prompt('Введите сторону квадрата:'));
function sKvadrata(num1){
    return num1*num1;
}

alert('Площадь квадрата = ' + sKvadrata(stotona));

//3

const menu = Number(prompt('Меню: \n 1 - Сок \n 2 - Вода \n 3 - Кофе \n 4 - Чай \n 5 - Лимонад \n Введите номер напитка который хотите заказать=)'));
console.log(typeof menu);
if(isNaN(menu)===true){
    alert('Мы ждем номер из меню(а именно цифру)=/');
    
} else {
    switch(menu){
        case 1:{
            alert('Вот ваш Сок');
         break;
        }
        case 2:{
            alert('Вот ваша Вода');
            break;
        }
        case 3:{
            alert('Вот ваш Кофе');
            break;
        }
        case 4:{
            alert('Вот ваш Чай');
            break;
        }
        case 5:{
            alert('Вот ваш Лимонад');
            break;
        } 
        default:{
            alert('Введите номер напитка из меню !И ТОЛЬКО ЕГО!');
        }
    }
}

//4

const lastCheck = Number(prompt('Введите общую сумму покупки:'));

const more500 = lastCheck>500 && lastCheck<800 ? lastCheck / 100 * 97 : false;
const more800 = lastCheck>800 ? lastCheck / 100 * 95 : false;

if(more500){
    alert('Ваша сумма к оплате составляет ' + more500 + ' $' + ' Ваш чек больше 500, вам положена скидка в 3%');
} else if(more800){
    alert('Ваша сумма к оплате составляет ' + more800 + ' $' + ' Ваш чек больше 500, вам положена скидка в 5%')
} else {
    alert('Ваша сумма к оплате составляет ' + lastCheck + ' $')
}







//5
const a1 = 10;
const b2 = 5;

const result = a1%b2 === 0 ? true:false;
console.log(result);
// 6*

const a = 2;
const b = 9;
const c = 4;

function diskriminant(a,b,c){
    const D = b**2-4*(a*c);
    const x1 = -b + Math.sqrt(D); 
    const x2 = -b - Math.sqrt(D);
    return {
        x1: x1,
        x2: x2
    }
}
console.log(diskriminant(a,b,c));

