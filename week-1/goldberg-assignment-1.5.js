/*
============================================
; Title: Assignment 1.5
; Author: Mike Goldberg
; Date: 11/28/2019
; Modified By: Mike Goldberg
; Description: Examples of primitive types
;===========================================
*/

// start program

/*
    expected output:
    first name
    last name
    address
    pay rate
    hire date
*/

// variable declaration
var employeeNumber = 1;
var employees = [
    {
        firstName: "Jake",
        lastName: "Goober",
        address: "1632 Candy Cane Lane",
        payRate: 16.40,
        hireDate: new Date(2007, 10, 7),
    },
    {
        firstName: "Luke",
        lastName: "Vader",
        address: "432 Dagobah Rd",
        payRate: 22,
        hireDate: new Date(1977, 4, 25),
    },
    {
        firstName: "Rick",
        lastName: "Palpetine",
        address: "123 Death Star Lane",
        payRate: 2000,
        hireDate: new Date(2005, 4, 19),
    },
]

// output
employees.forEach(employee => {
    console.log(
        `Employee #${employeeNumber}:`,
        employee.firstName,
        employee.lastName,
        employee.address,
        employee.payRate.toFixed(1) + "/hr",
        employee.hireDate.toLocaleDateString(),
    )
    employeeNumber ++
})

//  end program