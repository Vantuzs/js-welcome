// JS. Методы примитивов

//1
const string = 'Meow meow'
console.log(string.split('').reverse().join(''));
//2 

function deleteDotNumbers(num){
    return num.toFixed()
}

console.log(deleteDotNumbers(15.521312312));
//3

const userName = prompt('Введите имя =)')
alert(userName.toUpperCase());
//4 

function formatDate(str){
  const arr= str.split('-');
  return `${arr[1]}.${arr[2]}.${arr[0]}`
}


console.log(formatDate('2021-22-09'));

//5

function checkIdentity(str1,str2){
    if(str1.toUpperCase() === str2.toUpperCase()){
        return true
    } 
    return false
}

console.log(checkIdentity('Papa','vaPa'));

//6

// Wait🤚, I didn't fully understand the work try-cath =(