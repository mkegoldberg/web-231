/*
============================================
; Title: Assignment 6.3
; Author: Mike Goldberg
; Date: 01/13/2020
; Modified By: Mike Goldberg
; Description: Object Literals
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

// start program

/*
    expected output:

    id: 231, name: Product Development, requester: Ricky Bobby
*/

// variable declaration
var ticket = {
  id: 231,
  name: "Product Development",
  requester: "Ricky Bobby"
};
var logArray = [];

// output
console.log(header.display("Mike", "Goldberg", "assignment 6.3"), "\n");

// loop through object
for (var item in ticket) {
  // push each key/val pair to an array
  logArray.push(item + ": " + ticket[item]);
}
// combine array into one long string and print
console.log(logArray.join(", "));

//  end program
