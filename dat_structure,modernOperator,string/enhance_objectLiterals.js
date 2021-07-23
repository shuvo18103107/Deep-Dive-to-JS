'use strict'
//various technique to write object

const weekDays = ['Mon', 'Tue', 'wed', 'Thu', 'fri', 'sat', 'sun']

const openingHours = {
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    [weekDays[4]]: {
        open: 11,
        close: 23,
    },
    [weekDays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // old way to write method
    // order: function (startterIndex, mainIndex) {
    //     return [this.starterMenu[startterIndex], this.mainMenu[mainIndex]]
    // },
    // write method in es6
    order(startterIndex, mainIndex) {
        return [this.starterMenu[startterIndex], this.mainMenu[mainIndex]]
    },
    // we recieve a object then we destruct the object
    orderDelivery({ starterIndex = 2, mainIndex = 3, time = '22:8', address = 'shymoly' }) {
        console.log(`Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${time} at ${address}`);

    },
    //es6 enhance object literals
    openingHours,
    //old way to write method
    orderPizza: function (mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
    }
};
console.log(restaurant);

// method writing style ta important
// object refer style in a object 