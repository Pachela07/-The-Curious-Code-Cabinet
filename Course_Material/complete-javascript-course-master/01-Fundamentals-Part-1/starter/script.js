// let js = "amazing";
// console.log(40 + 30 + 20);

// let firstName = "Jonas";
// console.log(firstName);

//  DATA TYPES

/*
let country = "Portugal";
let population = 32.5;
let isIsland = true;
let language = "";

console.log(country);
console.log(population);
console.log(isIsland);
console.log(language);
*/

// LET, CONST AND VAR

// MATHEMATICAL FUNCTION
/*
const now = 2023;

const ageJonas = now - 1993;
const ageSarah = now - 2012;

console.log(ageJonas);
console.log(ageSarah);

const firstName = "Jonas";
const lastName = "Douchebag";

console.log(firstName + " " + lastName);

// ASSINGN OPERATORS
let x = 10 + 5;
x += 10;
console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageSarah <= 18);
*/

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avarageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, " The avarage age is ", avarageAge);*/

/*const firstName = "Dholglas";
const job = "IT Repair";
const birthYear = 1990;
const year = 2023;

const me =
  "I'm " +
  firstName +
  " i currently work as a " +
  job +
  " and i have at the present time " +
  (year - birthYear) +
  " years";

console.log(me);

const meSecond = `I'm ${firstName}, and a the momement i work as a ${job} and and i have ${
  year - birthYear
} years`;

console.log(meSecond);
*/

// DECISION STRUCTURE

/*
const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving lessons!!`);
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sarah is too young, you should wait another ${yearsLeft} years..`
  );
}
*/

// TYPE CONVERSION STRUCT
/*
const inputYear = "2023";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Johnas"));
console.log(typeof NaN);

console.log(String(23), 23);

*/

// FALSY VALUES
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean(""));
*/
/*
const money = 0;
if (money) {
  console.log(`Dont spend it all`);
} else {
  console.log(`You should get a job`);
}

let height;
if (height) {
  console.log(`Height is defined `);
} else {
  console.log(`Height is not defined!`);
}
*/

// IF STATEMENT
/*
const age = 18;

if (age === 18) console.log(`You are a adult! (STRICT)`);
if (age == 18) console.log(`You are a adult! (LOOSE)`);
if (age === "18") console.log(`You are a adult! ( FALSE CAUSE IS STRING)`);

const favorite = Number(prompt(`What's your favorite number ?`));
console.log(favorite);

if (favorite === 33) {
  console.log(`Your favorite number is now ${favorite}`);
} else if (favorite === 7) {
  console.log(`7 is also a cool number!`);
} else {
  console.log(`Your trying uncool numbers!!`);
}
*/

// BOOLEAN VARIABLES
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasDriversLicense);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Should ask someone else to drive `);
// }

const isTired = false;
console.log(hasDriversLicense && hasDriversLicense && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Should ask someone else to drive `);
}
*/

/// SWITCH STATEMENT

// const day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log(`Plan course structure`);
//     console.log(`Go to the coding meet up `);
//     break;

//   case "Tuesday":
//     console.log(`Prepare theory videos`);
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log(`Write the code examples`);
//     break;
//   case "Friday":
//     console.log(`Record the videos`);
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log(`Enjoy the weekends`);
//     break;

//   default:
//     console.log(`Not a valid day!`);
//     break;
// }

// const day = "Saturday";

// if (day == "Monday") {
//   console.log(`Plan the course structure`);
//   console.log(`Go to the coding meet up `);
// } else if (day == "Tuesday") {
//   console.log(`Prepare theory videos`);
// } else if (day == "Wednesday" && "Thursday") {
//   console.log(`Write the code examples`);
// } else if (day == "Friday") {
//   console.log(`Record the videos`);
// } else {
//   console.log(`Enjoy the weekend!`);
// }
