'use strict';
class CarCl {
    //set property 
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }


    //set prototypes, we can also set prototype manually


    get speedUs() {
        return `${this.speed} in mi/h is: ${this.speed / 1.6}`
    }

    set speedUS(value) {
        return this.speed = this.speed * value
    }
    get speedUS() {
        return this.speed;
    }


    set accerate(value) {
        console.log(this.speed = this.speed + value);

    }
    get accerate() {
        console.log(this.speed);

    }
    set break(value) {
        console.log(this.speed = this.speed - value);

    }
    get break() {
        console.log(this.speed);
    }
}

const ford = new CarCl('Ford', 120);
console.log(ford);
console.log(ford.speedUS);
ford.speedUS = 10;
console.log(ford.speedUS);
console.log(ford);
ford.accerate = 20;
ford.accerate;
console.log(ford);
ford.break = 5;
ford.break;
console.log(ford);
