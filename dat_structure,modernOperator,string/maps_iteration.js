'use strict'
// there is a another method to populate element without set method
// it is not fine to use set method to set the key value in the set when there is lots of data
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

const question = new Map(
    [
        [
            'question', 'what is the best programming language in the world?'

        ],
        [1, 'C'],
        [2, 'Java'],
        [3, 'JavaScript'],
        ['Correct', 3],
        [true, 'correct🙌'],
        [false, 'Try again!😞']



    ]);
// this way of writing map is better but when we set value programatically then set method is better

console.log(question);

//convert object to map
console.log(Object.entries(restaurant.openingHours));

const hourMap = new Map(Object.entries(restaurant.openingHours))
console.log(hourMap);

//iteration on map is possble cg maps are also iterable
//quize app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key} : ${value} `);
    }
}

// get the answer from user
const ans = Number(prompt('Choose Your Answer'))

console.log(typeof ans);
console.log(question.get(question.get('Correct') === ans));

// sometimes we also need to convert a map back to in an array
//convert map to array

console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);