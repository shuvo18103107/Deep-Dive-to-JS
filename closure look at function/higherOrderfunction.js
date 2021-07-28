// higher order function - function that recieve a function or return a function

const oneWord = function (str) {
    //this function takes a string and returns a new string without spaces
    //replace all the spaces into an empty string
    return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ')
    console.log(others);
    console.log([first.toUpperCase(), ...others].join());
    return [first.toUpperCase(), ...others].join().replaceAll(',', ' ')

}

//higher order function
const transformer = function (str, fn) {
    console.log(`Orginal String ${str}`);
    console.log(`Transform String :${fn(str)}`);
    // function has also property and method one of the property is name
    console.log(`Transformed by: ${fn.name}`);
    //output transformed by upperFirstWord

}
transformer('Javascript is the best!', upperFirstWord)
transformer('Javascript is the best!', oneWord)
// js uses callback all the time
const high5 = function () {
    console.log('👋');
}
document.body.addEventListener('click', high5);

['Shuvo', 'Jonas', 'Albert', 'Kamrul'].forEach(high5)
