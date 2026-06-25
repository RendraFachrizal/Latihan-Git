let and const

let nama = "John"
if(true) 
    {
        let nama = "Doe"
        console.log(nama)
    }
console.log(nama)
console.log("-------------------------------")

// const pi = 3.14
// pi = 22/7
// console.log(pi)

//arrow function
var tampilkanNama = function(a) {
    console.log("Halo, " + (a))

}
tampilkanNama("Huda")

const sayHello = (a) => {
    console.log("Halo, "+ a)
}
sayHello("Rendra")

//Quiz
const HitungPersergi = (sisi) => {
    const luas = (sisi) => {return sisi * sisi}
    const keliling = (sisi) => {return 4 * sisi}
    console.log("Luas Persegi: ", luas(sisi));
    console.log("Keliling Persegi: ", keliling(sisi));
}

HitungPersergi(5)

