// if (true) {
//     console.log("kode Program Dijalankan");
// }

// if (false) {
//     console.log("kode Program Tidak Dijalankan");
// }

// var mood = "Happy";
// if (mood == "Happy") {
//     console.log("Saya Sedang Bahagia");
// }else{
//     console.log("Saya Sedang Sedih");
// }

// var mood = "";
// if (mood == "Happy") {
//     console.log("Saya Sedang Bahagia");
// }else if (mood == "Sad") {
//     console.log("Saya Sedang Sedih");
// } else {
//     console.log("Saya Sedang Biasa Saja");
// } 


// var minimarketstatus = "Buka";
// var telur = "Habis";
// var buah = "Tersedia";
// if (minimarketstatus == "Buka") {
//     console.log("Saya akan membeli Telur dan Buah");
//     if (telur == "Habis" && buah == "Habis") {
//         console.log("Belanjaan saya tidak lengkap");
//     } else if(telur == "Habis"){
//         console.log("Telur Habis");
//     }else if(buah == "Habis"){
//         console.log("Buah Habis");
//     }
// }else{
//     console.log("Minimarket Tutup, Saya Pulang lagi");
// }


// var umur = 6;
// if (umur >= 17) {
//     console.log("Boleh Membuat KTP")
//     if (umur < 20) {
//         console.log("Umur Dibawah 20 Tahun");
//     } else if (umur > 30) {
//         console.log("Umur Diantara 30-40 Tahun");
//     } else if (umur > 40) {
//         console.log("Umur Diatas 40 Tahun");
//     } else if (umur >= 50) {
//         console.log("Sudah Berumur");
//     }
// } else {
//     console.log("Belum Boleh Membuat KTP");
// }

// var warna = "biru";
// switch(warna) {
//     case "Merah":{
//         console.log("Warna Merah");
//         break
//     }
//     case "Kuning":{
//         console.log("Warna Kuning");
//         break
//     }
//     case "Hijau":{
//         console.log("Warna Hijau");
//         break
//     }
//     default:{
//         console.log("Warna yang dipilih tidak ada");
//     }
// }



// console.log("--------------------------");
// for(var angka = 1; angka < 10; angka++){
//     console.log("Iterasi ke-" + angka);
// }


// console.log("--------------------------");
// var jumlah = 0;
// for(var deret = 5; deret > 0 ; deret--){
//     jumlah += deret;
//     console.log("Jumlah saat ini-" + jumlah);
// }
// console.log("jumlah terakhir: " + jumlah);


// While loop 1
var flag = 0;
while(flag <= 10) {
    console.log("Iterasi ke-" + flag);
    flag++;
}

// While loop 2
console.log("---------------------")
var flag = 10;
do {
    console.log("Iterasi ke-" + flag);
    flag--;
}while(flag > 0)