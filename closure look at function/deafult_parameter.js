'use strict'

//default parameter

//sometimes its useful to have a function that parameter is set by default
const bookingArr = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    //if numPassengers has no value its undefined so it is a falsy value and then or operator execute the deafult value
    //es5 way to set deafult parameter
    // numPassengers = numPassengers || 1
    // price = price || 199

    const booking = {
        // flightNum : flightNum
        //using inhance object, this variable create a property with the same name
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookingArr.push(booking)

}

createBooking('LH123', 2, 2500);
createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

