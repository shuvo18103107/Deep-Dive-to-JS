'use strict';
//by using constructor function build object
//diff between constructor func and regular func is new operator in constructor func
//in traditional oop we create object from class but in js we create object from a constructor function
//object constructor or object blueprint
const Person = function (firstName, birthYear) {
    console.log(this); //this keyworf point kore empty object ke
    //so ei empty object e jai add kori seta function theke ses e return hobe, and ei object tai amra build korte chacii
    //adding value to this object 
    //instance property
    this.firstName = firstName;
    this.birthYear = birthYear;
    //never create method on constructor function better use protyping 
    // this.calage = function () {
    //     console.log(2037 - this.birthYear);

    // }
    //return the object by setting the properties

}

Person.nationality = 'Bangladesh';

const shuvo = new Person('shuvo', '1998');
console.log(shuvo);
//you can not add a new property to an existing object constructor:
console.log(shuvo.nationality);//undefined
// To add a new property to a constructor, you must add it to the constructor function:
//this new operator not only call the function but also
/*
1. new empty object is created
2. function is called and in this function this keyword is set for newly created obj, this = {}, object a property add
3.{} linked to prototype //object ke prototype er sathe link , set the __proto__ property to object by cloning the prototype property of constructor function
4.function automatically return a {} from the beginning, final object return from constructor function/object
*/
const kamrul = new Person('Noushad Bhuiyan', '1999');
//object create kore modify

kamrul.jobstatus = 'Teksoi';
console.log(kamrul);
const noushad = 'Noushad';
console.log(shuvo instanceof Person);
console.log(noushad instanceof Person);

// prototypes
//each constructor function has a property named prototype
//person object jehutu constructor function theke create hocee r constructor func e prototype ace so person obj inherit korte parbe prototype ke


//* constructor function er property object access korte prototype useful\
//*The JavaScript prototype property allows you to add new properties to object constructors:
console.log(Person.prototype);
//add a method to a object constructor using prototype
Person.prototype.calcAge = function () {
    return 2021 - this.birthYear;

}
//add a property to a object constructor(bluprint)
Person.prototype.religion = 'ISLAM';

Person.prototype.biodata = function () {
    console.log(`${this.firstName} born in ${this.birthYear} and current age is ${this.calcAge()} and religion is ${this.religion}`);

}

shuvo.biodata();
kamrul.biodata();
console.log(shuvo); //constructor function initialize korar por object
console.log(kamrul);

//*summary : prototype use kore object constructor e method r property add korte jari ja object instance gula pore use korte parbe kintu jodi object constructor e direct property r method add kori taile protita object instance e seta copy hoye thakbe use kori ba na kori so er jonno prototype better solution

//check  a particular object prototype
console.log(shuvo.__proto__);
console.log(Person.prototype);

console.log(shuvo.__proto__ === Person.prototype);
//* constructor function e prototype ta protita linked object er prototype
//prototype er property r method object er own property r method hobe na
//object create korar somoi own property set korte chaile constructor function e set koraite hobe value pass koraia 
//objec er own property checking method
console.log(shuvo.hasOwnProperty('firstName'));//true
console.log(shuvo.hasOwnProperty('religion'));//false