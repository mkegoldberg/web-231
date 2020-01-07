/*
============================================
; Title: Assignment 5.2
; Author: Mike Goldberg
; Date: 01/07/2020
; Modified By: Mike Goldberg
; Description: ES5 Built In Functions
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

// start program

/*
    expected output:
    BBQ
    Teriyaki Chicken
    Pesto Pasta
    Guacamole
    Tacos
*/

// variable declaration
var favFoods = ["BBQ", "Teriyaki Chicken", "Pesto Pasta", "Guacamole", "Tacos"];

// output
console.log(header.display("Mike", "Goldberg", "assignment 5.2"), "\n");

// loop through array and print each item
favFoods.forEach(foodItem => {
  console.log(foodItem);
})

//  end program
