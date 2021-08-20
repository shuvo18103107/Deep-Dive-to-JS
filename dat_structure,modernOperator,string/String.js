'use strict'
//working with string
const airLine = 'Tap Air Portugal';

const plane = 'A320';
// we can get string certain position just like an array
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B780'[0]);
console.log(airLine.length);
console.log('Mohammad Ali'.length);

//some string method
console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
//it is case sensitive p will show -1
console.log(airLine.indexOf('Portugal'));

//slice method use extract the string (position from which extraction start, specific index length number)

console.log(airLine.slice(3));
console.log(airLine.slice(8, 16));
console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));
// extract from the end
console.log(airLine.slice(-2));
//-1 cuts out the last element
console.log(airLine.slice(1, -1));

// practical example

const checkMiddleSet = function (seat) {
    //B and E are the middel set
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        console.log('You got the middel sit');
    }
    else {
        console.log('You got lucky');
    }

}
checkMiddleSet('11B')
checkMiddleSet('23C')
checkMiddleSet('3E')

// working with string 
console.log(airLine.toUpperCase());
console.log(airLine.toLowerCase());
//fix capitalization in name
function passName(passName) {
    const passengerLower = passName.toLowerCase();
    const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
    console.log(passengerCorrect);
}
passName('ShUvo')
passName('mOhaMmAD')

//comparing user input email

function checkEmail(correct, useEmail) {
    const normalizeEmail = useEmail.toLowerCase().trim();
    console.log(normalizeEmail);
    console.log(correct === normalizeEmail);
}
checkEmail('shuvo45@gmail.com', '  Shuvo45@GMail.COM \n')

//replace a parts of string

const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');

console.log(priceUS);

const announceMent = 'All passengers come tp barding door 23, Boarding door 23!'
//replace only change first string
console.log(announceMent.replaceAll('door', 'gate'));

//using regular expression it can also be replace a;;
console.log(announceMent.replaceAll(/door/g, 'gate'));

// Booleans, we can make decison on string by this 3 method, includes,startsWith,endsWith

const planeName = 'Airbus A320neo'
console.log(planeName.includes('A320'));
console.log(planeName.includes('Bowing'));
console.log(planeName.includes('o'));
console.log(planeName.startsWith('Air'));
console.log(planeName.startsWith('A330'));

if (planeName.startsWith('Airbus') && planeName.endsWith('neo'))
    console.log('Part of the New Airbus family');

//practice expercise
const checkBaggage = function (items) {
    //good way is always at first make lowercase , it become easy for make decision
    const baggage = items.toLowerCase()
    if (baggage.includes('knief') || baggage.includes('gun')) {
        console.log('You are not allowed on board');
    }
    else {
        console.log('Welcome abroad');
    }

}
checkBaggage('I have a laptop, some Food and a pocket Knief')
checkBaggage('Socks and Camera')
checkBaggage('Got some snacks and a gun for protection')

// using spilt and join
//split a string into a multiple parts into an array based on a divider string

console.log('a+very+nice+string'.split('+'));
console.log('Mohammad Ali Shuvo'.split(' '));

const [firstName, lastName] = 'Mohammad Ali'.split(' ')
console.log(firstName, lastName);
//join is ooposite of split
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName);

const capitalizeName = function (pesName) {
    const finalName = [];
    const lowername = pesName.toLowerCase().split(' ');
    for (const i of lowername) {
        let firstIndex = i[0].toUpperCase();
        finalName.push(firstIndex + i.slice(1))
        // finalName.push(i.replace(i[0], firstIndex))

    }
    // finalName.join()
    const final = finalName.join(' ')
    console.log(final);
}



capitalizeName('jessica ann smith davis')
capitalizeName('mohammad ali shuvo')

//padding a string means add a number of character to the string untill the string has certain desired length  
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(50, '+'));
console.log('Shuvo'.padStart(25, '+').padEnd(30, '+ '));
//practical example of padding

const masterCreditCard = function (number) {
    // const str = String(number);
    //another way to convert number into a string
    const str = number + '';

    const last4Digit = str.slice(-4);
    return last4Digit.padStart(str.length, '*')

}
console.log(masterCreditCard(4578923654125478412254));
console.log(masterCreditCard(4512569));
console.log(masterCreditCard('835656121554571354212121212122034'));

//repeat method - repeat the same string multiple times
const message2 = 'Bad weather... All Departures Delayed '
console.log(message2.repeat(5));

const planeInlines = function (n) {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planeInlines(20)
planeInlines(10)
planeInlines(5)
