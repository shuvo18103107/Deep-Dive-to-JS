'use strict';

//a simple pop app
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    //object enhance 1.
    registerNewAnswer() {
        const usrInput = Number(
            prompt(
                `${this.question}\n ${this.options.join('\n')}\n (Write Option Number)`
            )
        );
        // console.log(usrInput);
        //using short circuiting , if correct then code execute otherwise break , i can use if but i use short circuit here
        typeof usrInput === 'number' &&
            usrInput < this.options.length &&
            this.answers[usrInput]++;
        // console.log(this.answers);
        //4.
        //kicui pathai nai tai deafult value ekhetre kaj korbe
        // deafult pathaile array ta dekhamu 
        // this.displayResults();
        // er bire ja pathai value dekhamu
        this.displayResults(23);
    },
    //3.
    displayResults(type = 'array') {
        console.log(type);
        if (type === 'array') {
            console.log(this);
            console.log(this.answers);
        }
        else if (type === 'string') {
            console.log(this);
            //always execute  whatever pass in the function except empty
            // console.log(typeof type);
            // console.log(type);
            //spread operator array er vitor rekhe kaj koraite hoi
            // console.log(`Poll results are ${[... this.answers]}`);
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
        // else if (type) {
        //     console.log(`hi ${type}`);
        //     // console.log(type);
        // }

    }
};


// console.log(poll);

// poll.registerNewAnswer();

// console.log(poll.answers);

//2. call the method using bind
document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll)); //cg object er vitor method event e call korle dom element dore tai bind kore object ke chinai dite hoi


// method ke object er  bire theke call 
// common way acess object and call
// // const book = poll.displayResults
// const bindBook = poll.displayResults.bind(poll)
// console.log(bindBook);
// // book.call(poll, 'string')
// // book.call(poll, 'array')
// bindBook('array')
// bindBook('string')

// ekhn object access korar por object er array ta access na kore amra chai custom ekta array acess koraite
//mane this keyword er acess niye object ke refer korte chai na
//call e specific vabe object point na korai dile ja pass korbe oitai this 
// if we use diff this keyword then just only call , cg in call method we can manually set this keyword  here manual this is ->{ answers: [5, 4, 3, 2] }, 
poll.displayResults.call({ answers: [5, 4, 3, 2] }, 'string')
poll.displayResults.call({ answers: [2, 4, 6, 7, 8, 9] }, 'array')
poll.displayResults.call({ answers: [2, 4, 6, 7, 8, 9] })
//type = array
//if er vitor duke dekhbe call er vitor answer kei refer korce 