//importing modules
// import './shoppingCart.js';
// import { addTocart, qt, shippingCart, totalPrice as price } from './shoppingCart.js';
// console.log(shippingCart);

// addTocart('bread', 5)
// console.log(price, qt);


//import everything from a module
// import * as shoppingCart from './shoppingCart.js'

console.log('importing modules');
// //now we can use anything from shopping cart module

// shoppingCart.addTocart('bread', 50)
// console.log(shoppingCart.totalPrice);

//import default export
import add, { totalPrice, qt, shippingCart } from './shoppingCart.js'
console.log(totalPrice, qt, shippingCart);

//we ca n mix together deafult export and name export but better avoid that style
//*note: imports are not copy of exports its a live connection of export