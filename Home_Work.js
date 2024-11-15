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