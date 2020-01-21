/*
============================================
; Title: Assignment 7.2
; Author: Mike Goldberg
; Date: 01/20/2020
; Modified By: Mike Goldberg
; Description: Constructor Functions
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

// start program

/*
    expected output:
    1234 Michael Scott Regional Manager
    1235 Dwight Schrute Assistant to the Regional Manager
    1236 Jim Halpert Sales
    1237 Pam Beesly Receptionist
    1238 Creed Bratton Not Really Sure?

*/

// variable declaration
let officeTeam = [
  new Employee("1234", "Michael", "Scott", "Regional Manager"),
  new Employee("1235", "Dwight", "Schrute", "Assistant to the Regional Manager"),
  new Employee("1236", "Jim", "Halpert", "Sales"),
  new Employee("1237", "Pam", "Beesly", "Receptionist"),
  new Employee("1238", "Creed", "Bratton", "Not Really Sure?")
];

/**
 * Params: id, first name, last name, title
 * Response: void
 * Description: set the id, full name, and title of an employee
 */
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.fistName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// output
console.log(header.display("Mike", "Goldberg", "assignment 7.2"), "\n");

officeTeam.forEach(person => {
  console.log(person.id, person.fistName, person.lastName, person.title,);
});

//  end program
