/*
============================================
; Title: Assignment 3.3
; Author: Mike Goldberg
; Date: 12/10/2019
; Modified By: Mike Goldberg
; Description: Multiway Branch Statements
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');


// start program

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

// variable declaration
let eventKeyCode = 13;


// output
console.log(header.display("Mike", "Goldberg", "assignment 3.2"), "\n");
switch (eventKeyCode) {
  case 13:
    console.log("The enter key was pressed.");
    break;
  case 16:
    console.log("The shift key was pressed.");
    break;
  case 32:
    console.log("The spacebar key was pressed.");
    break;
  case 8:
    console.log("The backspace / delete key was pressed.");
    break;
  default:
    console.log("Unrecognized key.")
    break;
}

// end program

