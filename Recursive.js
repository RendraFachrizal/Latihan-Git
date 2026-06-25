// //recursive function
function countdown(number) {
    console.log(number);
    var newNumber = number - 1;
    if (newNumber > 0){
        countdown(newNumber);
    }
}

countdown(4);


//first-class function
console.log("------------------------------")
function HitungLingkaran(radius) {
    var pi = 22/7

    function luas (r){return pi * r * r}
    function keliling (r){return 2 * pi * r}
    console.log("Luas: ", luas(radius))
    console.log("Keliling: ", keliling(radius))
}

HitungLingkaran(7)



//Quiz
function HitungPersegi(sisi) {
    function luas (s){return s * s}
    function keliling (s){return 4*s}
    console.log("Luas: ", luas(sisi))
    console.log("Keliling: ", keliling(sisi))
}

HitungPersegi(6)


//Currying function
function tambah (a, b){
    return a + b
}
console.log(tambah (2, 5))

function tambah (a){
    return function (b){
        return a + b
    }
}
console.log(tambah(2)(5))

