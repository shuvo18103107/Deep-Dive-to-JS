'use strict';
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;

}

Car.prototype.accelearte = function () {
    this.speed += 10;
    //    this.speed = this.speed + 10; 
    console.log(`${this.make} is going at ${this.speed} km/h`);

}
Car.prototype.break = function () {
    this.speed -= 5;
    //    this.speed = this.speed -10; 
    console.log(`${this.make} is going at ${this.speed} km/h`);


}
const EV = function (make, speed, curBatCharge) {

    Car.call(this, make, speed);
    this.curBatCharge = curBatCharge;


}
//link the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;


}
EV.prototype.accelearte = function () {
    this.speed -= 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`)



}
EV.prototype.constructor = EV;

const Tesla = new EV('Tesla', 120, 23);
console.log(Tesla);
Tesla.chargeBattery(105);
console.log(Tesla);

//upper class prototype access
//use case of pplymorphism here cg same method on both place and child method override the parent method
Tesla.accelearte();//but same name e Ev children e method ace so eikhetre js call dibe child method er prototype ke, with this child class method can override the parent class method 
Tesla.break();
//own class prortotype access
// Tesla._accelearte()