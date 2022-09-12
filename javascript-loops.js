// JAVASCRIPT LOOPS

// Iteration - completing process over and over

// bracket notation - gets specific element value from array

//  --- VARIABLE DECLARATIOINS AND SCOPE

// var - global scope,  can be accessed anywhere inside or outside a block of code
//    { contain code that is to be executed}  - curly braces
// let - only available inside the block that it's defined in, can be reassigned but NOT redeclared
// const - it can't be redeclared or reassigned

// reassigned  - change or 'reassign' the value 

// let name = "David"
// name  = "Matthew"

// redeclare  - resetting the name of the variable by using a variable declaration (i.e. var)

var student = "Zack"
var student = "Heath"
console.log(student)  // will print out Heath

student = "Athian"  // reassigned to Athian

//  VAR example
if(true) {
    var myName = "Trish"
    console.log(myName) // this will work
}
if(true) {
    var myName = "Trish"
}
 console.log(myName) // this will not work

// LET example

if(true){
    let yourName = "Michy"
    console.log(yourName) // this works
}

if(true){
    let yourName = "Michy"
    console.log(yourName) // this will work
}
console.log(yourName) // this will not work


// // CONST example

const day = "Monday"
day = "Sunday"
console.log(day)  // error

// // ---------- LOOPS --------

// // It is common to use the variable name index to store current count (shorthand uses i)

// // What we need to set up a for loop
//     //  where to start counting ( let index = 0)
//     //  where to stop counting (index < 10)
//     //  How to get from the start to the stop (index = index + 1)

    for(let index=0; index<10; index=index+1){ // longhand way
        console.log(index)
    }


    // Shorthand (most common)
    for(let i=0; i<10; i++) {
        console.log(i)
    }

    //  ---- CONNECT LOOPS TO ARRAYS ----

    // Arrays always start with index 0
    // All arrays have a length property
    // Once we have an index, we can extract value of the element

    const numsArray = [5, 6, 7, 8, 9]

    for(let i=0; i<numsArray.length; i++) {
        console.log("length ",numsArray.length)
        console.log(numsArray[i])
    }

    // CREATING LOGIC IN LOOP 
    // using same array as above on line 81
        for(let i=0; i<numsArray.length; i++) {
            if(numsArray[i] % 2 !== 0){    // if the number in the array has a remainder
                console.log(`${numsArray[i]} is an odd number!`)
            }
        }

