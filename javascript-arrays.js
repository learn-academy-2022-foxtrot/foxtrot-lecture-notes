// // Javascript Arrays Notes

// // definition: data structure that is used to store a collection of data in an indexed list

// // [1, 2, 3, 4, 5]

// // -each item in an array is called an element
// // -elements are separated by commas
// // -surrounded by square brackets
// // -zero-based index

// // .length  - returns the number of elements in the array

// // [1, 2, 3, 4, 5]

// // first index in array is always 0
// // indexes 0, 1, 2, 3, 4

//  let numbers = [1, 2, 3, 4, 5]
//  console.log(numbers)
// //  BRACKET NOTATION

// //  allows us to access elements by index
// //  syntax - brackets with desired index inside, example: [3]
//  console.log(numbers[3])

// console.log(numbers.length)

// console.log(numbers[6])  
// console.log(numbers[6]= 49) 
// console.log(numbers) 
// console.log(numbers[5])

// let newArray = ["cat", "dog", true, 42, false]

// // let empty = []  - you can assign an empty array. 

// //   -----------  BUILT IN METHODS -----------

// //   SETTERS - mutators  - they change the original array
// //   GETTERS - accessors - get the element so you can use it, but doesn't change the array

// //   SETTERS

// //  .push()   adds an item to the END of the array
// console.log(numbers)
// console.log(numbers.push(7))   // returns the length of the array
// console.log(numbers)  

// // .unshift() adds to the BEGINNING OF ARRAY
// console.log('start ', numbers)
// numbers.unshift(74)
// console.log('end ', numbers)

// // .pop()  REMOVES LAST ELEMENT from the array and it returns its VALUE
// console.log(numbers.pop())
// console.log(numbers)

// // .shift() REMOVES THE FIRST ELEMENT from the array and it returns its VALUE
// console.log(numbers.shift())
// console.log(numbers)

// let removedItem = numbers.shift()
// console.log(removedItem)

// GETTERS

// .concat()  add multiple arrays
//  calling the method on one array and then passing the other array as an argument
// 
let nums = [1, 2, 3]
let bigNums = [36, 42, 97]
let strings = ["Tawn", "Michy", "Eric"]

 console.log(nums.concat(bigNums))
 console.log(nums.concat(strings))

console.log(nums.concat(bigNums).concat(strings))

// .split()

let splitString = "1034".split("")
console.log(splitString)

// .join()

// console.log(split.join(""))


// DESTRUCTURING

// assignment syntax that makes it possible to unpack values from array into distinct variables

let fullName = ["Tricia", "Sykes"]
let [firstName, lastName] = fullName

console.log(firstName)


