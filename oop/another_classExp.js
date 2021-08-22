'use strict';

class Account {
    constructor(owner, currency, pin) {
        //data propertiest set up
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        //without passign argument we can set also default properties on any object
        this.movements = [];
        this.local = navigator.language;
        console.log(`Thanks for opening account ${this.owner}`);
    }

    //method protottypes - public interface
    deposite(val) {
        this.movements.push(val)
    }

    withdraw(val) {
        this.deposite(-val)
    }
    approveLoan(val) {
        return true;

    }
    requesLoan(val) {
        if (this.approveLoan(val)) {
            this.deposite(val)
        }
        console.log(`Loan approve ${this.owner}`);
    }
}
const acc1 = new Account('Mohammad Ali', 'BDT', 1111);
const acc2 = new Account('john schisman', 'EUR', 2222);
console.log(acc1);
console.log(acc2);

// acc1.movements.push(250, 500, 300);
// acc1.movements.push(250, -500, -400);
acc1.deposite(500)
acc1.withdraw(200)
console.log(acc1);
acc1.requesLoan(5000)
console.log(acc1);



