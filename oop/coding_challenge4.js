'use strict';

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    //public interface
    accelearte() {
        this.speed += 10;
        //    this.speed = this.speed + 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    break() {
        this.speed -= 5;
        //    this.speed = this.speed -10;
        console.log(`${this.make} is going at ${this.speed} km/h`);

        return this;
    }
}

class EVCl extends CarCl {
    //privat class field
    #charge;
    constructor(make, speed, curBatCharge) {
        super(make, speed);
        this.curBatCharge = curBatCharge;
    }
    //public interface
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
    //parent class eow same prototype ace but child class ta executed hobe
    accelearte() {
        this.speed -= 20;
        this.#charge -= 1;
        console.log(
            `${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge
            }%`
        );

        return this;
    }
}

const Rivian = new EVCl('Rivian', 120, 23);
console.log(Rivian);
// Rivian.chargeBattery(105);
// console.log(Rivian);

//upper class prototype access
//use case of pplymorphism here cg same method on both place and child method override the parent method
// Rivian.accelearte();//but same name e Ev children e method ace so eikhetre js call dibe child method er prototype ke, with this child class method can override the parent class method
// Rivian.break();
//own class prortotype access
// Tesla._accelearte()
//chaining
Rivian.chargeBattery(50)
    .accelearte()
    .accelearte()
    .accelearte()
    .chargeBattery()
    .break();
