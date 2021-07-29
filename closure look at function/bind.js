'use strict'
// bind method also manually set this keyword on any function call
// diff is bind does not immediately call the function instead it returns a new function where the this keyword is bound

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
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}
const swiss = {
    airline: 'Swiss',
    iataCode: 'Lx',
    bookings: []

}

const book = lufthansa.book;

// book.call(eurowings, 23, 'Sarah Williams')
//using bind(this key) and it not call the function instead it returns a function

const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLx = book.bind(swiss);

book.bind(eurowings)(23, 'SHuvo Vai')
bookEw(23, 'Steven Willams',)

const bookew23 = book.bind(eurowings, 23);

bookew23('Kamrul Vai ')
bookew23('Marthar Cooper')
bookew23('John Abraham')
bookew23('Cristopher Nolan')

// with event listners
// event listner e object er method call korle setai jodi this thake taile seta dom element re call kore ekhn eitar solve hoilo oi method re bind kore object re indicate kore


lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    // here this keyword ta button element dekhai but normally jani method e this object ke refer korar kotha
    // cg it is call on an eventhandler , we know event handler a this keyword attach dom element re refer kore
    this.planes++;
    console.log(this.planes);
}
console.log(lufthansa);
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// another partial application example of bind
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23) //cg here we dont have any this keyword
console.log(addVat(500));
console.log(addVat(100));

const taxCal = function (rate) {
    return function (value) {
        console.log(value + value * rate);
    }
}
const taxval = taxCal(.25);

taxval(200);
taxval(400);
taxval(529);

// bind er khetre method ke age bind kori erpr function value baniye jokhn ichaa call dite parbo , kintu call e , call use korlei immediaely action nei