//Asynchronous javascript

// setTimeout(function() {
//     console.log("Saya dijalankan belakangan")
// }, 3000)

// console.log("Saya dijalankan pertama")


//promise
// var isMomHappy = true;

// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand : "Samsung",
//                 color : "Black"
//             };
//             resolve(phone);
//         } else {
//             var reason = new Error("Mom is not happy");
//             reject(reason);
//         }
//     }
// );


// function askMom() {
//     willIGetNewPhone    
//             .then(function (fullfilled) {
//                 console.log(fullfilled);
//             })
//             .catch(function (error) {
//                 console.log(error.message);
//             });
// }

// askMom()


// function periksaDataPasien(nomorIdPasien) {
//     var dataPasien = [
//         {id: 1, nama: "John", jenisKelamin: "Laki - laki"},
//         {id: 2, nama: "Michael", jenisKelamin: "Laki - laki"},
//         {id: 3, nama: "Sarah", jenisKelamin: "Perempuan"},
//         {id: 4, nama: "Frank", jenisKelamin: "Laki - laki"}
//     ]
//     return new Promise(function (resolve, reject){
//         var pasien = dataPasien.find(x=> x.id === nomorIdPasien)
//         if (pasien === undefined) {
//             reject("data pasien tidak ada")
//         }else{
//             resolve(pasien)
//         }
//     })
// }


// periksaDataPasien(5).then(function(data) {
//     console.log(data)
// }).catch(function(err){
//     console.log(err)
// })


//async await
// function doAsync() {
//     return new Promise(function (resolve, reject) {
//         var check = false
//         if (check) {
//             resolve("Berhasil")
//         }else {
//             reject("Gagal")
//     }
//     })
// }

//without error handling
// async function hello(){
//     var result = await doAsync()
//     console.log(result)
// }


//with error handling
// async function hello() {
//     try {
//         var result = await doAsync()
//         console.log(result)
//     } catch(err){
//         console.log(err)
//     }
// }

// hello()


//QuiZ
function periksaDataPasien(nomorIdPasien) {
    var dataPasien = [
        {id: 1, nama: "John", jenisKelamin: "Laki - laki"},
        {id: 2, nama: "Michael", jenisKelamin: "Laki - laki"},
        {id: 3, nama: "Sarah", jenisKelamin: "Perempuan"},
        {id: 4, nama: "Frank", jenisKelamin: "Laki - laki"}
    ]
    return new Promise(function (resolve, reject){
        var pasien = dataPasien.find(x=> x.id === nomorIdPasien)
        if (pasien === undefined) {
            reject("data pasien tidak ada")
        }else{
            resolve(pasien)
        }
    })
}


async function checkDataPasien(nomorIdPasien) {
    try {
        var result = await periksaDataPasien(nomorIdPasien)
        console.log(result)
    } catch(err){
        console.log(err)
    }
}

checkDataPasien(5)
checkDataPasien(1)
checkDataPasien(0)