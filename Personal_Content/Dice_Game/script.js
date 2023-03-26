'use strict';

// Selecting the elements

// First two elements to the player that's active atm
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// First two elements to the player score element
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

// First two elements to the to the current player score element
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

// Elements for the DICE
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions for the game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Array to hold the scores of each player
const scores = [0, 0];

// Variables to hold the player that's active in the game
let activePlayer = 0;

// Variable to hold the score
let currentScore = 0;

// Function to switch the players and make the code simpler
const switchPlayer = function () {
  // switch the players from the 0 to 1
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // Check if the player is active, and changes to the next active player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Toggle to the active player atm
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Hide the elements when the game is over
const gameOver = function () {
  diceEl.classList.add('hidden');
  btnHold.classList.add('hidden');
  btnRoll.classList.add('hidden');
};

// Rolling the dice

btnRoll.addEventListener('click', function () {
  // Generating the random number for the dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Displaying the dice in the HTML element
  diceEl.classList.remove('hidden');
  // Randomly display the dice according to the roll value
  diceEl.src = `dice-${dice}.png`;

  // Check if the dice roll of 1
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

// What happens when the hold button is clicked
btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  // scores[1] = scores[1] + currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // Check if the player has the need score to win the game

  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    gameOver();
  } else {
    switchPlayer();
  }
});

// Restart the game

btnNew.addEventListener('click', function () {
  location.reload();
});
