'use strict'
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    // global variable so we can access
    console.log(firstName);

    function printAge() {
        let output = `you are ${age}, born in ${birthYear}`
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            //creating new var with same name  as outer scope variaable
            const firstName = 'noushad';
            // js not print the global scope it will print the current scope variable
            const str = `Oh , you are a millonial, ${firstName}`
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            // output var access korte parbo kintu ei block er bire kaj korbe na cg let block scoped
            //reassign outer scope variable
            output = 'new output';
            // console.log(output);
        }
        // block scop we cannot scop this var
        // console.log(str);
        console.log(millenial);
        console.log(output);
        // but in strict mode function is also blocked scoped like let and const
        // console.log(add(3, 7));
    }

    printAge();
    return age;

}
const firstName = 'shuvo';
calcAge(1991);
