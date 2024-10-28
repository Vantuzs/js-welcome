/*

Задача 1

Сделать функцию конструктор Country, которая принимает в качестве аргументов
- название страны
- популяцию (population)
- площа (area)
Спроэктировать метод густоты населения
густота населення = популяция / площадь
*/

function Country(name,population,area){
    this.name = name;
    this.population = population;
    this.area = area;
    this.gustota = function(){
        let gustota;
        gustota = this.population/area;
        return gustota;
    }
}

const coutry1 = new Country('Ukraine',41130432, 603628 );
const coutry2 = new Country('Germany',84270625, 357,592);

/*

Задача 2:

Сделать функцию-конструктор Авто, которое имеет:
- название
- максимальная скорость
- поточная скороть
Спроэктировать методы:
- метод прискорення (accelearte) - принимает в качестве аргумента певне прискорення
Зауважте, прискорення !== >макс скорости
- метод торможение-снижение скорости (deacclerate) -принимает в качестве аргумента певне сповильнення
Зауважте, що поточна скорость авто не может быть <0
- метод остановки (stop)

*/

function Auto(name,maxspeed,potocSpeed,){
    this.name = name;
    this.maxspeed = maxspeed;
    this.potocSpeed = potocSpeed;
    this.accelearte = function(speedUp){
        speedUp=this.potocSpeed+speedUp;
        if(speedUp>this.maxspeed){
            return 'Erorr';
        } else{
            this.potocSpeed = speedUp;
            return this.potocSpeed;
        }
    }
    this.deaccelearte = function(speedDown){
        speedDown = this.potocSpeed-speedDown;
        if(speedDown<0){
            return 'Erorr';
        } else {
            this.potocSpeed = speedDown;
            return this.potocSpeed
        }
    }
    this.stop = function(){
        
        return this.potocSpeed-this.potocSpeed;
    }
}

const car1 = new Auto('Lanus', 400,100);