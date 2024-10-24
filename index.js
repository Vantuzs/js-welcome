function sum(a,b){
  return a+b;
}

let superFunction = sum; // насправди, sum - посилання на ячейку в RAM

console.log( sum(2 ,4)); // 0X00045

console.log(superFunction(5, 5)); // 0X00045