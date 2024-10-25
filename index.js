/* Loops - Циклы

while (умова) {
  код который повторяется, пока умова = true
}

Написать в консоле 10 раз цифру 1

while(количество_консоль_логив < 10){
  console.log(1);
  количесво_консоль_логив++;
}

*/

// let iterator = 0; // личильник консоль.логив

// // Итерация - один проход цикла (коло)

// while(iterator < 10){
//   console.log(iterator);
//   iterator++;
// }

// Бесконечный цикл

// while(true) {
//   console.log('Не верно');
//   break;
// }

// Задача: сделать 10 повторов (Итераций) цтклу и вывести в консоль парные значення личильника

let i = 0;

while(i < 10){
  if(i%2 ===0){
    console.log(i);
  }

  i++;
}

/*

Дано: правельный пароль = qwerty1234

prompt
спрашивайте у пользователя пароль через prompt? пока парольЮ который вводит пользователь, не совпадет с тем эталонным паролем, который лежит в переменной

*/

// variant 1

const truePasword = 'qwerty1234';

// let password = prompt('Введите свой пароль');

// while(password !== truePasword){
//   password = prompt('Введите пароль еще раз')
//   }


// variant 2

// while(true){
//   const userPass = prompt('Введите свой пароль');
//   if(userPass === truePasword){
//     break;
//   }
// }

// vatiant 3

// let isPasswordCorrect = false;

// while(!isPasswordCorrect){ // isPasswordCorrect === false
//   const userPass = prompt('Введите свой пароль');

//   if(userPass === truePasword){
//     isPasswordCorrect = true;
//   }
// }

