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
    orderDelivery({ starterIndex = 2, mainIndex = 3, time = '22:8', address = 'shymoly' }) {
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
    orderPizza(mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
    }
};
//we can also loop over object which is not iterable
const properties = Object.keys(restaurant.openingHours)
// object.key property gula re ekta array er modee rakhe r amra indirectly array er vitor looping korteci

console.log(properties);
let openStr = `we are open on ${properties.length} days : `;


// for (const day of Object.keys(restaurant.openingHours))
//     console.log(day);
for (const day of properties)
    openStr += `${day}, `
console.log(openStr);

//property value

const values = Object.values(restaurant.openingHours);
// object.value , object er value gulare ekta array er modee store rakhe
console.log(values);

// entries are index and value or name and 
// we get key and value together in an array by using object.entries
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open: openhr, close: closehr }] of entries) {

    console.log(`On ${key} we open at ${openhr} and close at ${closehr}`);
}