'use strict'
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
    orderPizza: function (mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
    }
};

// loop through an entire array

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
// normal for loop to loop through an entire an array
// let count = 0
// for (let i = 0; i < menu.length; i++) {
//     count++;
// console.log(menu[i]);

// }
// console.log(count);

//using for of loop to loop through an array

for (const item of menu) console.log(item);

// getting current index for each iteration
for (const [i, j] of menu.entries()) {
    console.log(`${i + 1}:${j} `);
}
// console.log([...menu.entries()]);

// easy way to loop over an array 