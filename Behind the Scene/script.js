'use strict'
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    // global variable so we can access
    console.log(firstName);

    function printAge() {
        let output = `you are ${age}, born in ${birthYear}`
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            //creating new var with same name  as outer scope variaable
            const firstName = 'noushad';
            // js not print the global scope it will print the current scope variable
            const str = `Oh , you are a millonial, ${firstName}`
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            // output var access korte parbo kintu ei block er bire kaj korbe na cg let block scoped
            //reassign outer scope variable
            output = 'new output';
            // console.log(output);
        }
        // block scop we cannot scop this var
        // console.log(str);
        console.log(millenial);
        console.log(output);
        // but in strict mode function is also blocked scoped like let and const
        // console.log(add(3, 7));
    }

    printAge();
    return age;

}
const firstName = 'shuvo';
calcAge(1991);
// hoisting 


// console.log(me);
//it shows undefines
// console.log(job);
//it shows cannot accesible before initialized
// console.log(year);
var me = 'shuvo';
let job = ' software enginner';
const year = '1997';
// we can access function declaration before the function call
// console.log(addDec(5, 6));
// any variable dec;are with var and call it before initialize(hosted) it will be undefined
// console.log(addExp(3, 4));
// console.log(addArrow(2, 20));
function addDec(a, b) {
    return a + b;
}
// we cannot access this expresion and arrow function        before initialize
var addExp = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// example
if (!numberProducts) deleteshoppingCart();
var numberProducts = 20;
deleteshoppingCart();
function deleteshoppingCart() {
    console.log('All products deleted');
}
// example 2
//  variable declare in var create  a window object but let and const dont create it
var x = 1;
let y = 2;
const z = 3;
// console.log(x == window.x);
// console.log(y == window.y);
// console.log(z == window.z);


// best practice
// use let rather than var and if use var then ignore hosting , always declare variable first before it call
// function declaration is hosted but dont use it , at first make function then call it

// this keyword 
// method e this keyword point kore object ke
// simple function call e this keyword point kore undefined jodi strict mode e thake
// arrow function e  this keyword point kore parent function ke jetake lexical this o bole
// event listner e this keyword point dom element re jetar sathe handler attach thake

// example of this
// global object e this keyword refer kore window object re
console.log(this);
// global function ethis
const calcAgeold = function (birthtear) {
    return 2037 - birthtear;
    // regular function call so this keyword will be undefined but if it is not in strict mode then we show the global object like window
    console.log(this);
}
console.log(calcAgeold(2021));
// arrow function e this
const calcAgearrow = (birthtear) =>
    2037 - birthtear;
//arrow function e this keyword nijer ta use kore na uporer this ta use kore mane lexical this
console.log(this);

console.log(calcAgeold(2021));

// this in object, it points the object when it use in any method(object e function call)
const shuvo = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }

}

shuvo.calcAge();

const obj2 = {
    year: 2021,
}
obj2.calcAge = shuvo.calcAge;

obj2.calcAge();
// ei f ta ekhn regular function call so eta undefined hobe
const f = shuvo.calcAge;

// regular function vs arrow function
let firstName1 = ' matela';
const mohammad = {
    firstName: 'Shuvo',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        // ekta method er vitor abar function call kore this keyword acees korar solution 1
        // const self = this;
        // const isMillenial = function () { 
        //     console.log(self);  
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }
        // // ekhane this keyword undefined hobe cg regular function call e this keyword undefined
        // isMillenial();

        // solution 2 
        const isMillenial = () =>
            console.log(this.year >= 1981 && this.year <= 1996);

        isMillenial();
    },
    // never ever use this keyword in arrow function , we know arrow function cannot acces its own this rather it use window object so also dont use var
    greed: function () {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }

}

// mohammad.greed();
mohammad.calcAge();

// arguments keyword

const addexp = function (a, b) {

    return a + b;
}
addexp(2, 3);
//  if we need to pass more argument then use argument keyword no need to declare

addexp(2, 3, 5, 6, 6, 6, 6, 9);
// arrow function e this er moto argument undefined
var arrow = (a, b) => {
    console.log(arguments);
}
arrow(2, 3, 6)

// primitive vs object types

// primitive -> string,number,boolean,undefined,null,symbol,bigInt

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
//object copy kore paltaile somosaa hoi copy value tai permanent set hoi
const me = {
    name: 'jonas',
    age: 30,
};

const friends = me;
friends.age = 32;
console.log('friends', friends);
console.log('Me', me);
// primitive vs object example
// primitive types
let lastname = 'Shuvo';
let oldName = lastname;
lastname = ' ALi';
console.log(lastname, oldName);
// reference types
const jessica = {
    firstName: 'jessica',
    lastName: 'williams',
    age: 27,

}

const afterMarriage = jessica;
afterMarriage.lastName = 'Ali'
console.log(jessica, afterMarriage);
//  copying objects
const jessica2 = {
    firstName: 'jessica',
    lastName: 'williams',
    age: 27,
    family: ['Alice', 'Bob']

}
// to merge two objects
const jessicaCopy = Object.assign({}, jessica2)

jessicaCopy.lastName = 'Kamrul';
//object.assign full copy korte pare na nested object thakle full copy hoi na
jessicaCopy.family.push('Mary', 'Hanna')
console.log(jessica2, jessicaCopy);
