"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicenses = true; // test
// if (hasDriversLicense) console.log(`You can drive!!`);

// function logger() {
//   console.log(`My name is Dholglas`);
// }

// // Calling the function // running // invoking the function //
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// // Needs a new variable to call the function
// const myJuice = fruitProcessor(5, 4);
// console.log(myJuice);

// // Can also call the function directly
// console.log(fruitProcessor(5, 4));

// Function declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// console.log(calcAge1(1996));

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age2 = calcAge2(1990);
// console.log(age2);

// Arrow function declaration

// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1990);
// console.log(age3);

// const yearsRetired = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsRetired(1990, "Dholglas"));
// console.log(yearsRetired(1996, "Flavia"));

// function cutFruit(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruit(apples);
//   const orangePieces = cutFruit(oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(4, 3));

// INTRODUCTION TO ARRAY

// const myFriends = [" Jorge", "Marcos", "Jose"];
// console.log(myFriends);

// const years = new Array(1991, 1994, 1995);
// console.log(years);

// console.log(myFriends[0]);
// console.log(myFriends[2]);

// console.log(myFriends.length);
// console.log(myFriends[myFriends.length - 1]);

// myFriends[2] = "Pedro";

// console.log(myFriends[2]);

// // Array with different types

// const Dholglas = ["Dholglas", "Rodrigues", 2023 - 1990];
// console.log(`Hi my is ${Dholglas}`);

// Exercise call age

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const years = [1990, 1967, 2022, 2010, 2018];

// const age1 = console.log(calcAge(years[0]));
// const age2 = console.log(calcAge(years[3]));
// const age3 = console.log(calcAge(years[years.length - 1]));

// const ages = [];

// METHODS WITH ARRAYS

// PUSH ADDS ELEMENTS TO THE END OF THE ARRAY
// const friends = ["Jose", "Fernando", "John"];
// friends.push("Marcos ");
// console.log(friends);

// //UNSHIFT ADDS ELEMENTS TO THE START OF THE ARRAY
// friends.unshift("Goku");

// //POP REMOVES ELEMENTS FROM THE ARRAY ( LAST ELEMENT)
// friends.pop();
// console.log(friends);

// // SHIFT REMOVES ELEMENTS FORM THE START OF THE ARRAY

// friends.shift();

// // RETURN IF THERE'S A ELEMENT IN THE ARRAY OR NOT

// console.log(friends.includes("Jose"));

/// INTRODUCTION TO OBJECTS

// const person = {
//   firstName: "Dholglas",
//   lastName: "Rodrigues",
//   age: 2023 - 1990,
//   job: "Junior Full Stack Developer",
//   friends: ["Jose", "Flavia", "Maria"],
// };

// console.log(person);
// console.log(person.lastName);
// console.log(person.friends);

// const interestedIIn = prompt(
//   `What would you like to know about this person? --> firstName,lastName,age,job?`
// );
// console.log(person[interestedIIn]);

// if (person[interestedIIn]) {
//   console.log(person[interestedIIn]);
// } else {
//   console.log(`That's not a valid option! `);
// }

// person.location = "Portugal";
// person.sex = "Let's do it !";

///////////////////////////////////////////////

// const bestFriend = prompt(`Do you know who is the best friend ?`);

// if (person.friends === person.friends[0]) {
//   console.log(
//     `The best friend of ${person.firstName + " " + person.lastName} is ${
//       person.friends[0]
//     }`
//   );
// } else {
//   console.log(`He's nowhere to be found..`);
// }

// OBJECT METHODS

// const person = {
//   firstName: "Dholglas",
//   lastName: "Rodrigues",
//   birthYear: 1990,
//   job: "Junior Full Stack Developer",
//   friends: ["Jose", "Flavia", "Maria"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // },

//   calcAge: function () {
//     return 2023 - this.birthYear;
//   },

//   // calcAge: function () {
//   //   this.age = 2023 - this.birthYear;
//   //   return this.age;
//   // },

//   getSummary: function () {
//     return `
//     ${this.firstName}
//     ${this.lastName} is a
//     ${this.calcAge()} currently working as a
//     ${this.job}. and he has a valid drivers license
//     ${this.hasDriversLicense}`;
//   },
// };

// // console.log(this.age);

// // CHALLENGE OBJECTS

// console.log(person.getSummary());

// THE FOR LOOP !!

// console.log(`Lifting weights are fucking brutal!! `);

// CODE KEEPS RUNNING UNTIL CONDITION IS TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights are repetion ${rep}!! `);
// }

// const person = [
//   "Jonas",
//   "Douchebag",
//   2023 - 1991,
//   "teacher",
//   ["John", "Joseph", "Jeremy"],
// ];

// const types = [];

// for (let i = 0; i < person.length; i++) {
//   console.log(person[i], typeof person[i]);

//   // Filling the types array reading from the person array
//   // types[i] = typeof person[i];

//   types.push(typeof person[i]);
// }

// console.log(types);

// const years = [1990, 1993, 1996, 2000];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }

// console.log(ages);
// console.log(`ONLY STRINGS!!`);
// for (let i = 0; i < person.length; i++) {
//   if (typeof person[i] !== "string") continue;
//   console.log(person[i], typeof person[i]);
// }

// console.log(`BREAK WITH NUMBER!!`);
// for (let i = 0; i < person.length; i++) {
//   if (typeof person[i] === "number") break;
//   console.log(person[i], typeof person[i]);
// }

// LOOPING BACKWARDS AND LOOP INSIDE A LOOP

// const person = [
//   "Jonas",
//   "Douchebag",
//   2023 - 1991,
//   "teacher",
//   ["John", "Joseph", "Jeremy"],
// ];

// for (let i = person.length - 1; i >= 0; i--) {
//   console.log(i, person[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise} with ${rep}`);
//   }
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`You are doing ${rep} repetitions`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 1) {
//   console.log(`Your number is ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 1) {
//     console.log(`The loop had ended`);
//   }
//   break;
// }

///////////////////////////////// SECOND PART //////////////////////////////////
