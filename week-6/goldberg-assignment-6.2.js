/*
============================================
; Title: Assignment 6.2
; Author: Mike Goldberg
; Date: 01/13/2020
; Modified By: Mike Goldberg
; Description: Exception Handling
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

// start program

/*
    expected output:

      Catch clause: object.anything is not a function
      Finally clause reached...
*/

// variable declaration
var object = { one: 1, two: 2, three: 3 };


// output
console.log(header.display("Mike", "Goldberg", "assignment 6.2"), "\n");
try {
  // running an undefined functions
  object.anything();
} catch (error) {
  // print what the error is
  console.log("Catch clause: " + error.message);
} finally {
  // show final command
  console.log("Finally clause reached...");
}

//  end program
