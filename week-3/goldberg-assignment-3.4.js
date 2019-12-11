/*
============================================
; Title: Assignment 3.4
; Author: Mike Goldberg
; Date: 12/10/2019
; Modified By: Mike Goldberg
; Description: Loops
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');


// start program
/*
  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

// variable declarations
var myNumber = 8;

// functions
/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// determines if two variables are equal
function match(param1, param2) {
  if (param1 === param2) {
    logMatch(param1, param2);
  } else {
    logMismatch(param1, param2);;
  }
}

// prints the variable values and if they are equal
function logMismatch(variable1, variable2) {
  console.log(`${variable1} and ${variable2} are NOT a match`);
}

// prints the variable values and if they are NOT equal
function logMatch(variable1, variable2) {
  console.log(`${variable1} and ${variable2} are a match!`);
}

// output
console.log(header.display("Mike", "Goldberg", "assignment 3.2"), "\n");

// iterate through 10 random numbers and see if they match myNumber
for (var i = 0; i <= 9; i++) {
  var yourNumber = randomNumber();
  match(myNumber, yourNumber)
}

// end program
