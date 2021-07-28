// first class vs higher order function
//js treates function as first class citizen. it simply values and just another type of object
// so as value we can store function in variable
// we can also pass function as argument to other function
// we can return function from a function
// function methos -> call method on function ex:bind method



//--------Higher order function-------------

//a function that recieves another function as an argument, that returns a new function or both
// possible due to first class function

const greet = () => console.log('hey shuvo');
Btn.addEvenListener('click', greet);
//addEventListener is higher order function , beacuse it recieve a call back function greet as an input, it is call back function cg it calls letter by the higher order function

// another example of higher order function
// function that returns a new function

function count() {
    let count = 0;
    return function () {
        count++;
    }
}

