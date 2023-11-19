import brainstormDinner from "./library.js";

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// async/await version:
async function announceDinner() {
  // Write your code below:
  let resolvedDinner = await brainstormDinner();
  console.log(`I'm going to make ${resolvedDinner} for dinner.`);
}

announceDinner();
