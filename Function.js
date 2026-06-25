// //function tanpa return

// function tampilkan(){
//     console.log("Halo! ");
// }

// tampilkan();

// console.log("--------------------------------")
// //function dengan return
// function MunculkanAngkaDua() {
// return 2
// }

// var tampung = MunculkanAngkaDua();
// console.log(tampung)


// console.log("--------------------------------")
// //function dengan parameter
// console.log("Contoh 3: ")
// function kalikanDua(angka) {
//     return angka*2
// }

// var tampung = kalikanDua(2);
// console.log(tampung)


// console.log("--------------------------------")
// //Function dengan lebih dari satu dan nilai default
// console.log("Contoh 4")
// function tampilkanAngka(angkapertama, angkakedua = 2) {
// return angkapertama + angkakedua
// }

// console.log(tampilkanAngka(5,3))
// console.log(tampilkanAngka(6))


// console.log("--------------------------------")
// //test case
// function tampilkanAngka(angkapertama, angkakedua = 2, angkaketiga = 3) {
// return angkapertama + angkakedua + angkaketiga
// }

// console.log(tampilkanAngka(5,3))
// console.log(tampilkanAngka(6))
// console.log(tampilkanAngka(123,2))


// console.log("--------------------------------")
// //Quiz
// function tampilkanNama(Nama = "Rendra") {
//     console.log("Halo! " + Nama)
// }

// tampilkanNama()

//Anonymous Function
console.log("-----------------------------------------")
var fungsiPerkalian = function(angkapertama, angkaKedua) {
    return angkapertama * angkaKedua
}

console.log(fungsiPerkalian(2,5))