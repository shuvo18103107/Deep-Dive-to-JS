'use strict';

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;

}

Car.prototype.accerate = function () {
    console.log(this.speed = this.speed + 10);

}
Car.prototype.break = function () {
    console.log(this.speed = this.speed - 5);

}

const carobj1 = new Car('BMW', 120)
const carobj2 = new Car('Mercedes', 95)
console.log(carobj1);
console.log(carobj2);
carobj1.accerate();
carobj1.accerate();
carobj1.break();
carobj2.accerate();
carobj2.break();
