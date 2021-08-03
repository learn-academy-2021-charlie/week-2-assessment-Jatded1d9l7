// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Charlie 2021"
// console.log(cohort.split(""))

// a) Your answer: ["C", "h", "a", "r", "l", "i", "e", "2", "0", "2", "1"]
// b) Verify and explain: The .split method turns a string into an array of substrings.


// --------------------2) What will this log?
//
// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: It will log undefined
// b) Verify and explain: It logged undefined because "Learn Student" was not defined


// --------------------3) What will this log?

// var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 18]
// b) Verify and explain: .map() is an array method that goes through each value in the array.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: [12, 14]
// b) Verify and explain: This gave evens because it filtered values in the array that were strictly equal to zero. The function should have read: Value % 2 !== 0 instead.


// --------------------5) What will this log?
//
class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
console.log(learnStudent)

// a) Your answer:
// Student: George
// Cohort:  Charlie
// Year:    2021
// b) Verify and explain: George, Charleie, and 2021 are all hard values in this class. To make changes we could either make dynaamic paremeters or make a function for one of the paremeters. 
