'use strict';
//encapsulation - keeping some property and method private inside the class
'use strict';

class Account {
    constructor(owner, currency, pin) {
        //data propertiest set up
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        //without passign argument we can set also default properties on any object
        //protected property not privat, sata is still accessible from outside of class
        this._movements = []; //making this privat using _
        this.local = navigator.language;
        console.log(`Thanks for opening account ${this.owner}`);
    }

    //method protottypes - public interface
    getMovements() {
        return this._movements;
    }
    deposite(val) {
        this._movements.push(val)
    }

    withdraw(val) {
        this.deposite(-val)
    }
    _approveLoan(val) {
        return true;

    }
    requesLoan(val) {
        if (this._approveLoan(val)) {
            this.deposite(val)
        }
        console.log(`Loan approve ${this.owner}`);
    }
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



