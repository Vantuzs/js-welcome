/*

Задача 2 

Написать игру FizzBuzz для 100 чисел

Начинайм с 1, потом это число поступительно инкрементуэтся.
Если участник понимает что число делиться на 3 - гравець каже Fizz
Если число делится на 5 - гравець каже Buzz
если делиться одновременно и на 3 и на 5 - FizzBuzz
Если не делиться ни на 3 ни на 5 - просто называет это число

*/
//qqqqq

function FiizBuzzGame(limit){
    for(let i = 1;i<=limit;i++){
        if(i%5===0 && i%3===0){
            console.log(i + ' FizzBuzz');
        } else if(i%5===0){
            console.log(i + ' Buzz');
        } else if(i%3===0){
            console.log(i + ' Fizz');
        } else {
            console.log(i);
        }
    }
}

FiizBuzzGame(100);