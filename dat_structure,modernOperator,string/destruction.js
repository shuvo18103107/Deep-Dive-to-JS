'use strict';
// destructing arrays
// break complex data structure into simple one and store it in a variable
// // Data needed for a later exercise
// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (startterIndex, mainIndex) {
        return [this.starterMenu[startterIndex], this.mainMenu[mainIndex]]
    },
    // we recieve a object then we destruct the object
    orderDelivery: function ({ starterIndex = 2, mainIndex = 3, time = '22:8', address = 'shymoly' }) {
        console.log(`Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${time} at ${address}`);

    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};
// ekta function e object pass korci
restaurant.orderDelivery(
    {
        time: '22:30',
        address: 'Mirpur 2',
        mainIndex: 2,
        starterIndex: 3,


    })
restaurant.orderDelivery(
    {

        address: 'Shymoli',
        mainIndex: 2,



    }



)
const arr = [2, 3, 4];
// destructing the array
const [x, y, z] = arr;
console.log(x, y, z);
const [first, second] = restaurant.categories;
console.log(first, second);
const [firste, , , thirde] = restaurant.categories;
console.log(firste, thirde);
let [main, , secondary] = restaurant.categories
console.log(main, secondary);
// switch the dishes
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
[main, secondary] = [secondary, main]
console.log(main, secondary);

// method theke calculative result ta destruct korbo 
const [starteri, maindish] = restaurant.order(2, 0)
console.log(starteri, maindish);
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);
// default values
const [p = 1, q = 1, r = 1] = [8];

console.log(p, q, r);
//  object destruction
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);
const { name: restaurantName, openingHours: openHour, categories: cate } = restaurant;
console.log(restaurantName, openHour, cate);
// default values
const { name: restuName = [], starterMenu: starter = [], menu = [2] } = restaurant;
console.log(restuName, starter, menu);
// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 4, c: 27 };
// overide korte hoile variable parenthesis e rakhte hoibo
({ a, b } = obj);
console.log(a, b);

// nested object acess
const { sat: { open: o, close: c }, thu, fri } = openingHours;
console.log(o, c, thu, fri);

console.log();