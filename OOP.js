//Contructor + instance class

// var Car = class {
//     constructor (brand, factory) {
//         this.brand = brand
//         this.factory = factory
//         this.sound = "honk! honk! vroomvroom"
//     }
// }

// var innova = new Car("Innova", "Toyota")
// console.log(innova)

//Method
// class Car1 {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present () {
//         return "I have a " + this.carname;
//     }
// }

// mycar = new Car1("Ford");
// console.log(mycar.present())

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present(x) {
//         return x + "! I have a " + this.carname;
//     }
// }

// mycar = new Car("Ford")
// console.log(mycar.present("Hello"));


//Quiz
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present(x) {
        return x + "! I have a " + this.carname;
    }
}

mycar = new Car("Ford")
// mobil = new Car("Toyota")
console.log(mycar.present("Hello"))
// console.log(mobil.present("Hello"))