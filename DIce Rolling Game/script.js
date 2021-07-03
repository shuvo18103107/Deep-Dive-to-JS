'use strict';
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

+ Add an input field to the HTML where players can set the winning score, so they can change the predefined score of 100.
+ Add another dice. A player loses if one of dices shows 1

*/
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
const scoreButton = document.getElementById('finalScoreInput')
const help = document.querySelector('.help')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close')

let playing, finalScores, score, activePlayer, playingScore;

// initial setup when game load first time
// bug -> player winner class kivabe remove korbo player 2 i mean active player 1 theke

const notification = function () {
    // Get the snackbar DIV
    let x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}
const init = function () {
    notification()

    document.getElementById('finalScoreInput').disabled = false;
    rollBtn.disabled = false;
    holdBtn.disabled = false;


    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    curScore0.textContent = 0;
    curScore1.textContent = 0;
    finalScores = [0, 0];
    score = 0;
    activePlayer = 0;
    console.log(`after set  active player : ${activePlayer}`);
    document.getElementById('helpIcon').style.color = '#000000';


    // document
    //     .querySelector(`.player--${activePlayer}`)
    //     .classList.remove('player--winner');
    // document.getElementById(`score--${activePlayer}`).style.fontSize = '8rem';
    // document.getElementById(`score--${activePlayer}`).style.color = '#c7365f';
    diceEl.classList.add('hidden');

    document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    // console.log(activePlayer);
};


init();
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // global score o 0 kore dibo noile ager score tai thakbe
    score = 0;
    // document.querySelector(`player--${activePlayer}`).classList.remove('player--active')

    // player score switch korai dilam

    activePlayer = activePlayer == 0 ? 1 : 0;

    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

// rolling dice functionality

rollBtn.addEventListener('click', function () {

    playingScore = Number(document.getElementById('finalScoreInput').value);
    if (playingScore == 0) {
        playing = false;
        notification();
    }
    else {
        playing = true;
    }

    if (playing) {

        document.getElementById('finalScoreInput').disabled = true;
        // 1. gen a random dice roll
        const randomNum = Math.floor(Math.random() * 6) + 1;
        // const randomNum = Math.trunc(Math.random() * 6) + 1
        // console.log(randomNum);

        // 2.display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${randomNum}.png`;
        // 3. check if rolldice 1 true then switch to next player
        if (randomNum == 1) {
            switchPlayer();
        } else {
            // add dice num to current score and display
            score += randomNum;
            document.getElementById(`current--${activePlayer}`).textContent = score;
            // using toogle method if the particular element is there then we remove it, if it is not there then we add it.

            // curScore0.textContent = score;
        }
    }
});
// hold button functionality 
holdBtn.addEventListener('click', function () {
    playingScore = Number(document.getElementById('finalScoreInput').value);
    if (playingScore == 0) {
        playing = false;
        notification();
    }
    else {
        playing = true;
    }

    if (playing) {
        //   1. add currentscore value to active players score

        finalScores[activePlayer] += score;
        document.getElementById(`score--${activePlayer}`).textContent =
            finalScores[activePlayer];

        // check if the player score is >=scoreValue
        if (finalScores[activePlayer] >= playingScore) {


            // finish the game
            playing = false;
            rollBtn.disabled = true;
            holdBtn.disabled = true;
            document.getElementById('helpIcon').style.color = '#ffffff';
            diceEl.classList.add('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document.getElementById(`score--${activePlayer}`).style.fontSize =
                '3.5rem';
            document.getElementById(`score--${activePlayer}`).style.color =
                '#03ffd5d6';
            // help.getElementsByTagName('i').style.color = 'white'
            document.getElementById(
                `score--${activePlayer}`
            ).textContent = `${finalScores[activePlayer]} Winner 🏆`;
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
            document.getElementById(`current--${activePlayer}`).textContent = score;
            console.log(`Current active player : ${activePlayer}`);
        } else {
            //  switch to the next player
            switchPlayer();
        }
    }
});
// restart button functionality
RestartBtn.addEventListener('click', function () {



    console.log('has some plaScore and after fnish the game');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.getElementById(`score--${activePlayer}`).style.fontSize = '8rem';
    document.getElementById(`score--${activePlayer}`).style.color = '#c7365f';
    console.log(`before switch to init active player num : ${activePlayer}`);

    init();







});

// help button functionality
help.addEventListener('click', function () {
    modal.classList.remove('hide')
    overlay.classList.remove('hide')


})
closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('hide')
    overlay.classList.add('hide')


})


