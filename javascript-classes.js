//  JAVASCRIPT CLASSES NOTES

// classes are blueprints or recipes for objects

//  keyword is class
// first class declaration uses PascalCase for classname

// variable recipeBook     class RecipeBook 

// class + NameOfClass + curly braces

// class Car {

// }

// action to build object  constructor() {}, first method declared in your class

// class Car {
//     constructor() {
//     this.make = "Subaru",
//     this.model = "Crosstrek",
//     this.year = 2016,
//     this.color = "Blue"
//     }
// }

// keyword to create new is new
// instantiate = create an instance of a class

// let myCar = new Car()
// console.log(myCar)

class Car {
    // add parameters that will be the values of the key-value pairs
    // the this.<variableName> are the keys
    constructor(makeString, modelString, yearNumber, colorString) {
        // constructor builds the object
    this.make = makeString,
    this.model = modelString,
    this.year = yearNumber,
    this.color = colorString
    // can give a k-v pair a default value (don't have to use parameter)
    // create a custom method that will change the value
    this.isOperational = true
    }
    // custom method - we can call using dot notation ie: myCar.carBoasting()
    carBoasting() {
        return `My ${this.make} ${this.model} is super cool`
    }
    brokeDown() {
        // reassigns value from true to false only if we call this method
        this.isOperational = false
    }
    workingAgain() {
        this.isOperational = true
    }
}

let myCar = new Car("Porche", "Boxter", 2020, "Silver")
console.log(myCar)
let yourCar = new Car("Ford", "F150", 1995, "Red")
console.log(yourCar)

console.log(myCar.carBoasting())
myCar.brokeDown()
console.log(myCar)
myCar.workingAgain()
console.log(myCar)






// let myName = "Tricia"
// myName.brokeDown()
// console.log(myName)