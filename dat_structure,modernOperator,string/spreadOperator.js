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
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};

// spread operator
//unpacking all the array elements at onece;
const arr = [7, 8, 9];
const newarr = arr.unshift(1, 2);
//1 2 7 8 9
// console.log(arr);

// now use spread operator
//... expand the arr array and write individually all of it into the newarr1 element. arr er copy niya newarr1 e bosailam
const newarr1 = [7, 8, 9, ...arr]
console.log(newarr1);
// when we need an array eleemnt individually then we use spread operator
console.log(...newarr1);

const mainmenuspread = [...restaurant.mainMenu, 'chkicken biryani', 'haji biryani', 'hundi biryani'];
console.log(mainmenuspread);
// destruction vs spread operator big difference is 
// spread operator take all the array individual elemnt but destruction don't take all element it also create variable of specific array elemet
// important use case of spread operator
//copy array
const mainMenuCopy = [...restaurant.mainMenu];
// join 2 arrays 
const menu = [...restaurant.starterMenu, ...mainMenuCopy];
console.log(menu);

//spread operator also work on iterable means string,array,map,sets but not object
const str = 'shuvo';
const stringSpread = [...str, ' ', 'Mohammad'];
console.log(stringSpread);
console.log(`${stringSpread}, hi`);
// console.log(`${...str}, hi`);

// Real world example
// i want to get the ingredients using prompt function
const ingredients = [
    // prompt('Let\'s make pasta! Ingredients 1?'),
    // prompt('Let\'s make pasta! Ingredients 2?'),
    // prompt('Let\'s make pasta! Ingredients 3?');
]

console.log(...ingredients);
//[a,b,c]
//normal way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// using spread operator
restaurant.orderPasta(...ingredients)
//long array function e pass korar somoi spread operator better solution
// individual elemnt gulo store ace ekhn argument dorte parbe, index diye kono array value dore erpr function e pass korar theke spread operator diye kora onk easy

// in es6 spread operator also work on objects
const newResturant = { Location: 'Shymoli', ...restaurant, founder: 'Mohammad Ali', establish: 2021 }
console.log(newResturant);

const restuCopy = { ...restaurant };
restuCopy.name = "Coding cafe";
console.log(restuCopy);
console.log(restaurant);


