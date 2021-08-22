'use strict';
//inheritence between classes : constructor function
const Person = function (firstName, birthYear) {
    //set object property 
    this.firstName = firstName;
    this.birthYear = birthYear;

}

Person.prototype.calcAge = function () {
    console.log(2021 - this.birthYear);

}

const Student = function (firstName, birthYear, course) {

    // this.firstName = firstName;
    // this.birthYear = birthYear;
    //rather than repeating we can use parent person class as it is same
    Person.call(this, firstName, birthYear)//by using call we can specify this
    this.course = course;

}
//we want parent class er prototype jate student class use korte pare inheritence way te
//like person class er calcAge prototyype property student class er shuvo obj use korte pare
//object.create should be added here first then add prototype on student constructor func otherwise object.create override all the methods on student constructor func 
//linking prototype
// Student.prototype = Person.prototype this is not work it check whether this two function prototype ar same or not
Student.prototype = Object.create(Person.prototype)
console.log(Person.__proto__);
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);

}
const shuvo = new Student('Mohammad Ali Shuvo', 1998, 'CSE')
console.log(shuvo);
console.log(shuvo.__proto_ === Person.__proto_);//true
console.log(shuvo.__proto__); //here it indicate person constructor function as we use object.create to wrap person prototype to student ptototype
console.log(shuvo instanceof Student); //true
console.log(shuvo instanceof Person);//it is true because for prototype chain 
console.dir(Student.prototype.constructor); //it indicate the person constructor as we link protottypes between student and person constructor function
//solution for this prb 
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);//return student constructor
console.log(shuvo instanceof Person);// true becacuse it is a child object for parent class
//*summary : we can manupulate prototype chain manually