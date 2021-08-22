'use strict';
//encapsulation - keeping some property and method private inside the class

//implementing clas fields - means class properties
/*
1. public fields
2. privat fields 
public method
privat method 
there is also static version
*/
class Account {
    //1. public fields - this properties will use all linked objects
    local = navigator.language;

    // 2. privat fields - properties are now truly not accesible by outside
    #movements = []; //using # we make it private
    #pin;

    constructor(owner, currency, pin) {
        //data propertiest set up
        this.#pin = pin;
        this.owner = owner;
        this.currency = currency;
        //set a value to a privat property

        //without passign argument we can set also default properties on any object
        //protected property not privat, sata is still accessible from outside of class
        console.log(`Thanks for opening account ${this.owner}`);
    }

    //method protottypes - public interface
    //public methods
    getMovements() {
        return this.#movements;
    }
    deposite(val) {
        this.#movements.push(val)
        return this; // so that we can specify object for chaining work
    }
    _approveLoan(val) {
        return true;

    }
    withdraw(val) {
        this.deposite(-val)
        return this;
    }

    requesLoan(val) {
        if (this._approveLoan(val)) {
            this.deposite(val)
        }
        console.log(`Loan approve ${this.owner}`);
        return this;
    }
    static helper() {
        console.log('helper function for class not object');
    }

    //private methods- google chrome see this as a privat field not method , right now it is not implemented yet
    // #approveLoan(val) {
    //     return true;

    // }
}
const acc1 = new Account('Mohammad Ali', 'BDT', 1111);
const acc2 = new Account('john schisman', 'EUR', 2222);
console.log(acc1);
console.log(acc2);
//still accessible kind of fake privacy 
// acc1._movements.push(250, 500, 300);
// acc1._movements.push(250, -500, -400);
acc1.deposite(500)
acc1.withdraw(200)
console.log(acc1);
acc1.requesLoan(5000)
console.log(acc1.getMovements());
console.log(acc1);
// console.log(acc1._pin);
// console.log(acc1.#movements //not accesible 
// );
// console.log(acc1.#pin);//not accesible as it is privat property now


// console.log(acc1.#approveLoan(500)); //see asa privat field not method yet
Account.helper();
//static method not work for object like acc1.helper() will not work here

//chaining methods
acc1.deposite(300).deposite(500).withdraw(-100).requesLoan(5000).withdraw(500);
console.log(acc1.getMovements());