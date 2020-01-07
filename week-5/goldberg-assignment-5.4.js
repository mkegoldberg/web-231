/*
============================================
; Title: Assignment 5.4
; Author: Mike Goldberg
; Date: 01/07/2020
; Modified By: Mike Goldberg
; Description: Filtering/Reducing Complex Data Structures
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

// start program

/*
  expected output:
    -- COMPOSER BY RATING --
    Rating: 9
    Composer: Mozart

    Rating: 10
    Composer: Elfman

    Rating: 8
    Composer: Cube

    Rating: 7
    Composer: Debussy

    Rating: 9
    Composer: Confessional

    -- COMPOSER BY GENRE --
    Genre: Classical
    Composer: Mozart

    Genre: Movie Soundtracks
    Composer: Elfman

    Genre: Rap
    Composer: Cube

    Genre: Classical
    Composer: Debussy

    Genre: Emo
    Composer: Confessional
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

var composerByRating = topComposers.map(function(composer) {
  let editedObj = {
    rating: composer.rating,
    lastName: composer.lastName
  };
  return editedObj;
})

var composerByGenre = topComposers.map(function (composer) {
  let editedObj = {
    genre: composer.genre,
    lastName: composer.lastName
  };
  return editedObj;
})

// output
console.log(header.display("Mike", "Goldberg", "assignment 5.3"), "\n");

console.log("-- COMPOSER BY RATING --");
composerByRating.forEach(function (composer) {
  console.log("Rating: " + composer.rating + "\nComposer: " + composer.lastName);
  console.log("");
});

console.log("\n");
console.log("-- COMPOSER BY GENRE --");
composerByGenre.forEach(function (composer) {
  console.log(
    "Genre: " + composer.genre + "\nComposer: " + composer.lastName
  );
  console.log("");
});

//  end program
