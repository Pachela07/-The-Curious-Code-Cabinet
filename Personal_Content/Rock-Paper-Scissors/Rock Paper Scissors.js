const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("That's an invalid input");
    return null;
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, the computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
};

const playGame = () => {
  rl.question(
    "Enter your choice (rock, paper, or scissors): ",
    function (userInput) {
      const userChoice = getUserChoice(userInput);
      if (userChoice) {
        const computerChoice = getComputerChoice();
        console.log("The user has taken " + userChoice);
        console.log("The computer has taken " + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
      }
      rl.close();
    }
  );
};

console.log("Welcome to Rock-Paper-Scissors Game!");
playGame();

