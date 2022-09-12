// JavaScript Functions 9/12/2022

// Functions are cool because:
// 1. decide when code executes
// 2. reusable code

// Encapsulation - all the info needed in a function is either inside or given as an input

// Multiple ways to create function

// Anatomy of a function:
// - variable declaration: const
// - name: camelCase, communicate intent
// - single equal sign (assignment operator)
// - parentheses - inticates action or behavior in code
// - arrow function syntax
// - curly braces: an executable action in the code
// - return: indicates output


// const coffeeMaker = () => {
//   return "coffee is made"
// }

// invoke the function - call the function

// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())


// add a parameter

// const coffeeMaker = (coffeeType) => {
//   return `Your ${coffeeType} is made`
// }
// console.log(coffeeMaker())
// --> Your undefined is made

// assign a value to the parameter with an argument
// console.log(coffeeMaker("latte"))
// --> Your latte is made

// console.log(coffeeMaker("Kona"))
// --> Your Kona is made
// console.log(coffeeMaker("espresso"))
// --> Your espresso is made
// console.log(coffeeMaker("chai"))
// --> Your chai is made


// pseudo coding
// prompt - create a function that takes in the type of coffee and the size of coffee and outputs the order and the price
// small - $4, medium - $5, large $6

// Function expression:
// create a function called coffeeMaker
// input: size and type
// output: type and price

// Process:
// conditional statement - evaluation on the size of the coffee, equality operator

const coffeeMaker = (coffeeType, coffeeSize) => {
  if(coffeeSize === "small"){
    return `your ${coffeeType} costs $4`
  } else if(coffeeSize === "medium"){
    return `your ${coffeeType} cost $5`
  } else if(coffeeSize === "large"){
    return `your ${coffeeType} is $6`
  } else {
    return "Something went wrong."
  }
}
console.log(coffeeMaker("latte", "small"))
// --> your latte costs $4
console.log(coffeeMaker("tea", "large"))
// --> your tea is $6


// Vocab:
// - Encapsulation - all logic stays inside the function the only gate is a parameter
// - be familiar with the anatomy of a function
// - invoke, invocation, call - makes the function run
// - parameter - placeholder variable that belongs to your function
// - argument - assigns the parameter a value, gets passed into the function invocation
// - pseudo coding - "rubber ducking", writing down your process
