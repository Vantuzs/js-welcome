
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

