'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Its show time!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 200;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

/// EVENT LISTS HERE ///

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!!';
//   }
// });

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '👌 Thats the correct answer';

// document.querySelector('.number').textContent = 44;
// document.querySelector('.score').textContent = 23;

// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);

// CLICK EVENT LISTS HERE ///

// Defining the random number generator
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Defining the variable for the user score calculation
let userScore = 20;

// Highscore variable for the user score calculation

let highScore = 0;

// Function to the display message part
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Select the variable .check and add a event when is clicked, the event should
// always be defined in a function

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Multiple cenarios for all the conditions
  if (!guess) {
    displayMessage('🙅 no number! ');
    // Check if the number is equal
  } else if (guess === secretNumber) {
    displayMessage('👌 Congratulations!! thats the correct number!');
    document.querySelector('.number').textContent = secretNumber;

    // Changes the background color and the width of the message
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Check if the userScore is higher than the current highscore and changes it accordingly
    if (userScore > highScore) {
      highScore = userScore;
      //Changes the value of the class with the highest score
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    // Nested if to check if the score is still positive, so it doesn't go negative
    if (userScore > 1) {
      // Using the ternary operator to check if the conditions
      displayMessage(
        guess > secretNumber
          ? 'The number is too high! 😶‍🌫️'
          : 'The number is too low!! 😓'
      );
      //Removing a point from the user score
      userScore--;
      // Changing the value of the class and updating the user score
      document.querySelector('.score').textContent = userScore;
    } else {
      displayMessage(' You lost the game!! 😢😢');

      document.querySelector('.score').textContent = userScore - 1;
    }
  }
});

// RESET THE BUTTON TO DEFAULT VALUES OF THE GAME
document.querySelector('.again').addEventListener('click', function () {
  userScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing again..! ');
  document.querySelector('.score').textContent = userScore;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '? ';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
