
// 1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// a) Create a test with expect statements for each of the variables provided.
// b) Create the function that makes the test pass.

//-------------------- CODE BLOCK START ----------------------// Week-2-assessment-Jatded1d9l7 -Code Challenges- -Question 1-

// pseudo code
// Function that takes in a number 
// Decides if the number is divisible by three
// Use Modulo % to determine if divisible by three or not

describe("divisible", () => {
         it("returns is divisible by three or is not divisible by three based on input", () => {
             var num1 = 15
             var num2 = 0
             var num3 = -7
             expect(divisible(num1)).toEqual("is divisible by 3")
             expect(divisible(num2)).toEqual("is divisible by 3")
             expect(divisible(num3)).toEqual("is not divisible by 3")
         })
     })

var num3 = -7
 // Expected output: "-7 is not divisible by three"

 const divisible = (number) => {
         if (number % 3 === 0){
             return "is divisible by 3"
         }else {
             return "is not divisible by 3"
         }
     }

     console.log(divisible(7))


//-------------------- CODE BLOCK END ----------------------// Week-2-assessment-Jatded1d9l7 -Code Challenges- -Question 1-















// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// a) Create a test with expect statements for each of the variables provided.
// b) Create the function that makes the test pass.

//pseudo code
// function that takes in an array 
// returns an array with all the words capitalized 
// .map method creates a new array
// .toUpperCase() method returns the string value converted to uppercase.
// .substring() method that returns the part of the string between the start and end indexes, or to the end of the string. 


//-------------------- CODE BLOCK START ----------------------// Week-2-assessment-Jatded1d9l7 -Code Challenges- -Question 2-

describe("capitalize", () => {
  it("returns new array with first letter of each word capitalized", () => {
     var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
     var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
         expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
         expect(divisible(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
     })
 })

 const capitalize = (array) => {
  return array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
  })
}



//-------------------- CODE BLOCK END ----------------------// Week-2-assessment-Jatded1d9l7 -Code Challenges- -Question 2-









// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// a) Create a test with expect statements for each of the variables provided.
// b) Create the function that makes the test pass.

// pseudo code
// function that takes in a string 
// logs the index of the first vowel
// for loop repeats until a specified condition evaluates to false
// .toLowerCase() method that returns the calling string value converted to lowercase. 



//-------------------- CODE BLOCK START ----------------------// Week-2-assessment-Jatded1d9l7 -Code Challenges- -Question 3-

describe("vowelLog", () => {
  it("returns index of first vowel in a string", () => {
      var vowelTester1 = "learn"
      var vowelTester2 = "academy"
      var vowelTester3 = "challenge"
         expect(capitalize(vowelTester1)).toEqual(1)
         expect(divisible(vowelTester2)).toEqual(0)
         expect(divisible(vowelTester3)).toEqual(2)
     })
 })

const firstVowel = (string) => {
  for(let i=0; i<string.length; i++){
    let letter = string[i].toLowerCase()
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
      return i
    }
  }
}

//-------------------- CODE BLOCK END ----------------------// Week-2-assessment-Jatded1d9l7 -Code Challenges- -Question 3-

