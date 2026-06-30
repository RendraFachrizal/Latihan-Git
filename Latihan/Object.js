//deklarasi object
var car ={
    brand   : "Ferrari",
    type    : "Sports Car",
    price   : 50000000,
    horsepower : 986
}


console.log("-------------------------------")
var orang = {
    WarnaKulit  : "Sawo Matang",
    jeniskelamin : "Laki - laki",
    tinggibadan : 175,
    beratbadan : 80,
    usia : 26,
    name : "Rendra"

}




// array of object
var mobil = [
    {merk: "BMW", warna: "merah", tipe: "sedan"},
    {merk: "Toyota", warna: "hitam", tipe: "box"},
    {merk: "Audi", warna: "biru", tipe: "sedan"}
]

var orang = [
{
    name : "Rendra",
    WarnaKulit  : "Sawo Matang",
    jeniskelamin : "Laki - laki",
    tinggibadan : 175,
    beratbadan : 80,
    usia : 26
    
},
{
    name : "Fachrizal",
    WarnaKulit  : "Putih langsat",
    jeniskelamin : "Laki - laki",
    tinggibadan : 185,
    beratbadan : 70,
    usia : 25
},
{
    name : "Muhammad",
    WarnaKulit  : "Hitam",
    jeniskelamin : "Laki - laki",
    tinggibadan : 175,
    beratbadan : 85,
    usia : 20
},
{
    name : "Female",
    WarnaKulit  : "Coklat",
    jeniskelamin : "Perempuan",
    tinggibadan : 165,
    beratbadan : 50,
    usia : 26
}
]

//.foreach()
orang.forEach(function(item){
    console.log("warna kulit: " + item.WarnaKulit)
})

//.map()
var WarnaKulit = orang.map(function(item){
    return item.WarnaKulit
})

var usia = orang.map(function(item){
    return item.usia
})



console.log(WarnaKulit)
console.log(usia)


//.filter()
var filterjeniskelamin = orang.filter(function(item){
    return item.jeniskelamin == "Laki - laki"
})

var filterusia = orang.filter(function(item){
    return item.usia >= 25
})

console.log(filterusia)