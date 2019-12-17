/*
============================================
; Title: Assignment 4.2
; Author: Mike Goldberg
; Date: 12/16/2019
; Modified By: Mike Goldberg
; Description: Output an Array of Elements
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

// start program

/*
    expected output:
    Kiwi
    Pineapple
    Banana
    Mango
    Grapes
*/

// variable declaration
var fruits = ["Kiwi", "Pineapple", "Banana", "Mango", "Grapes"]

// functions
function getFruit(list) {
  for (var i = 0; i < list.length; i++){
    console.log(list[i]);
  }
}

// output
console.log(header.display("Mike", "Goldberg", "assignment 3.2"), "\n");
getFruit(fruits);


//  end program
