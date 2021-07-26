'use strict';
//Maps are lot more useful than sets
// just like object data is stored in map in key-value pair
// key diff between map and object is in map key can be any type ,it can be object,map , string , number ... but in object key is always string

// create a map
const rest = new Map();
//fill up the map, calling the set method return a new set
rest.set('name', 'Kamrul vai resturant');
rest.set(1, 'Shymoli');
rest.set(2, 'Ashkona');
//multiple value set in a map
rest
    .set('categories', ['Italiano', 'pizzeria', 'vegetarian', 'organic'])
    .set('open', 8)
    .set('close', 12)
    .set(true, 'we are open :D')
    .set(false, 'we are close :(');
console.log(rest);
// read data from the map we use get method , we have to pass keyname

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// fun example
const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// check if the map contains certain key

console.log(rest.has('name'));
//delete element in the map

rest.delete(2);
console.log(rest);
//map has size property
console.log(rest.size);

// rest.clear()
// console.log(rest);

// we can use arrays or object as a map key

// rest.set([1, 2], 'Test')

//how to get the value from an array key

// console.log(rest.get([1,2]));
// it shows undefined cg  this two arrays are actually not the same object in the heap even though we wrote in the same way 

// so solution is 
const arr = [1, 2]
rest.set(arr, 'Test')
console.log(rest.get(arr));

// we can use object as map key it is useful in dom eleemnt
// document.querySelector('h1'), the result of this is an object
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest);




// console.log(rest.get(obj))

// map is useful , we can set array and object as an key but when we get it in traditional way , its show undefined cg they are then separate object , so we have to use it asa reference style 