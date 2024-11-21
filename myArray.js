// function MyArray() {
//     this.length = 0;
//   }
  
//   function MyArrayPrototype() {
//     this.push = function () {
//       for(let i = 0; i < arguments.length; i++) {
//         this[this.length] = arguments[i];
//         this.length++;
//       }
//       return this.length;
//     },
//     this.pop = function() {
//       if(this.length > 0) {
//         // 1. Зберегти останній елемент
//         const lastItem = this[this.length - 1];
//         // 2. Видалити останній елемент з масиву
//         delete this[this.length - 1];
//         // 3. Зменшити довжину масиву на 1
//         this.length--;
//         // 4. Повернути останній елемент
//         return lastItem;
//       } else {
//         return undefined;
//       }
//     },
//     this.forEach = function(callback) {
//       for(let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//       }
//     }
//   }
  
//   MyArray.prototype = new MyArrayPrototype(); // прототипне посилання

  ////////////////////////////////////////////////////////////////////////////////////////////////////////


  class MyArray{
    constructor(){
      this.length = 0
    }

    set length(value){
      if(typeof value !== 'number'){
      throw new TypeError('Value must be a number')
      }
      this._length = value
    }

    get length(){
      return this._length
    }

    

    push() {
      for(let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
      }
      return this.length;
    }
    pop() {
      if(this.length > 0) {
        // 1. Зберегти останній елемент
        const lastItem = this[this.length - 1];
        // 2. Видалити останній елемент з масиву
        delete this[this.length - 1];
        // 3. Зменшити довжину масиву на 1
        this.length--;
        // 4. Повернути останній елемент
        return lastItem;
      } else {
        return undefined;
      }
    }
    forEach(callback) {
      for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
      }
    }

    map(callback){
      const arr = new MyArray();
      for(let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this))
      }
      return arr;
    }
  }

  const a = new MyArray()

  a.forEach((s) => {
    console.log( s**2);
  });
  a.push(2,3,4,5)
  const v = a.map((s) => s**2);

  console.log(v);