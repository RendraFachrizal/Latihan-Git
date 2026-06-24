//Array Javascript
var angka = [2,5,1,3,4]

//Length
console.log(angka.length)

//Push
console.log("Sebelum push: " + angka)
angka.push(9)
console.log("Setelah push: " + angka)

//Pop
console.log("Sebelum pop: "+ angka)
angka.pop()
console.log("Setelah pop: " + angka)

//Unshift
console.log("Sebelum unshift: " + angka)
angka.unshift(8)
console.log("Sesudah unshift: " + angka)

//Shift
console.log("Sebelum Shift: " + angka)
angka.shift()
console.log("Sesudah shift: " + angka)


console.log("--------------------")
//Join
var peserta = ["Andra", "Taufiq", "Adit", "Debby"]
console.log(peserta)
console.log("Sebelum Join: " + peserta)
var newpeserta = peserta.join(" + ")
console.log("Setelah join: ")
console.log(peserta.join(" + "))
console.log(newpeserta)


console.log("--------------------")
//Split
var namapeserta = "Muhammad Rendra Fachrizal"
console.log("Sebelum split: ")
console.log(namapeserta)
console.log("Setelah split: ")
console.log(namapeserta.split(" "))

//quiz
console.log("-----------------")
console.log(namapeserta.split(" ").length)
