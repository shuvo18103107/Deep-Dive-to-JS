'use strict';
//by using constructor function build object
//diff between constructor func and regular func is new operator in constructor func
//in traditional oop we create object from class but in js we create object from a constructor function
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

const shuvo = new Person('shuvo', '1998');
console.log(shuvo);
//this new operator not only call the function but also
/*
1. new empty object is created
2. function is called and in this function this keyword is set for newly created obj, this = {}
3.{} linked to prototype
4.function automatically return a {} from the beginning
*/
const kamrul = new Person('Noushad Bhuiyan', '1999');
console.log(kamrul);
const noushad = 'Noushad';
console.log(shuvo instanceof Person);
console.log(noushad instanceof Person);

// prototypes




