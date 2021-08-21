'use strict';
//object.create is same mechanism like prototype inheritence
//by using this we manually set object prototype

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Instance methods
    // Methods will be added to .prototype property


}
//set all the linked object prototype 
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    greet() {
        console.log(`Hey ${this.fullName}`);
    },
    Init(firstname, birthYear) {
        this.firstname = firstname;
        this.birthYear = birthYear;
    }


}
const shuvo = Object.create(PersonProto);
const noushad = Object.create(PersonProto)
console.log(shuvo);
console.log(noushad);
shuvo.fullName = ' Mohammad Ali Shuvo';
shuvo.birthYear = 1998;
noushad.fullName = 'Noushad Bhuiyan';
noushad.birthYear = 1995;
shuvo.calcAge();
shuvo.greet();
noushad.calcAge();
noushad.greet();
console.log(shuvo.__proto__ === PersonProto);
const jonas = Object.create(PersonProto)
jonas.Init('Jonas Schesman', '1995');
console.log(jonas);

