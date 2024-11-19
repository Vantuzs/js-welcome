// JS. Масивы

//1

const arr = [1,2,3,4,5,6,7,8,9];

for(let i =0; i<arr.length;i++){
    // console.log(arr[i]);
}

//2 

const arr1 = [-7,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

function prostNum(num){
    if(num<=1){
        return false;
    }
    for(let i = 2;i<num;i++){
        if(num%i===0){
            return false
        }
        
    }
    return true;
}


for(let i= 0; i<arr1.length; i++){
    if(prostNum(arr1[i])){
        // console.log(arr1[i]);
    }
}

//3 

//1) 
 const arr2 = [1,2,3];
 const arr3 = [4,5,6];
 const arr4 = arr2.concat(arr3)
 //2)
 const arr5 = [6,5,4];
 arr5.reverse()
 //3)
 const arr6 = [1,2,3];
 arr6.push(4,5,6)
 //4)
 const arr7 = [7,8,9];
 arr7.unshift(1,2,3)
 //5)
 const arr8 = ['aaa', 'bbb', 'ccc'];
 console.log(arr8.shift());
 //6)
 const arr9 = ['aaa', 'bbb', 'ccc'];
 console.log(arr9.pop());
 //7)
 const arr10 = [9,10,11,12,13];
 const arr11 = arr10.slice(2);
 //8)
 const arr12 = [1,2,3,4,5];
 arr12.splice(1,2)
 //9)
 const arr13 = [1,2,3,4,5];
 const arr14 = arr13.slice(2)
 //10)
 const arr15 = [1,2,3,4,5];
 arr15.splice(1,0,'w','trtr')
 arr15.pop()
 arr15.push('vvv','a','hello')
 console.log(arr15);

 // *********
 const str = 'hello to you'; // 6
const arr111 = ['a','y','u','o','e','i'];

function res(str,array){
  let sum = 0;
  const  string = new String(str);
  for(let i = 0; i<string.length; i++){
    for(let j = 0;j<array.length;j++){
      if(string[i] === array[j]){
        sum+=1
      }
    }
  }
  
  return `${str} // ${sum}`
}

console.log(res(str,arr111));