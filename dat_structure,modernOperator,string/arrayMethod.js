'use strict';
let arr = ['a', 'b', 'c', 'd', 'e']

//array slice method 
// using slice we can extract the part of any array without changing the orginal array
console.log(arr.slice(0, 3));
console.log(arr.slice(2));
console.log(arr.slice(1, -3));
console.log(arr.slice(2, -1));

//we can use slice method to create a shallow copy of an array
console.log(arr.slice());
console.log([...arr]);

//-----splice method splice(index num, how many delete, any add(optional)) ----
//same as slice but it changes also the orginal array
// for deleting one or more element from the array we use most of the time splice method rather than eextract a part of an array and also add element in the array but add is optional

//splice(start, Num of deleteElemen, how many element will be replace)
// slice e 2nd argument not used- single element katte parbo na slice er moto suru theke ba ses theke dore katte hobe
// console.log(arr.splice(2));

console.log(arr.splice(2, 3)); //remove c, d,e
console.log(arr);// a,b


let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
//Remove 0 (zero) elements before index 2, and insert "drum"
console.log(myFish.splice(2, 0, 'drum')); // [] no element is removed
console.log(myFish);// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// Remove 1 element at index 3
console.log(myFish.splice(2, 1));// removed is ["drum"]
console.log(myFish);// myFish is ["angel", "clown","mandarin", "sturgeon"]
console.log(myFish.splice(0, 2, 'parrot', 'anemone', 'blue'));
console.log(myFish);
//Remove 2 elements, starting from index 2

console.log(myFish.splice(2, 2));
console.log(myFish);

//Remove 1 element from index -2

console.log(myFish.splice(-2, 1));
console.log(myFish);
//Remove all elements, starting from index 2
console.log(myFish.splice(2));

//Reverse Method

console.log(arr);
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr);

const arr2 = ['j', 'i', 'h', 'g', 'f']
// now using reverse method
console.log(arr2.reverse());
//reverse method muted/change the orginal array
console.log(arr2);


//CONCAT method (join 2 array and return a new array)//does not muted the orginal array
let letters = arr.concat(arr2);
console.log(letters);
//spread operator diyeow multiple array connect kora jai new array te pasapasi new data o entry kora jai
// letters = [...arr, ...arr2]
// console.log(letters);

//JOIN 

console.log(letters.join(' - '));


// looping Array using forEach


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// as usual for of loop
// for (const f of movements) {
//     console.log(f);
// }
// for Each 

// movements.forEach(function (element) {

//     console.log(element * 2);
// })

// movements.forEach(element => {
//     console.log(element);
// });

for (const [i, movemnt] of movements.entries()) {
    if (movemnt >= 0) {
        console.log(`Movement ${i + 1}: You deposited ${movemnt}`);
    }
    else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movemnt)} `); // math.absoulute remove the sign(+-)
    }
}
// now using foreach method doing the same thing in an easier way
console.log('--------ForEach-------------');
movements.forEach(
    // a call back function is called , and foreach method call this function , thats why forEach is higher order function
    // for of a index , value 
    //but forEach e value, index, entire array we are looping over
    function (movement, i, array) {
        if (movement >= 0) {
            // console.log(array);
            console.log(`Movement ${i + 1}: You deposited ${movement}`);
        }
        else {
            // console.log(array);
            console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)} `); // math.absoulute remove the sign(+-)
        }
    }

)
// for of loop break the loop and again start but for each never break the loop , it looping entire array at a time

// how forEach work with maps and sets
const currencies = new Map([

    // ei array gula ek ekta entries (key, value) evabe

    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
//map interation indirectly array er vitor entries  iterarion
//ekhane currencies ta ekta map r mapta ekta array so indirectly  we loop over array r array er vitor entries style e data thake mane [key,value]
console.log('----forEach over Map----');
currencies.forEach(function (v, i, ele) {
    console.log(i);
    console.log(v);
    console.log(ele);
})

//set in forEach set (pass kori iterable like map,object,array)
const currenciesUnique = new Set(['shuvo', 'shuvo', 'shuvo', 'ALi', 'Ali'],);
console.log(currenciesUnique);

currenciesUnique.forEach(function (v, _, arr) {

    //here key/index is the same as value , cg set in for each does not have key
    console.log(`${v}: ${v}`);
    console.log(`iteration on: ${arr}`);
})
