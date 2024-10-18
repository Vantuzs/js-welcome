/*

ми имеем переменную которая указывает на количество минут в часу
Вызначить в какой четверти часа находиться это количество минут

если количество минут попадает в первую четверть 


*/


const time = 2;

if(time=== 0) {
    console.log('Сейчас ' + time + ' минут ' + 'Вы в начале 1 четверти ');
} else if(time===15){
    console.log('Сейчас ' + time + ' минут ' + 'Вы на границе 1 и 2 четверти часа');
} else if(time===30){
    console.log('Сейчас ' + time + ' минут ' + 'Вы на границе 2 и 3 четверти часа');
} else if(time===45){
    console.log('Сейчас ' + time + ' минут ' + 'Вы на границе 3 и 4 четверти часа');
} else if(time>0 && time<15){
    console.log('Сейчас ' + time + ' минут ' + 'Вы в 1 четверти часа');
} else if(time>15 && time<30) {
    console.log('Сейчас ' + time + ' минут ' + 'Вы в 2 четверти часа');
} else if (time>30 && time<45) {
    console.log('Сейчас ' + time + ' минут ' + 'Вы в 3 четверти часа');
} else if(time>45 && time<=60) {
    console.log('Сейчас ' + time + ' минут ' + 'Вы в 4 четверти часа');
} else if (time<0) {
    console.log('Да ты гений ХD');
} 
else { console.log('ОШИБКА      ОШИБКА');}



/*

Задача 2

вы сохраняете в переменной год
Нужно вызначить, есть ли этот год высокосным

Примитка, Год есть высокосным, если его номер кратный 4, але не кратный 100, также если он кратный 400

*/

const god = 2012;

if(god%4===0 && god%100 !==0 || god%400===0){
    console.log(god + ' Это высокостный год');
} else {
    console.log(god + ' Это не высокосный год');
}


/* 

Задача 3
У вас есть начальное и концевое значение диапазона, и также певное число
Вам нужно визначить, чи входить це число в заданий диапазон, чи нет
Если число находиться между начальным и конечным значением диапазона (Включно), вывести "В диапазоне".
В другом случе вывести "За диапазоном"

*/

const a = 10;
const b = 25;
const c = 15;
if (c>=a && c<=b) {
    console.log(c + ' Находиться между или равно  10  и 25');
} else {
    console.log(c + ' Находиться вне диапазона 10 и 25');
}




// Задача 4 -  козак ВУС, У него есть учасники конкурса и определенное количество ручек и блокнотов
// сможет ли ВУС раздать всем учасникам по ручке и блокноту?
const ruchki = 10;
const bloknot = 10;
const uchasniki = 11;

if(uchasniki<=ruchki && uchasniki<=bloknot){
    console.log('good');
} else if(ruchki<uchasniki || bloknot<uchasniki){
    console.log('unluck');
}

const age = 13;
const hasDisconde = true;

let ticketPrice;

if(age < 0 || typeof age !== 'number') {
    console.log('Вы ввели некоректный возраст');
} else if(age <=6) {
    ticketPrice = 0;
} else if(age <= 12) {
    ticketPrice = 10;
} else if(!hasDisconde){
    ticketPrice = 20;
} else {
    ticketPrice = 10
} 

if(ticketPrice !== undefined) {
    console.log('Цена билета составаляет ' + ticketPrice + '$');
}