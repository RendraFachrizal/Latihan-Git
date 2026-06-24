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


//sort
console.log("--------------")
console.log("Sebelum disort: " + peserta)
console.log("Setelah disort: ")
console.log(peserta.sort())
console.log("Setelah disort terbalik: ")
console.log(peserta.reverse())
console.log("--------------")
console.log("Test dengan angka")
console.log(angka)
console.log(angka.sort())
console.log(angka.reverse())

//slice
console.log("--------------")
console.log("Sebelum slice: " + peserta)
console.log("Setelah slice")
var newestpeserta = peserta.slice(0,2)
console.log(newestpeserta)


//splice
console.log("--------------")
console.log("Sebelum splice: " + peserta)
console.log("Setelah splice")
peserta.splice(2,0,"Heldi","Huda")
console.log(peserta)