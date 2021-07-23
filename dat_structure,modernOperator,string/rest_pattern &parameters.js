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
// rest pattern is completly opposite of spread operator
// collect individual element and store it in array -pack elements into an array

// Rest pattern in destructing
//spread, because on right side of =
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b);
// rest pattern take 3 , 4 , 5 individual eleemnt and store it together
console.log(others);

const [piz, , resiTo, ...rest] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(piz, resiTo, rest);

//objects example use in rest pattern

const { sat: saturday, ...othersWeek } = { ...restaurant.openingHours };
console.log(saturday, othersWeek);

// rest pattern in function
// like spread pass multiple argument in the same time

const add = function (...numbers) {
    console.log(numbers)
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

    }
    console.log(sum);


}

add(2, 3);
add(5, 3, 7, 9);
add(8, 2, 5, 3, 1, 4);

const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mushroom', 'onions', 'olives', 'spinach')
restaurant.orderPizza('mushroom')
