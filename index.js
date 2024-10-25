// Loops - Циклы

/*
while - цикл с передумовою

while (умова){
  тут будет блок кода, который будет циклично выполнятся

}

do-while - цикл с послеусловием

do {
  тут будет блок кода, который будет циклично выполнятся
} while(умова)

*/

const correctPassword = 'qwerty1234';

let userPass;

do{
  userPass = prompt('Введите свой пароль');
} while(userPass !== correctPassword);
  // while=До тех пор пока 