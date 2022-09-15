// JavaScript Objects 9/15/2022

// Primitive data types
// - string
// - number
// - Boolean
// - undefined
// - null
// - symbol
//
// Non-primitive
// - array
// - objects


// Objects are collections of data - can be indexed or can be stored in key:value pairs

// h1 {
//   color: "purple";
//   text-size: 30px;
// }

// Object Anatomy
// - curly braces
// - keys - unique indentifiers, data type symbol
// - values - data (data type recognized be JS)
// - as many key:value pairs as needed, comma seperated

let myObject = { key1: "value", key2: true, key3: 5, key4: [3, 4, 5]}
// console.log(myObject)
// --> { key1: 'value', key2: true, key3: 5, key4: [ 3, 4, 5 ] }
// console.log(myObject.key3)
// --> 5
// console.log(myObject.key4)
// --> [ 3, 4, 5 ]

let breakfast = {
  // nested object
  bfast1: {
    fruit1: "banana",
    fruit2: "peach",
    fruit3: "blueberries"
  },
  bfast2: "eggs",
  bfast3: "cornflakes",
  bfast4: "hashbrowns",
  bfast5: "cottage cheese",
  bfast6: {
    bev1: "coffee",
    bev2: "water",
    bev3: "orange juice",
    bev4: "monster"
  }
}
// console.log(breakfast.bfast1.fruit1)
// console.log(fruit1)
// --> ReferenceError: fruit1 is not defined


// Destructuring - providing a pathway to a particular key
// console.log(breakfast.bfast1.fruit1)
// console.log(breakfast.bfast1.fruit2)
// console.log(breakfast.bfast1.fruit3)

// let { fruit1, fruit2, fruit3 } = breakfast.bfast1
// console.log(fruit1)
// console.log(fruit2)
// console.log(fruit3)


// Methods
// Object - intersection between data and behavior (function/method)

// console.log(['yo', 'hello'].toUpperCase())
// --> .toUpperCase is not a function

// Method is a function that belongs to an object
// this - a keyword in JavaScript that is a reference to an object inside of itself

let numbersObject = {
  num1: 3,
  num2: 4,
  num3: 5,
  addUp: function(){
    return this.num1 + this.num2 + this.num3
  }
}
// console.log(numbersObject.num1)
// --> 3
// console.log(numbersObject.num2)
// --> 4
// console.log(numbersObject.addUp())
// --> 12
// console.log(numbersObject.addUp)
// --> [Function: addUp]
// console.log(addUp())
// --> ReferenceError: addUp is not defined

// Higher Order Functions

let pets = [
  {name: "Gunner", age: 3, type: "dog"},
  {name: "Hazel", age: 3, type: "cat"},
  {name: "Bob", age: 1, type: "fish"},
  {name: "Bear", age: 3, type: "dog"},
  {name: "Swimmy", age: 1, type: "turtle"}
]

// console.log(pets[0])
// console.log(pets[4].name)

// prompt: create a custom function that will take in the pets array and return and array with just pet name

const petNames = (petArray) => {
  return petArray.map(element => {
    // console.log("el:", element.name)
    return element.name
  })
}
console.log("func:", petNames(pets))
