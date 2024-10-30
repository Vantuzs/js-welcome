// array.concat - используется для обьеднання двох або больше масивов в новый масив
// array.concat(array1,array2, ..., arrayN)

const array1= [1,2,2,4];
const array2 = array1.concat([222,888,333],[55555,7777777])
console.log(array2);

// array.fill() - используется для заполнения всех элементов масива какмито одним значением
// array.fill(value,[start,[end]]); // start, end - не обязательные

const array3 = new Array(5);
array3.fill(1);

// array.includes - используется для проверки наявности определённого значения в масиве
// array.includes(searchValue, [fromIndex])

const array4 = [2,12,1,5,8,13,12];
console.log( array4.includes(2));// true

// array.indexOf - используется для получения первого вхождения определённого значения в масиве
// array.undexOf(serchElement, [fromIndex])
console.log( array4.indexOf(12));
console.log( array4.indexOf(12,-1));



// array.join - используется для создания рядка, обьединяя все элементы масива
// array.join([separator])

const array5 = ['Hello', 'world', 4,2,'hi'];
console.log(array5.join('/'));


// array.push - используется для додавання одного или нескольки елементов в конец масива
// array.push(elemetn1, ... , elementN);

const array6 = [2,3,4,5];
array6.push(6,7,8,9,10);
console.log(array6);


// array.pop - он вызывается на масиве и не принимает никаких аргуметнов, Используется для удаления последнего элемента
array6.pop();

