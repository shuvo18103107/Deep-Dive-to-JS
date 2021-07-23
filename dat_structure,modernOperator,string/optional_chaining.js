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
//at first check the element is exist or not
if (restaurant.openingHours && restaurant.openingHours.fri)
    console.log(restaurant.openingHours.fri.open);

//in es20 this type of things can be done by optional chaining
//if the certain property is not exist it return undefined immediatelu
//with optional chainning, smbol ?
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
const weekDays = ['Mon', 'Tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for (const day of weekDays) {
    console.log(day);
    // if we use variable name then use []
    // here in sat open value 0 so it isa falsy value so output not in right time , so we should use nullish operator ??
    const open = restaurant.openingHours[day]?.open ?? 'not in right time';
    console.log(`On ${day} we open at ${open}`);
}

// rest api er khetre check diya condition lekhar khetre use hobe oprtional chainning ?.

//optional chainning on calling method
//we can check method is exist or not before calling
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderristo?.(0, 1) ?? 'this food is not available');
// as orderresito exist kore na so undefined dekhabe but amra chai ekta msg show koruk so we use nullish operator to jump into the seconde operand and print the value

// optional chainning in arrays
// we can check if an array is empty
const users = [
    {
        name: 'Mohammad Ali Shuvo',
        email: 'softniquebd@gmail.com'
    }
]
//normalway
if (users.length > 0) {
    console.log(users[0].name);
}
else {
    console.log('user array empty');
}
// in optional chaining 
console.log(users[0]?.name ?? 'User array empty');

// when use optional chaining ?. also use nullish operator ?? if incase we can not get particular object ,method, arrays