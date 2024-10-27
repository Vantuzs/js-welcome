//1

let result = 0;

for (let i = 1; i <= 10; i++) {
  result = i;
  result = Math.pow(result, 2);
  console.log(result);
}

//2

const truePasswor = "qwe123";
let password = prompt("Введите пароль");

for (; password !== truePasswor; ) {
  password = prompt("Вы ввели не верный пароль");
}

console.log("Вы успешно вошли");

//3
let res = 0;
for (let i = 1; i <= 100; i++) {
  res = res + i;
}

console.log(res);

//4

for (let i = 10; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// 5
const value = prompt("Введите высоту и ширину треугольника 1 числом");
let symvol = "";

for (let i = 1; i <= value; i++) {
  symvol += "*";
  console.log(symvol);
}
