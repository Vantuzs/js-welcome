

function User(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;    
}

function UserProtorype(){
    this.getFullName = function(){
        return `${this.name} ${this.lastName}`;
    }};

    User.prototype = new UserProtorype();

const user1 = new User('John','Doe','56');;
const user2 = new User('Jnae', 'Freeman', '44');