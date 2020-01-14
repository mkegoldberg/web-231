/*
============================================
; Title: Assignment 6.4
; Author: Mike Goldberg
; Date: 01/13/2020
; Modified By: Mike Goldberg
; Description: Nested Object Literals
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

// start program

/*
    expected output:

    id: 231, name: Product Development, requester: Ricky Bobby
    Ticket 231 was created on 01/13/2020 and assigned to employee Ricky Bobby (Analyst).
*/

// variable declaration
var ticket = {
  id: 231,
  name: "Payroll Issue",
  dateCreated: "01/13/20",
  priority: "High",
  person: {
    id: "1234",
    firstName: "Ricky",
    lastName: "Bobby",
    jobTitle: "Analyst"
  }
};
var logArray = [];

// output
console.log(header.display("Mike", "Goldberg", "assignment 6.4"), "\n");

console.log(`Ticket ${ticket.id} was created on ${ticket.dateCreated} and assigned to employee ${ticket.person.firstName} ${ticket.person.lastName} (${ticket["person"].jobTitle}).`);

//  end program
