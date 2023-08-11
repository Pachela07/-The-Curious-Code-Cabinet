// Access HTML elements

let botDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");

// Condition to check if the door is open or not.
let isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return true;
  } else {
    return false;
  }
};

// Condition to check if the player clicked on the Chore Door!

let isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

// Function to display game messages

let gameOver = (status) => {
  if (status === "win") {
    document.getElementById("start").innerHTML = "You win! Play Again?";
  } else {
    document.getElementById("start").innerHTML = "Game Over! Play Again?";
    currentlyPlaying = false;
  }
};
startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
  document.getElementById("start").innerHTML = "Good luck!";
};

// Function to progress the game
let playDoor = (door) => {
  numClosedDoors -= 1;
  // Condition to check if the door was avoided and the game was won.
  if (numClosedDoors === 0) {
    gameOver("win");
  } else if (isBot(door)) {
    gameOver();
  }
};

// Random number generator to hide in the doors and give multiple options
let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
};

// Define game logic to check doors, progress game, end game, and choose a random chore door

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

// Starting the game logics

let startRound = () => {
  // Reset the door images to the closed state.
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;

  // Reset the number of closed doors.
  numClosedDoors = 3;

  // Reset game state to playing.
  currentlyPlaying = true;

  // Decide anew where the robot will hide.
  randomChoreDoorGenerator();
};

// Start a game round
startRound();
