/*//importing modules
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
*/
//we ca n mix together deafult export and name export but better avoid that style
//*note: imports are not copy of exports its a live connection of export
//Module pattern es6
//we use ife , so we don't need to call it manually and also it execute one time
// const shoppingCart2 = (function () {
//     //all of the variable and method are private in the function scop
//     const cart = [];
//     const shippingcost = 20;
//     const totalPrice = 237;
//     const totalQuantity = 23;
//     const addTocart = function (product, quantity) {
//         cart.push(product, quantity);
//         console.log(`${quantity} ${product} added to cart`);
//     };

//     const orderStock = function (product, quantity) {
//         console.log(`${quantity} ${product} order from supplier`);
//     };
//     return {
//         //it contains which stuffs we want to public
//         addTocart,
//         cart,
//         totalPrice,

//         totalQuantity,
//     };
// })();
// shoppingCart2.addTocart('apples', 4);
// console.log(shoppingCart2.shippingcost); //cg this is privat

//common js module
//it will not work in browser but work in nodejs
//export
// export.addToCart =function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} added to cart`);
// };
// //import
// import { addTocart } = require('./shoppingCart');



import { cloneDeep } from 'lodash';

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        {
            product: 'piza',
            quantity: 41,
        },
    ],

    user: {
        logged: false
    }
};

//copy this object in traditional way
const statcopy = Object.assign({}, state)
console.log(statcopy);
statcopy.user.logged = true;
console.log(statcopy); //copied object will also updated
//but now i want to deep clone the object
statdeepClone = cloneDeep(state)
console.log(statdeepClone);
