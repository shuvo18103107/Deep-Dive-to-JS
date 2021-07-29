'use strict';

// closures bring execution context, call stack , scop chain all about this topic together almost in a magical way

// closure is not like a thing we manusaly create like array .. , some certain situation we use closures
//
const secureBooking = function () {
    //this   var we cannot aceess outside
    let passengerCount = 0; //global scope e thake

    return function () {
        passengerCount++;

        console.log(`${passengerCount} passengers`);
    }


}

// securebooking return a function and we store it and it wrap by global execution context and store in call stack 
const booker = secureBooking()
//jotobar e call kori na kno ei function e parent variable data thakle access korte parbe etai closures 
// closures remember the birthplace of a function(securebooking) and its variable

// note: a function(booker) has acess to the variable environment of the execution context (securebooking er ve) in which it was created event after that ec gone
// booker function securebooking function er variable env mane variable gula access korte parbe cg booker oitar execution context e chilo
// closure : VE attached to the function , exactly as it was the time and place the function was created 
// function r ekta function return korle  return function parent function er variable , data acess korte pare even after the parent function destroyed that's is called closures
// closure er karone function er birth place er variable gula amra access korte pari 
// booker function passengercount pai global scope e eta securebooking e scope e giye erpr global scope e jai na direct global scope e giye update kore value

booker() // check dice passengercount r eta pabe global scope e not securebooking e cg securebooking destroyed
booker()// ager global object e value set kora oitai abar access korbe evabe jotobar call global scope e variable(parent function variable tai to global scope e giye set hoi jokhn parent function destroyed hoi) totobar update
booker()
console.dir(booker);
//scoped gula holo variable environment booker function er oikahne Closures dekhte pabo mane parent function er variable
//summary
// a closure gives a function access to all the variables of its parent function, even after that parent function has returned(mane scopeblock jotoi return koruk booker function global scope er variable access korte pare) . it craeted a reference of parents function variables
//  a closure make sure that a function does not loose connection to variables that existed at the functions birth plac, it's like a person who does not loose connection to his/her hometown

// function -- backpack(all the variable in parent function) -- variables
// function er vitor kono variable js age dekhe eita parent function er variable kina 

// ------two more situation of closures--------


// first example chilo return a function from another function e 

// second example

let f;
const g = function () {
    const a = 23;
    f = function () {
        // f function access korte parbe parent ve like a =23
        console.log(a * 2);
    }
}
const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}
g();
f();
console.dir(f);

//f function reassign by h
h();
f()
console.dir(f);
// here f function at first born in g vari function then  it access its parent variable a , again f function reborn in h variable function and it access its parent variable b

// example 3 closure
// timer
const boardPassenger = function (n, wait) {

    //timer
    const perGroup = n / 3; // parent scope e variable na thakle global scop er variable use kore jodi mile like pergroup name e variable nai supose so global scope e khujbe ei nam e paile oitai execute korbe
    setTimeout(() => {
        //this function executed after 1000 mill sec = 1sec
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups each group has ${perGroup} passengers`);
    }, wait * 1000);///cg we pass econds it converts millseconds

    console.log(`Will start boarding in ${wait} seconds`);
}

// setTimeout(() => {
//     console.log('Timer '); // like call back function
// }, 2000);
// here this call back function can execute independly the variable of its parent function even after some time 
boardPassenger(180, 5)
//closure has priority over scop chain - example

// jodi settimeout er parent function e variable na thakto, jehutu setimeout global scope e execute hocee tai eta global scoper variable e aceess korbe , cg boardpassenger function execute kore destroy hoye gele settimeout function global scope ethake tokhn age dekhe parent function e variable environment mane variable ace kina na thakle global scope er variable use kore like pergroup = 1200 here
// settimeout function use this pergroup global variable if incase it not found the parent scope variable environment means variable
const perGroup = 1000;
boardPassenger(2000, 5)