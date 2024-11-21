// function fibanacci(n){
//     console.log(n);
//     if(n <=1){
//       return n;
//     }else{
//       return fibanacci(n-1) + fibanacci(n-2)
//     }
//   }
  
//   console.log(fibanacci(10));

  


  ////////////////////////////////////////////////////////////////////////////////////////////////////////



  // Задача: написати функцію суми додатніх чисел

/**
 * Функція знаходить суму двох додатніх чисел
 * @param {number} a перший доданок
 * @param {number} b другий доданок
 * @returns {number} сума
 * @throws {RangeError} якщо а або b - не є цілим числом
 * @throws {TypeError} якщо а або b - не є числом
 */
function sumOfPositiveNumber(a, b) {
    if(a < 0 || b < 0) {
      // маємо "викинути" помилку
      const error = new RangeError('Якесь з чисел менше 0');
      throw error; // return, тільки для помилок
    }
  
    if(typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Параметри a та b мають бути числами!');
    }
  
    return a + b;
  }
  
  // throw <об'єкт_помилки>
  // throw - кинути
  
  try {
    // прописуєте якийсь код, очікуючи, що тут може виникнути помилка
    console.log(sumOfPositiveNumber(1, 12));
  } catch(error) {
    console.log(error.message);
  }
  
  console.log('Ususal code flow');