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
    -- DISPLAYING ARRAY ITEMS --
    Car
    Truck
    Motorcycle
    Airplane
    Bus

    -- SELECTED VALUE --
    Motorcycle

    -- SELECTED VALUE --
    Bus
*/


// start program

// variable declaration
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"]

// functions
function getValue(list, value) {
  for (var i = 0; i < list.length; i++){
    if (list[i] === value) {
      console.log(list[i]);
    }
  }
}

// output
console.log(header.display("Mike", "Goldberg", "assignment 4.3"), "\n");
console.log("--DISPLAYING ARRAY ITEMS--");
vehicles.forEach(vehicle => {
  console.log(vehicle);
})

// new line
console.log("");

console.log("-- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

// new line
console.log("");

console.log("-- SELECTED VALUE --");
getValue(vehicles, "Bus");


//  end program
