'use strict'
// function returning function


const greed = function (gretting) {
    return function (name) {
        console.log(`${gretting} ${name}`);
    }
}
// greed function returns a function and we store it
const greeterHey = greed('Hey')

greeterHey('Mohammad Ali ')
greeterHey('Kamrul')
greeterHey('Albert')
greeterHey('Robert')

// another way

greed('Hello')('Shuvo')

// function returns a function is very useful in the case of functional programming

const greet = (gretting) => (name) => console.log(`${gretting} ${name}`);