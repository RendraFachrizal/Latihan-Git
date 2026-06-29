var Car = class {
    constructor (brand, factory) {
        this.brand = brand
        this.factory = factory
        this.sound = "honk! honk! vroomvroom"
    }
}

var innova = new Car("Innova", "Toyota")
console.log(innova)