class User{
    constructor(fName , age){
        this.firstName = fName,
        this.age = age
    }
    welcome(){
        console.log(`welcome${this.age}`);
    }
}

let user = new User("ahmed", 22)
let user2 = new User("ahmed", 22)
let user3 = new User("ahmed", 25)

console.log(user3.welcome());