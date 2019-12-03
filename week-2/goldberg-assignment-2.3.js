/*
============================================
; Title:  Exercise 2.3
; Author: Mike Goldberg
; Date:   02 December 2019
; Description: Function Properties
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

// start program


/*
  Expected Output:

  FistName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!
*/

// function properties
myName.mike = "Mike";
myName.goldberg = "Goldberg"
thisAssignment.exercise = "2.3";
date.today = new Date().toLocaleDateString();

// function
function myName() {
  return myName.mike + " " + myName.goldberg;
}

function thisAssignment() {
  return thisAssignment.exercise;
}

function date() {
  return date.today;
}

// output
console.log(header.display(myName.mike, myName.goldberg, thisAssignment()));
console.log("Hello" + " " + myName() + "!");



// end program
