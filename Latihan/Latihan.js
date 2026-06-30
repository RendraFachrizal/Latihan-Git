console.log("Hello, Worlds!")

var nama = "Rendra";
var NomorUrut = 12;

console.log(nama);
console.log(NomorUrut);
console.log("Nomor Urut: " + NomorUrut + ", Nama: " + nama);

var Open = false;
if (Open == true) {
    console.log("Buka");
} else {
    console.log("Tutup");
}


// Operator Aritmatika
var a = 100
var b = 50

var tambah = a + b;
var kurang = a - b;
var kali = a * b;
var bagi = a / b;
var modulus = a % b; 

console.log("a: " + a);
console.log("b: " + b);
console.log("Hasil Penjumlahan: " + tambah);
console.log("Hasil Pengurangan: " + kurang);
console.log("Hasil Perkalian: " + kali);
console.log("Hasil Pembagian: " + bagi);
console.log("Hasil Modulus: " + modulus);
console.log("a + b = " + a + " + " + b + " = " + tambah);

//Operator Perbandingan
console.log(1 == 1)
console.log(1 === 1)
console.log(1 !=1)
console.log(1 !== 1)
console.log(1 > 2)
console.log(1 >= 2)

//Operator Kondisional
var status = "Buka";
var JamBuka = 10;

console.log(                            );
console.log("Operator Kondisional");
console.log("--------------------------");
console.log (status == "Buka" && JamBuka >= 10)


//Operator String
var word = "Web Programming";
var word1 = "Web";
var word2 = "Programming";
var tahun = 2026;
console.log("Operator String");
console.log("--------------------------");
console.log(`${word} ${word2} ,Tahun ${tahun}`);

var word3 = word.substring(4, 15);
console.log(word3)

console.log("Upper and lower case:");
console.log("--------------------------");
console.log(word.toUpperCase());
console.log(word.toLowerCase());


console.log("Trim and replace");
console.log("--------------------------");
console.log(word.trim());
console.log(word.replaceAll("r", "R"));

//Mengubah tipe data lain menjadi String atau sebaliknya
var angka = 20;
console.log("--------------------------");
console.log("Mengubah tipe data lain menjadi String atau sebaliknya");
console.log(angka);
console.log(String(angka));
console.log(angka + 10);

var angka = angka.toString();
console.log("--------------------------");
console.log("Mengubah tipe data lain menjadi String atau sebaliknya");
console.log(angka);
console.log(angka + angka);

console.log("--------------------------");
console.log("Mengubah tipe data string menjadi number");
var angka = "20";
console.log(angka);
console.log(Number(angka));
console.log(angka + 10);
console.log(parseInt(angka) + 10);

console.log("--------------------------");
console.log("Case bilangan desimal");
var angka1 = 1.5
var angka2 = 2.5
console.log(angka1)
console.log(angka2)
var angka3 = angka1 + angka2
console.log(angka3)


//Conditional Javascript
console.log("--------------------------");
console.log("Conditional Javascript");
var mood = "happy";
if (mood == "happy"){
    console.log("saya bahagia");
}
console.log("--------------------------");
var mood = "happy";
if (mood == "happy"){
    console.log("saya bahagia");
} else {
    console.log("saya sedih");
}