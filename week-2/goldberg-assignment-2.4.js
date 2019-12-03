/*
============================================
; Title:  Exercise 2.4
; Author: Mike Goldberg
; Date:   03 December 2019
; Description: Function Examples
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');


// start program



/*
  Expected Output:
  Full Name
  Formatted Date
  A number parsed from a string
  A floated number
*/

// variables
var myName = fullName("Mike", "Goldberg");
var date = dateWriter("2019", "3", "11");
var temp = formatNumber(56, 1);
var age = convertToInt("41");
var savingsGoal = convertToFloat("10000000.00");


// function
function fullName(first, last) {
  return first + " " + last;
}

function dateWriter(year, month, day) {
  return new Date(year, day, month).toLocaleDateString();
}

function formatNumber(number, numOfFixedPositions) {
    return number.toFixed(numOfFixedPositions);
}

function convertToInt(string) {
    return parseInt(string);
}

function convertToFloat(string) {
    return parseFloat(string);
}

// output
console.log(header.display("Mike", "Goldberg", "2.4"));
console.log(`Hello, my name is ${myName}!`);
console.log(`Today's date is ${date} and the current temperature is ${temp} degrees.`);
console.log(`I am ${age} years old and my savings account goal is ${savingsGoal} dollars.
`)



// end program