'use strict';
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();

//my explanation 
/*
At first immediately invoked function expression is called and it execute just for the 1 time
then  this iife destroy and all its variable environment i mean variable set to global scope
then when click in the body eventlistner e call back function parent function er global scope e thaka
variable access kore  kaj korlo, this is a good closure function example

*/