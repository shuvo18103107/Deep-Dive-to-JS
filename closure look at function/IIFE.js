'use strict';
//immediately invoked function expresiion 
// sometimes in js we need a function that only execute at once
// in async/wait this type of function is needed


// by wrapping this we transform the function into an expresion

//()we immediately called this function expression , so it is called immediately invoked function expression
//two ways of writting iife
(function () {
    console.log('This will never run again');
    //var, let , const jetai dei na kn access korte parbe na outside theke 
    var isPrivate = 23;
    const isPri = 23;
})();

(() => console.log('This will never run again in arrow'))();


// why this structure needed
//we know function are scoped , one scoped does not access the inner scope

console.log(isPrivate); // we can not access, in scoped all data are private
console.log(isPri);
// iife nowadays in modern js not needed , cg for data privacy if we use let and const in a scop it become private , iife is useful when we declare variable in var and we want to protect the data then it can be useful , but in modern js we don't need that
// but if we need that a function execute need just once then in modern js it's also useful to use iife