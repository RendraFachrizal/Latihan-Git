//Asynchronous javascript

// setTimeout(function() {
//     console.log("Saya dijalankan belakangan")
// }, 3000)

// console.log("Saya dijalankan pertama")


//promise
var isMomHappy = false;

var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand : "Samsung",
                color : "Black"
            };
            resolve(phone);
        } else {
            var reason = new Error("Mom is not happy");
            reject(reason);
        }
    }
);


function askMom() {
    willIGetNewPhone    
            .then(function (fullfilled) {
                console.log(fullfilled);
            })
            .catch(function (error) {
                console.log(error.message);
            });
}

askMom()