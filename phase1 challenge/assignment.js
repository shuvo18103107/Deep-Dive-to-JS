//variabels
const country = 'Bangladesh';
const continent = 'Asia'
const population = '163 millions'

console.log(country);
console.log(continent);
console.log(population);

// data types
const isisland = true;
const language;
console.log(isisland);
console.log(typeof isisland);
console.log(language);
console.log(typeof language);


const language = 'Bangla';

const PI = 3.1416;
language = "English";
console.log(language);
console.log(PI);
PI = 4522;
console.log(PI);

//  assignment operator 
const x = 10;
x += 10;
x++; //21
x--;
x--;
x--;

population = 1600
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
const avgp = 33;
console.log(population < avgp);
const description = "Portugal is in Europe" + "," + "and its 11 million people speak portuguese";
console.log(description);


//coding challenge 2
const marks_Mass = 78;
const john_Mass = 92;
const marks_height = 1.69;
const john_height = 1.95;

const marksBMI = marks_Mass / (marks_height ** 2);
console.log(marksBMI);

const johnBMI = john_Mass / (john_height ** 2);
console.log(johnBMI);

const markHigherBMI = marksBMI > johnBMI;
console.log(markHigherBMI);

if (markHigherBMI)
    console.log("Mark's BMI is higher than John's");
else console.log("John's BMI is higher than Mark's!");


console.log(`Mark's BMI (${marksBMI}) is higher than john's(${johnBMI})`);

//coding challeng 3
const Dolphins = (96 + 108 + 89) / 3;
const Koalas = (88 + 91 + 110) / 3;
console.log(Dolphins, Koalas);

if (Koalas > Dolphins)
    console.log("Koalas win the game")
else if (Koalas === Dolphins)
    console.log("game is draw 😊")
else console.log("Dolphines win the game")

const dolphines = 97 + 112 + 101;
const koalast = 97 + 112 + 101;
if (dolphines >= 100 && dolphines > koalast)
    console.log("Dolphines win the game against koals");
else if (koalast >= 100 && koalast > dolphines)
    console.log("koalas win the game against dolphines")
else if (dolphines >= 100 && koalast >= 100 && dolphines === koalast)
    console.log("The game is drawn , no one win the game")

// coding challenge 4
const billvalue = 275 + 40 + 430;

const tip = (billvalue <= 300 && billvalue >= 50) ? billvalue * .15 : billvalue * .2
console.log(`The bill was ${billvalue}, the tip was ${tip} and the total value ${billvalue + tip}`)