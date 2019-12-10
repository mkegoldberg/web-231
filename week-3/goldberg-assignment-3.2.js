/*
============================================
; Title: Assignment 3.2
; Author: Mike Goldberg
; Date: 12/09/2019
; Modified By: Mike Goldberg
; Description: if/else statements
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

// start program

/*
    expected output:
    1 and 2 are NOT a match
    cat and cat are a match!
    cat and dog are NOT a match
    dog and dog are a match!
*/

// variable declaration
var number1 = "1";
var number2 = "2";
var cat = "cat";
var dog = "dog";
var cat2 = "cat";
var dog2 = "dog";


// functions
// determines if two variables are equal
function match(param1, param2) {
  if (param1 === param2) {
    console.log("true");
    logMatch(param1, param2);
  } else {
    console.log("false");
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
match(number1, number2);
match(cat, cat2);
match(cat2, dog2);
match(dog, dog);

//  end program
