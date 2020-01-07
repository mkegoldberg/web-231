/*
============================================
; Title: Assignment 5.3
; Author: Mike Goldberg
; Date: 01/07/2020
; Modified By: Mike Goldberg
; Description: Object Collections
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

// start program

/*
    expected output:
    Last Name: Mozart, Genre: Classical, Rating: 9
    Last Name: Elfman, Genre: Movie Soundtracks, Rating: 10
    Last Name: Cube, Genre: Rap, Rating: 8
    Last Name: Debussy, Genre: Classical, Rating: 7
    Last Name: Confessional, Genre: Emo, Rating: 9
*/

// variable declaration
var topComposers = [
  {
    firstName: "Wolfgang",
    lastName: "Mozart",
    genre: "Classical",
    rating: "9",
  },
  {
    firstName: "Danny",
    lastName: "Elfman",
    genre: "Movie Soundtracks",
    rating: "10",
  },
  {
    firstName: "Ice",
    lastName: "Cube",
    genre: "Rap",
    rating: "8",
  },
  {
    firstName: "Claude",
    lastName: "Debussy",
    genre: "Classical",
    rating: "7",
  },
  {
    firstName: "Dashboard",
    lastName: "Confessional",
    genre: "Emo",
    rating: "9",
  }
];

// output
console.log(header.display("Mike", "Goldberg", "assignment 5.3"), "\n");

topComposers.forEach(function (composer) {
  console.log(
    "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
  );
});

//  end program
