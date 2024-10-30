//1
const user = {
    name: 'John',
    lastName: 'Doe',
    email: 'JohnDoe01@gmail.com',
    password: 'qwe123',
    number: +380663223220,
    adres: {
        city: 'Bubrovka',
        uliza: 'Snorovskaya',
        dom: '32c',
        kv: 322
    }

}
//2
function hello(obj){
    console.log(`Hello mister ${obj.name} ${obj.lastName}!`);
}

hello(user);

//3

function outputOfTheEntireObject(obj){
for(let key in obj){
    console.log(obj[key]);
}
}

outputOfTheEntireObject(user);

//4-5

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
            return this.potocSpeed;
        }
    }
    this.stop = function(){
        
        return this.potocSpeed-this.potocSpeed;
    }
}

const car1 = new Auto('Lanus', 330,100);

const car2 = new Auto('Tavria',300, 100);