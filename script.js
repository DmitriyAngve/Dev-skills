// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const caclAge = birthYear => 2037 - birthYear;

// console.log(caclAge(1921));

// -----------PROBLEM #1---------------
//We work for a company building a smart home thermoneter. Our most recent task is thisL "Given an array of temperaures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might he a sensor error."

// const temreratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignores error?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplirude) and retyurn it

// const caclTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min; // amplitude
// };

// const amplitude = caclTempAmplitude(temreratures);
// console.log(amplitude);

// max = 3, min = 3 First itteration
// max = 7, min = 3 Second itteration
// max = 7, min = 3 Third itteration
// max = 8, min = 3 Fourth itteration
// max = 8, min = 1 Fifth itteration

// -----------PROBLEM #2---------------
// Function should now receive 2 arrays of temps

// 1) Understanding he problem
// - With 2 arrays, should we impelement functionality twice? NO! Just merge two arrays.

// 2) Breaking up into sub-problems
// - Merge two arrays?

// const caclTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min; // amplitude
// };

// const amplitudeNew = caclTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

//----------Debugging and Breakpoints -----------------
/*
const meaureKelvin = function () {
  const measurement = {
    type: 'temp',
    utin: 'celsius',
    // C) FIX A BUGG (add method Number before the promp method)
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND A BUGG
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY A BUGG
console.log(meaureKelvin());

// USING A DEBUGGER
const caclTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = caclTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY A BUGG
console.log(amplitudeBug);
*/
