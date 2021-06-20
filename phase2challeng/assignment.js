'use strict'
//coding challenge 1

const calcAverage = (data1, data2, data3) => (data1 + data2 + data3) / 3;

let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolhins, avgKoalas);


// // expression function 
const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        return console.log(`Dolphin win(${avgDolhins} vs. ${avgKoalas})`);

    }
    else if (avgKoalas >= 2 * avgDolhins) {
        return console.log(`Koals win(${avgKoalas}vs. ${avgDolhins})`);

    }
    else {
        return console.log(`No team wins!`);
    }
}
checkWinner(avgDolhins, avgKoalas);
checkWinner(576, 111);
// test data 2
avgDolhins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolhins, avgKoalas);
checkWinner(avgDolhins, avgKoalas);

// coding challeng 2
const friends = ['michal', 'john', 'sarah'];
const year = new Array(2021, 2036, 2020);
console.log(friends, year);
console.log(friends[0])
friends.forEach(element => console.log(
    `selected candidates are ${element} with pass score`
))
console.log(friends.length)
console.log(friends.push('shuvo'))
console.log(friends);
console.log(friends.lastIndexOf('sarah'))
console.log(friends.map(element => element + ` selected candidate`))
// console.log(friends.pop())
console.log(friends)
console.log(friends.pop())
// console.log(friends)
console.log(friends.reverse())
console.log(friends.slice(0, 1))
friends[2] = 'jay';
console.log(friends);

const shuvo = ['Mohammad', 'Ali', 2021 - 1998, friends]
console.log(shuvo);

challenge
const calAge = function (birthyear) {
    return 2021 - birthyear;
}
const years = [1998, 1967, 2002, 2010, 2018];

const age1 = calAge(years[0]);
const age2 = calAge(years[2]);
const age3 = calAge(years[1]);
// console.log(age1, age2, age3)
const ages = [
    calAge(years[0]),
    calAge(years[2]),
    calAge(years[1]),
    calAge(years.length - 1)

]
console.log(ages)
const ages2 = [age1, age2, age3]
console.log(ages2)


// method in array 
const years = [1998, 1967, 2002, 2010, 2018];
// add element in end of the array
console.log(years.push(2021))
console.log(years.push(2022))
console.log(years)
//add element in the beginning of the array
years.unshift(2037)
console.log(years)
//remove element
console.log(years.pop());
console.log(years)
console.log(years.shift());
console.log(years)
console.log(years.indexOf(1967))
// es6 include returns true if the element is exist in the array
console.log(years.includes(1967))
console.log(years.includes(1960))


// coding challeng 2

const calcTip = function (billvalue) {
    if (billvalue >= 50 && billvalue <= 300) {
        console.log(`your billvalue is ${billvalue} and you get 15% offer`)
        return billvalue * (15 / 100)

    }
    else {
        console.log(`your billvalue is ${billvalue} and you get 20% offer`)
        return billvalue * (20 / 100)

    }
}

calcTip(100);

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(tips)
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, total)

// objects


const shuvo = {
    firstName: 'Mohammad ',
    lastName: 'Ali',
    birthdate: 1998,
    job: 'software developer',
    friends: ['kamrul', 'riad', 'ziad'],
    hasdriverLicense: false,

    calAge: function () {

        this.age = 2021 - this.birthdate;
        console.log(this);
        return this.age;
    },
    getSummary: function () {
        if (this.hasdriverLicense) {
            return `${this.firstName} ${this.lastName} is a ${this.age} years young ${this.job}, and he has drivers license`
        }
        else {
            return `${this.firstName} ${this.lastName} is a ${this.age} years young ${this.job}, and he has not any drivers license`

        }


    }

}

console.log(shuvo.calAge())
console.log(shuvo.age)
console.log(shuvo.getSummary())

console.log(shuvo)
retreive property from object

console.log(shuvo.firstName)

const reciever = prompt('what do you want to know about jonas?')
console.log(reciever);
dot notation diye access korte gele undefined asbe cg property na eta, but bracket use kore object acess korle expression o kaj kore
console.log(shuvo[reciever])
if (shuvo[reciever]) {
    console.log(`your ans is : ${shuvo[reciever]}`)
}
else {
    console.log(`your ans is not correct ${reciever}not find in shuvo object `)
}

shuvo.location = 'shymoli,Dhaka 1207';
console.log(shuvo['location'])
shuvo['twitter'] = '@mohamamdshuv4'
console.log(shuvo)
console.log(shuvo.friends[0]);

// object method
console.log(shuvo.calAge(1998));



// coding challenge 3


const mark =
{
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.Bmi = this.mass / (this.height ** 2);
        return this.Bmi;

    }
}
const John =
{
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.Bmi = this.mass / (this.height ** 2);
        return this.Bmi;

    }
}
console.log(mark.calcBMI(), John.calcBMI())



const result = function () {
    if (mark.Bmi > John.Bmi) {
        return `${mark.fullName}'s BMI(${mark.Bmi}) is higher than ${John.fullName}'s BMI(${John.Bmi}) `
    }
    else {
        return `${John.fullName}'s BMI(${John.Bmi}) is higher than ${mark.fullName}'s BMI(${mark.Bmi}) `
    }
}
console.log(result())

// loop

const shuvo = [

    'Mohammad',
    'Ali',
    2021 - 1998,

    ['albert', 'bukhari', 'sam'],
    true
]
const types = [];

for (let i = 0; i < shuvo.length; i++) {
    console.log(shuvo[i], typeof shuvo[i])

    types.push(typeof shuvo[i])
}
console.log(types)
// calculate the ages from this birthdate and store the age in a new array
const year = [1998, 1999, 2005, 2007, 2012]

const age = [];

for (let i = 0; i < year.length; i++) {
    age[i] = 2021 - year[i];
    age.push(2021 - year[i]);
}
// console.log(age)
// ----only string-----
for (let i = 0; i < shuvo.length; i++) {
    if (typeof shuvo[i] !== 'string')
        continue;
    console.log(shuvo[i], typeof shuvo[i])

}
for (let i = 0; i < shuvo.length; i++) {
    if (typeof shuvo[i] === 'number')
        break;
    console.log(shuvo[i], typeof shuvo[i])

}


// looping backwards and loops in loops

const shuvo2 = [

    'Mohammad',
    'Ali',
    2021 - 1998,
    'Software Developer',

    ['albert', 'bukhari', 'sam'],
    true
];
let i = 1;
while (i <= 10) {
    console.log(i)
    i++;
}
let dice = Math.trunc(Math.random() * 6 + 1)
console.log(dice)
while (dice !== 6) {
    console.log(`Bad Luck : you choose ${dice}. `)
    dice = Math.trunc(Math.random() * 6 + 1);
}
// coding challenge 4
const calcTip = function (billvalue) {
    if (billvalue >= 50 && billvalue <= 300) {
        console.log(`your billvalue is ${billvalue} and you get 15% offer`)
        return billvalue * (15 / 100)

    }
    else {
        console.log(`your billvalue is ${billvalue} and you get 20% offer`)
        return billvalue * (20 / 100)

    }
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    console.log(bills[i])
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i])


}



const calcAverage2 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return console.log(`average value is : ${sum / arr.length}`)


}


calcAverage2([2, 3, 4])



