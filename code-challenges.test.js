// // ASSESSMENT 2: Coding practical questions with Jest
//
// // Please read all questions thoroughly
// // All problems can be solved with concepts covered in class or in the syllabus
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process
//
// // Add appropriate dependencies to the repository:
// // $ yarn add jest
//
// // Use test driven development to complete the following questions
// // Run the file with the following command:
// // $ yarn jest
//
// // Reminder: The test will call your function
//
// // --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
//
// //Pseudo code
// // Create a function =+evenDiv
// // function takes in number as argument =+evenDiv(=+numb)
// // determines if numb is evenly divisible by 3 or not:   (numb % 3 === 0)
// // ________________
// describe ("evenDiv", () => {
//   test("returns a numb that is evenly divisible by 3 or not", () => {
//     expect(evenDiv()).toEqual("divisible by 3 or not")
//   })
// })
//
// const evenDiv = () => {
//   return ("divisible by 3 or not")
// }
// // _________________
// // a) Create a test with expect statements for each of the variables provided.
//
// //Psudo code
// // Create a test: Describe->test->Expect
// // Expect "15 is divisible by three"
//
// // var num1 = 15
//
// describe ("num1", () => {
//   test("is 15 is divisible by 3", () => {
//     expect(num1()).toEqual("15 is divisible by 3")
//   })
// })
//
// const num1 = () => {
//   return "15 is divisible by 3"
// }
// // Expected output: "15 is divisible by three"
// // _____________
//
// describe ("num2", () => {
//   test("is 0 is divisible by 3", () => {
//     expect(num2()).toEqual("0 is divisible by 3")
//   })
// })
//
// const num2 = () => {
//   return "0 is divisible by 3"
// }
//
// // var num2 = 0
// // Expected output: "0 is divisible by three"
// // _________________
//
// describe ("num3", () => {
//   test("is -7 not divisible by 3", () => {
//     expect(num3()).toEqual("-7 is not divisible by 3")
//   })
// })
//
// const num3 = () => {
//   return "-7 is not divisible by 3"
// }

// var num3 = -7
// Expected output: "-7 is not divisible by three"
// _____________


// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//Pseudo code
//Function that takes in an array of words [word1, word2, word3]
// returns an array with all words in the array capitalized
// input=array of words
// output= array of words capitalized .toUpperCase()

var myArray = ["word1", "word2", "word3"]

const largeWords = (array) => {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]).toUpperCase
  }
}
return newArray 
}

console.log(largeWords(myArray))




// a) Create a test with expect statements for each of the variables provided.
//
// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//
// var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// var vowelTester1 = "learn"
// // Expected output: 1
// var vowelTester2 = "academy"
// // Expected output: 0
// var vowelTester3 = "challenge"
// Expected output: 2



// b) Create the function that makes the test pass.
