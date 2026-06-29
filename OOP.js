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
// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present(x) {
//         return x + "! I have a " + this.carname;
//     }
// }

// mycar = new Car("Ford")
// mobil = new Car("Toyota")
// console.log(mycar.present("Hello"))
// console.log(mobil.present("Hello"))


//Getter and setter
// class Car {
//     constructor(brand) {
//         this._carname = brand;
//     }
//     get carname() {
//         return this._carname;
//     }
//     set carname(x) {
//         this._carname = x;
//     }
// }

// mycar = new Car("Ford");
// mycar.carname = "Volvo";
// console.log(mycar.carname);

//static method
// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     static hello() {
//         return "hello!!";
//     }
// }

// mycar = new Car("Ford");
// console.log(Car.hello());


// Inheritance
class Person{
    constructor(nama){
    this.name = nama
    this.mapel = ""        
    }
    get personMapel(){
        return this._mapel
    }
    set personMapel(mapel){
        return this._mapel = mapel
    }
    berjalan(){
        return "Prok prok prok"
    }
}

class School extends Person{
    constructor(name){
        super(name)
        this.school = ""
    }
}

var guru = new School("Pak Budi")
guru.mapel = "Matematika"
console.log(guru)
// console.log(guru.berjalan())

