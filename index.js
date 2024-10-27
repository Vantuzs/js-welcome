/*

Задача1

числа - из диапазона вывести все числа%5===0

*/

//1

// function printNumberDevisibleBy5(start, end){
//   for(let i = start; i<=end;i++){
//     if(i%5===0){
//       console.log(i);
//     }
//   }

// }

// printNumberDevisibleBy5(5,25)



// v2 - variant maximum

function count() {
    let numberOne = Number(prompt('Введите число один'));
    let numberTwo = Number(prompt('Введите число Two'));
    if(numberOne>numberTwo){
        console.log('Початкове число должно быть меньше за последнее число');
        return; // досрочный выход из цикла
    }
    
    for(let i= numberOne; i<=numberTwo; i++ ){
        if(i%5===0){
            console.log(i);
        } else {
            console.log('Число ' + i + ' не кратное 5');
        }
    }
}
count()