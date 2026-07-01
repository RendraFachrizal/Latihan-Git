const express = require('express');
const app = express();
const port = 3000;
let Mahasiswa = ['Yul', 'Desta', 'Andra', 'Huda']
let obejctMahasiswa = [
  {nim :1112,nama : "Yulita"},
  {nim :1113,nama : "Muhammad Desta Gredy"},
  {nim :1114,nama : "Andra Ramadhani"},
  {nim :1115,nama : "Ayudha Kusuma"}
]

const getobjectMahasiswa = (req, res) => {
  let {nama} = req.query
  let result = ""
  
  if (nama == undefined) {
    nama = ""
  }
  obejctMahasiswa.forEach((item,index) => {
    if (item.nama.toLocaleLowerCase().includes(nama)){
    result += `<h1>${index+1}. ${"NIM: "+ item.nim}. <br> ${"Nama: "+ item.nama}<h1>`
    }
  })
    res.send(result || "Data tidak ditemukan");
  }




//Mahasiswa
// const getobjectMahasiswa = (req,res) => {
//   let result = ""
//   obejctMahasiswa.forEach((item,index) => {
//     result += `<h1>${index+1}. ${"NIM: "+ item.nim}. <br> ${"Nama: "+ item.nama}<h1>`
//   })
//   res.send(result);
// }


//Find by NIM
const getobjectMahasiswabynim = (req, res) => {
  let {nim} = req.params
  let result = obejctMahasiswa.find((item) => {
    return item.nim === Number(nim)
})
   res.send(`${result.nama}`);
}

const getMahasiswa = (req, res) => {
  let result = ""

  Mahasiswa.forEach(function(item,index){
    result += `<h2> ${index +1}. ${item}<h2>`
  })

  res.send(result);
}


app.get('/', (req, res) => {
  res.send('Hello, nama saya Muhammad Rendra Fachrizal!');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/mahasiswa', getMahasiswa);
app.get('/objectMahasiswa', getobjectMahasiswa);
app.get('/objectMahasiswa/:nim', getobjectMahasiswabynim);