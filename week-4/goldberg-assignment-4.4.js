/*
============================================
; Title: Assignment 4.4
; Author: Mike Goldberg
; Date: 12/16/2019
; Modified By: Mike Goldberg
; Description: Output an Array of Elements
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

/*
    expected output:
      -- ORIGINAL ARRAY --
      Alabama
      Nebraska
      Iowa
      California
      Nevada

      -- SORTED ARRAY --
      Alabama
      California
      Iowa
      Nebraska
      Nevada

      -- SELECTED VALUE --
      Iowa
*/


// start program

// variable declaration
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada",];
var selectedState = states.filter(state => getState(state, "Iowa"))

// functions
// checks to see if the params match
function getState(state1, state2) {
  return state1 === state2 ? true : false;
}
// output each element in an array
function printNames(array) {
  array.forEach(element => {
    console.log(element);
  })
}

// output
console.log(header.display("Mike", "Goldberg", "assignment 4.4"), "\n");

console.log("-- ORIGINAL ARRAY --");
printNames(states);

// new line
console.log("");

console.log("-- SORTED ARRAY --");
printNames(states.sort());

// new line
console.log("");

console.log("-- SELECTED VALUE --");
console.log(selectedState[0]);

//  end program
