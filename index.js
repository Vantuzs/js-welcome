// // У наст есть какойто юзер

// const userTelephone1 = '380661233232';
// const userTelephone2 = '380664442233';
// const userTelephone3 = '380661233255';

// const userTelephones = {
//     0: '380661233232',
//     1: '380664442233',
// //     2: '380661233255'
// }

// // Масив (Array)

// // Оголошення масиву

// // 1 способ
// const arr = [2, 4, 6, 7, 5];

// // 2 способ
// const arr2 = new Array(2, 4, 6, 7);

// // Способы доступа до элементов масива
// arr[0]; // Считывание значений элементов масива
// arr[0] = 200; // Присвоение новых значений для елементов масива

// // +Задача: вывсети все значения масива в консоле

// вариан 1
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// вариант 2
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// Задача: у нас есть масив чисел. Вывести на консоль только парные числа
// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbersArray.length;i++){
//     if(numbersArray[i]%2===0){
//         console.log(numbersArray[i]);
//     }
// }


/*

Задача 1 
Дано масив [3,6,8,2,3,5,1]
Напишите функцию, которая принимает масив в качестве аргумента и возвращает сумму всех елементов масива
*/
const arr = [3,6,8,2,3,5,1];
function sumArray (arr){
    let sum = 0;
    for(let i =0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}

sumArray(arr)