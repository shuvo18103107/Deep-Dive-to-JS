'use strict'
// sets is just a collection of unique values
// in the set(here we pass iterable)
//set can hold mixed data types
const ordersSet = new Set(['p asta', 'pizza', 'pizza', 'Risotto', 'pasta', 'pizza'])

console.log(ordersSet);
console.log(new Set('Mohammad'));
console.log(ordersSet.size);
// curtain element in the sets is exis or not
//in array we use includes but in set we use has method
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('Bread'));
// add new element in the set
ordersSet.add('Chicken')
ordersSet.add('garlic bread ')
console.log(ordersSet);
// delete element in the set
ordersSet.delete('Chicken')
console.log(ordersSet);
// retrieve any value from set is not possible , cg all values are unique and there is no order 

// clear all value from set
// ordersSet.clear();
// console.log(ordersSet);
// sets are iterable so we can loop over them

for (const order of ordersSet) {
    console.log(order);

}
//main use case od sets is remove duplicate values from arrays

//example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']
// unique array findout
const position = [...new Set(staff)]
console.log(position);
// now we convert set to array, it is easy because both are iterable, we know spread operator work on all iterable

// position array er size 
console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size);
console.log(new Set('MohammadAliShuvo').size);

//unique value findout korte set helpful but array er replace kokhonoi na 