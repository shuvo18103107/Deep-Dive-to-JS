'use strict';
//call and apply methods
//all about this keyword and learn how we set this keyword manually and why we wants to do that

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
        );
        this.bookings.push(({
            flight: `${this.iataCode} ${flightNum}`,
            name
        }));
    },
};
console.log(lufthansa);
lufthansa.book(239, 'Mohammad Ali Shuvo');
lufthansa.book(635, 'John Smith');


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}
console.log(eurowings);

const book = lufthansa.book
// here we call a regular function call , so in regular function call this keyword undefined at least in strict mode
//does not work cg book is just a regular function
// book(23, 'Sarah Williams') 
// book is now a function , and we know function is object and object has method so function has also method like call , bind ...
//in call method first argument indicate what we want to this keyword point to
//here i trigger a method on different object using function call method
//call method
book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings);
book.call(lufthansa, 29, 'Marry Copper')
console.log(lufthansa);

const swiss = {
    airline: 'Swiss',
    iataCode: 'Lx',
    bookings: []

}

book.call(swiss, 583, 'Noushad Bhuiyan')
console.log(swiss);
// if we want to use same method on different object u have to use same property
//Apply method - same as call but main diff is apply does not recieve argument after the this keyword

const flightData = [583, 'George Cooper']
// first argu this , second have to pass array of data
book.apply(swiss, flightData)
console.log(swiss);
book.call(swiss, ...flightData)
// call method is better than using apply method , modern js we use call method

// summary 
// ekta object er method bire theke objectname.methodname diye access kora jai na, method e this use kori ba object name dei 2 khetrei bire theke access kora jai na tai undefined dekhai tai method ke ekta variable rekhe setake ekta function baniye function method use korte hobe like call and applu or bind