'use strict';

//implement inheritence in es6 classes we need 2 thing extend and super keyword;

class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    //adding method in class set object prototypes
    calcAge() {
        console.log(2021 - this.birthYear);

    }


}
//this extend keyword also link the prototype of parent class
class Student extends Person {
    constructor(firstName, birthYear, course) {
        // Person.call(this, firstName, birthYear)
        //don,t need to do that use super cg super is the constructor function of parent class
        //always need to be first cg otherwise we can not set this keyword in our current object

        super(firstName, birthYear);
        this.course = course;

        //*constructor function call na koreow extend er karone student er obj parent const function e initilaize hote parbe
        //*if we do not need any new property in child class then we do not need any constructor function
    }
    introduce() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);

    }
    //lets override a parent class method on student class - polymorphism
    calcAge() {
        console.log(`I am ${2021 - this.birthYear} years old, but as a student i feel more like ${2021 - this.birthYear + 10}`);
    }
}
Student.prototype.constructor = Student;

const shuvo = new Student('Mohammad Ali Shuvo', 2000, 'CSE');
console.log(shuvo);
console.log(shuvo.__proto__.__proto__ === Person.prototype);//true
console.dir(Student.prototype.constructor)//redirect from person constructor to student constructor

//access parent method






shuvo.calcAge();
//access own object method
shuvo.introduce();