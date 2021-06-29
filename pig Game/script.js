'use strict';
// selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const RestartBtn = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const curScore0 = document.getElementById('current--0');
const curScore1 = document.getElementById('current--1');


// initial setup when game load first time
score0El.textContent = 0;
// BUG i am change a const valu how is it possible - my understand said reassign not possible but refrence assign can be done like obj,property ="something"
// score0El.textContent = 5;

score1El.textContent = 0;

diceEl.classList.add('hidden');

const finalScores = [0, 0]
let score = 0;
let activePlayer = 0;
// stat variable
let playing = true;
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // global score o 0 kore dibo noile ager score tai thakbe
    score = 0;
    // document.querySelector(`player--${activePlayer}`).classList.remove('player--active')


    // player score switch korai dilam 

    activePlayer = activePlayer == 0 ? 1 : 0

    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');

}
const init = function () {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    document.getElementById(`score--${activePlayer}`).style.fontSize = '8rem';
    document.getElementById(`score--${activePlayer}`).style.color = '#c7365f';
    score0El.textContent = 0;
    score1El.textContent = 0;
    curScore0.textContent = 0;
    curScore1.textContent = 0;
    score = 0;
    activePlayer = 0;
    playing = true;
    finalScores[0] = 0;
    finalScores[1] = 0;


    document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
    console.log(activePlayer);

}
// rolling dice functionality

rollBtn.addEventListener('click', function () {
    if (playing) {


        // 1. gen a random dice roll
        const randomNum = Math.floor(Math.random() * 6) + 1;
        // const randomNum = Math.trunc(Math.random() * 6) + 1
        console.log(randomNum);

        // 2.display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${randomNum}.png`;
        // 3. check if rolldice 1 true then switch to next player
        if (randomNum == 1) {


            switchPlayer();

        }
        else {
            // add dice num to current score and display
            score += randomNum;
            document.getElementById(`current--${activePlayer}`).textContent = score;
            // using toogle method if the particular element is there then we remove it, if it is not there then we add it.


            // curScore0.textContent = score;

        }

    }

});


holdBtn.addEventListener('click', function () {
    if (playing) {


        //   1. add currentscore value to active players score

        finalScores[activePlayer] += score;
        document.getElementById(`score--${activePlayer}`).textContent = finalScores[activePlayer]

        // check if the player score is >=100
        if (finalScores[activePlayer] >= 20) {

            // finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.getElementById(`score--${activePlayer}`).style.fontSize = '4rem';
            document.getElementById(`score--${activePlayer}`).style.color = '#03ffd5d6';
            document.getElementById(`score--${activePlayer}`).textContent = 'Winner 🏆';
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            document.getElementById(`current--${activePlayer}`).textContent = finalScores[activePlayer];

        }
        else {
            //  switch to the next player
            switchPlayer();
        }

    }

})

RestartBtn.addEventListener('click', init)