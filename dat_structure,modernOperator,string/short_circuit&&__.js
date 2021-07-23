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
//logical operator use case
//1. use any data type,2.return any dta type 3. short -circuiting
// result of or operator always boolean hobe na 
console.log('-----OR------');
console.log(3 || 'shuvo');
// here the first value is a truthy value so js not look for 2nd operand as it an or operator so it returns 3, that is short circuiting
// output 3 
console.log('' || 'shuvo');
// '' is a falsy value
console.log(true || 0);
console.log(undefined || null);
//undefined and null both are falsy value 

console.log(undefined || 0 || '' || 'hello' || 23 || null);
// here hello is the first truthy valu in this chain
// practical example , set default value and check
restaurant.numGuests = 20;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guest1);
// applying short circuit in or operator in this case
const guest2 = restaurant.numGuests || 10;
console.log(guest2);
console.log('-----AND-----');
//exact opposite of or  , it returns falsy value 
console.log(0 && 'shuvo');
console.log(7 && 'shuvo');
console.log('hello' && 23 && null && 'shuvo');
//real example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroom', 'spinach')
}
//using and in that case if exist then check
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach')

// the nullish coalescing operator
console.log('----nullish operator---');
// here we set 0 but it returns 10 
restaurant.numGuests = 0;


// applying short circuit in or operator in this case
//nullish - undefined and null (not 0 or '')
const guest3 = restaurant.numGuests || 10;
console.log(guest3);
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);