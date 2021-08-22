'use strict';

//object link to other object
const PersonProto = {

    //adding method in class set object prototypes
    calcAge() {
        console.log(2021 - this.birthYear);

    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;

    }




}

const steven = Object.create(PersonProto)

steven.init('Mohammad Ali Shuvo', 1987);
console.log(steven);

const StudentProto = Object.create(PersonProto);
//add a method 



//add same method on studentproto object
console.log(StudentProto.__proto__);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

//call this method
StudentProto.init('Jonas ', 1995, 'CSE')
console.log(StudentProto);
StudentProto.introduce = function () {

    console.log(`My name is ${this.firstName} and I study ${this.course}`);

}
StudentProto.introduce();
console.log(StudentProto);
//creat another  object which has prototype access on both student and parent
const kamrul = Object.create(StudentProto)
kamrul.init('Kamrul Islam Bhuiyan', 1975, 'CSE')

console.log(kamrul);
//* summary: new kore object create kortece r parent er prototype access korte parce
