// let and const

let nama = "John"
if (true) {
        let nama = "Doe"
        console.log(nama)
    }

console.log(nama)
console.log("-------------------------------")

const pi = 3.14
pi = 22/7
console.log(pi)

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

// enhanced object literal
let names = "Rendra"
let person = {
    nama : names,
    umur : 23,
    tinggi: 173
}

let namaOrang = person.nama
let umurOrang = person.umur
let tinggiBadan = person.tinggi
let {nama, umur, tinggi} = person

console.log(tinggiBadan + " cm")
console.log(umurOrang + " tahun")
console.log(namaOrang)

// destructuring array
let number = [1,5,6,7,8]
let num1 = number[0]
let num2 = number[1]
let num3 = number[2]
let num4 = number[3]
let num5 = number[4]
console.log(num2)

let [num1, , , , num5] = [1,3,5,7,9]
console.log(num5)


// rest parameter array
let footballers = ["Messi", "Ronaldo", "Mbappe", "Halland", "Neymar"]
let [num1, , , , num5] = [1,5,6,7,8]
let [foot1,foot2, ... restFoots] = footballers
console.log(foot1)
console.log(foot2)
console.log(restFoots)
console.log(restFoots[2])

// rest parameter object
let names = "Rendra"
let person = {
    nama : names,
    umur : 23,
    tinggi: 173
}

let {nama, ...restPerson} = person
console.log(nama)
console.log(restPerson)


// spread operator
let buah=["strawberry", "mangga", "apel"]

buah.unshift("Mangga", "Jeruk")
buah.push("Durian")
console.log(buah)
buah = ["Mangga", ...buah, "Jeruk"]
console.log(buah)

//spread operator on object
let botol = {
    merk : "Aqua",
    ukuran : "600",
    harga : 5000
}
// botol.warna = "biru"
// botol.kemasan = "plastik"
botol = {...botol, warna : "biru", kemasan : "plastik", bentuk : "bulat"}
console.log(botol)
