// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// calcTempAmplitude([3, 7, 4, 23, 1, 55]);
// const amplitude = calcTempAmplitude(temperature);
// console.log(amplitude);
// MAX = First element of array, then the loop starts until it reaches the maximum value

/// PROBLEM 2 : Function now should receive 2 arrays of temperature

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(temperature);
// console.log(amplitudeNew);

// const array1 = ["a", "c", "d"];
// const array2 = ["e", "f", "g"];
// const array3 = array1.concat(array2);

// console.log(array3);

/////////////////////////////////////////////////////////////////////////////////////////////

// DEBUG TEST

// const tempKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     // C) FIX THE BUG OF THIS
//     value: Number(prompt(`Degrees celsius:`)),
//   };
//   // B) FIND
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) IDENTIFICATION
// console.log(tempKelvin());



