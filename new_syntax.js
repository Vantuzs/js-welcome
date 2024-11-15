class Test{
    constructor(value1,value2){
        this.key1 = value1;
        this.key2 = value2;

    }

    method(){
        // тело метода
    }

    // Вариант 2 для оголошення статик метода - более популярный
    static myStaticMethod(parameter){
        // тело функции - чтото делаем 
        console.log(parameter);
    }
}


// Статические методы - методы, которыми мы можем пользоваться не создавая екземпляр класа 
// Всередине статичных методов мы не используем this


// Variant 1 Для оголошення статического метода

// Test.myStaticMethod = function(parameter){
//     // тело функции -  чтото ты тут делаем =P
//     console.log(parameter);
// }

Test.myStaticMethod('123');
const obj1 = new Test('test1','test2'); // создание нового екземпляра класа Test  
