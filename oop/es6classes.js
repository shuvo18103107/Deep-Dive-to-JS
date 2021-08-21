///////////////////////////////////////
// ES6 Classes
// Class expression
// const PersonCl = class {}
// Class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.fullName}`);
    }
    get age() {
        return 2021 - this.birthYear;
    }
    //* important cg whenever we set a property
    set finalName(name) {
        console.log(name);
        if (name.includes(' ')) this.fullName = name;
        else alert(`${name} is not a full name!`);
    }
    get finalName() {
        return this._fullName;
    }

    //* important cg whenever we set a property that alreay exist then use _
    //*whenever we need validation and create new object property then setter is useful
    set fullName(
        name //same as property name so we get the value from object property name ->fullName
    ) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        //new property set same name diye so use underscore_
        else alert(`${name} is not a full name!`);
    }
    get fullName() {
        return this._fullName;
    }
}
const jessica = new PersonCl('Jessica Davis', 1996);
const kamrul = new PersonCl('Kamrul', 1995);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype); //true
// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.fullName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted it means we cannot use them brfore declaration
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
//   const walter = new PersonCl('Walter White', 1965);
//   // PersonCl.hey();

//setter and getter
//every obj in js has setter and getter property, they are just normal function that get and set value
//get use kore object er vitor method call kora hoi property hisave
const account = {
    owner: 'Mohammad Ali Shuvo',
    movements: [200.5, -500, 560],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        return this.movements.push(mov);
    },
};

console.log(account.latest); //not like account.latest(), by using get it become property
console.log((account.latest = 1000));
console.log(account.movements);

console.log(jessica.age);
//*setter and getter is very useful in data validation

console.log((kamrul.finalName = 'kamrul'));
