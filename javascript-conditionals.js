// Equality Operators

// Strict equality ===
// let myName = "Elyse"
// console.log("Elyse" === myName) // true

// Loose equality ==
let myFavNum = 7
console.log(myFavNum == "7") // true
console.log(myFavNum === "7") // false

// Relational Operations 
// < > <= >=

// Logical Operators

  // Logical AND is &&

  let greeting = "hello"
  let num = 6

  console.log(num > 2 && "hello" === greeting) // true + true = true
  console.log(num < 2 && "hello" === greeting) // false + true = false

  // Logical OR is ||
  console.log(num < 2 || "hello" === greeting) // false + true = true


// Negation
  // Logical opposite using bang operator !
  console.log(num !== greeting) // true

// ________________________

// IF/ELSE

if(true) {
  console.log("I'm true!")
}

if(false) {
  console.log("I'm false!")
} else {
  console.log("here is the else")
}

// String interpolation - injects a variable into a string (best practice)
// String concatenation - using the addition sign to add strings and variables: "Hey " + myName


let myName = "Elyse"
myName = "Zack"
if(myName === "Elyse") {
  console.log("Hey Elyse!")
} else {
  console.log(`Hey ${myName}!`)
}


// ELSE IF

let num1 = 12
let num2 = "12"

if(num1 > num2) {
  console.log(`${num1} is greater than ${num2}`)
} else if(num1 < num2) {
  console.log(`${num1} is less than ${num2}`)
} else if(num1 === num2) {
  console.log(`${num1} and ${num2} are the same`)
} else {
  console.log("Invalid entry")
}