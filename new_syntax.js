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
        // console.log(parameter);
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


class RangeValidator{
    constructor(from,to){
        this.to = to;
        this.from = from;
    }


    set from(newValue){
        if(typeof newValue !== 'number'){
            throw new TypeError('From must be a number')
        }
        if(newValue> this._to){
            throw new RangeError('From must be a not > to ')
        }
        this._from = newValue
    }

    get from(){
        return this._from
    }

    set to(newValue){

        if(typeof newValue !== 'number'){
            throw new TypeError('To must be a number')
        }
        if(newValue< this.from){
            throw new RangeError('To must be a not < value1 ')
        }
        this._to = newValue
    }

    get to(){
        return this._to
    }

    getRange(){
        let arr = [];
        for(let i = this.from;i<=this.to;i++){
            arr.push(i)
        }
        
        return arr 
    }
}

const range = new RangeValidator(1,100)
