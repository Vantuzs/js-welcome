/*

Задача: у нас есть обьект с зарплатами по всем отделам
Написать функцию, которая возвращает загальну сумму, вытрачену на зарплату всех отделах

*/



const departmentSalary = {
    HR: 120000,
    development: 5500000,
    PR: 50000,
    marketing: 120000,
    assistent: undefined

}

function pereschetAllZarplata(obj){
    let result=null;
    for(let key in obj){
        if(typeof obj[key] === 'undefined'){
            console.log(`У этого отдела неизвестная зарплата ${key}: ${obj[key]}`);
        } else if(typeof obj[key] === 'number'){

            result += obj[key];
        }
    }
    console.log(`Общая сумма затраты на зарплату = ${result}`);
    return;
}


 pereschetAllZarplata(departmentSalary);