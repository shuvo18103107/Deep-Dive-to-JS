'use strict'
// how passing argument works value vs reference

const flight = 'LH234';

const shuvo = {
    name: 'Mohammad Ali SHuvo',
    passport: 245125631461
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999'
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 245125631461) {
        alert('Check in')

    }
    else {
        alert('Wrong password')
    }
}


checkIn(flight, shuvo)
//strings are premetive type so it will not change the orginal one rather then copy
console.log(flight);
// but object are refrence type so if we change it also change the orginal value, cg both are the same object in the memory heap
console.log(shuvo);

// so passing a primitive type to a function is a copy of that value but after change it will not affect the orginal one
//but passing a refrence type like object and after change it affects the orginal one also

//example
// here two function manupulating the same object
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000)
}
newPassport(shuvo)
checkIn(flight, shuvo)

//in js passing by reference does not exist only passing by value