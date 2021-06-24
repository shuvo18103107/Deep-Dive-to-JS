'use strict ';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 20
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.label-score').textContent);
// document.querySelector('.guess').value = 21;
// console.log(document.querySelector('.guess').value);
// start
let randomNum = Math.floor(Math.random() * 20) + 1;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

let score = 20;
let highScore = 0;

// console.log(score, typeof score);
// console.log(document.querySelector('.label-score').textContent);


document.querySelector('.check').addEventListener("click", function () {


    // got the input number
    const inputData = Number(document.querySelector('.guess').value)
    console.log(typeof inputData);
    // when there is no input

    if (!inputData) {
        displayMessage('No Number inserted☹️');


    }
    else {

        // when player wins 
        if (inputData == randomNum) {
            document.body.style.background = "#60b347";
            document.querySelector('.number').style.width = '30rem'
            displayMessage('Correct Answer🙌');
            document.querySelector('.number').textContent = randomNum;
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;

            }
            // console.log(highScore);

            // if (score > highScore) {
            //     highScore = score;
            //     document.querySelector('.highscore').textContent = highScore;

            // }

            // randomNum = Math.floor(Math.random() * 20) + 1;
            // document.querySelector('.number').style.width = '15rem'
            // document.querySelector('.number').textContent = '?';





            // reset the game



        }
        // else if (inputData != randomNum) {
        //     document.querySelector('.message').textContent = 'Wrong Answer😥'

        // }
        // when guess is high
        else if (inputData != randomNum) {

            document.body.style.background = "#222";


            if (score > 1) {

                displayMessage(inputData > randomNum ? '📈Too High' : '📉Too Low')




                score--;
                document.querySelector('.score').textContent = score;


            }
            else {
                document.querySelector('.score').textContent = 0;
                displayMessage('🧨Game Over!🧨');
            }




        }


    }
    // we have to compare this num with another number which is randomly computer generated 


}

)

// same functionality but some reset process will be happen
document.querySelector('.again').addEventListener('click', function () {
    document.body.style.background = "#222";
    document.querySelector('.number').style.width = '15rem'
    score = 20;
    console.log(highScore);
    // restore game value and data
    randomNum = Math.floor(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.highscore').textContent = highScore;


    // reset done 





})