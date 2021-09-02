//exporting modules
console.log('Exporting module');
//here this variable and methods all are private on other module unless we export them
const shippingCart = 10;
const cart = []

// export { shippingCart }

export const addTocart = function (product, quantity) {
    cart.push(product, quantity)
    console.log(`${quantity} ${product} added to cart`);
}

console.log(cart);
const totalPrice = 27;
const totalquantity = 23;

export { totalPrice, totalquantity as qt, shippingCart }

//we use default export when we export one thing from a module
export default function (product, quantity) {
    cart.push(product, quantity)
    console.log(`${quantity} ${product} added to cart`);
} //here no name involved