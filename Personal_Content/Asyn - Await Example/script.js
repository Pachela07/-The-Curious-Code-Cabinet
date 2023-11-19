import { brainstormDinner } from "./library.js";
document
  .getElementById("decideButton")
  .addEventListener("click", async function () {
    const dinnerDisplay = document.getElementById("dinnerDisplay");
    dinnerDisplay.textContent = "Thinking...";

    try {
      let dinner = await brainstormDinner(); // This function should be defined or imported
      dinnerDisplay.textContent = `Tonight's dinner is: ${dinner}`;
    } catch (error) {
      dinnerDisplay.textContent = "An error occurred!";
    }
  });
