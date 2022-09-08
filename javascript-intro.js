// Javascript Intro

  // 'CMD /' - Comments out code

  // Javascript is a dynamically typed language - data types can be changed while being used

  // Interpreted language - ran at run time

  // Scripting language - logic can be read and understood by computer

     
  // Console log - built in method that prints out what is in parenthesis to console (terminal)

    // console.log()

  // _________________

  // Data types - how javascript is broken down (smallest piece)
    // Tells us the type of value and what operations can be applied to it
    
  // Primitive Data Types:
    // Numbers
    // Strings
    // Boolean
    // Symbol
    // Undefined
    // Null

  
  // _________________

  // Numbers - Just as it looks they are numbers!
    // Integers - positive or negative numbers
    // Floats - decimals

  // Can perform math with numbers in javascript:
    // Add, subtract, multiply, divide, and modulo

    console.log(5 + 3) // 8
    console.log(5 - 3) // 2
    console.log(5 * 3) // 15
    console.log(5 / 3) // 1.6666667  - This is a float
    
    // Modulo - displays the remainder
    console.log(6 % 2) // 0
    console.log(5 % 2) // 1
    
    // _________________
    
      // Strings - text that is defined and wrapped by quotations
    
        // console.log(hello world) - This will run an error
    
        // Can use double or single quotes - be consistent
        console.log("hello world")
        console.log('hello world')
    
        console.log("A")
        console.log("This is a beautiful day to learn Javascript!")
    
        console.log("42") // This is a string and does not evaluate the same as numbers
    
    // _________________
    
      // String Concatenation
    
      console.log("Hello" + "world") // Helloworld
      console.log("Hello " + "world") // Hello world
    
      console.log("36" + 36) // 3636 - converts second 36 to a string and concats the strings together
      console.log("36 + 36 = ", 36 + 36) // "36 + 36 = " 72
    
      // Type coercion - force changes the data type to fulfill process
    
    // _________________
    
    // Booleans - true or false values (not a string, they are their own data type)
      // Can be used for various operations - equality operators, relational operators, logical operators
    
    console.log(true) // true
    console.log(false) // false
    
    // _________________
    
    // Undefined - declared value that has not yet been assigned
    
    // _________________
    
    // Null - has no value!  It is not 0, not undefined, not an empty string, just simply the lack of any value
    
    // _________________
    
    // Symbol - Used for accessing keys in a Javascript object (will cover a little later)
    
    // _________________
    
    // Variables - 
        // 3 diffferent declarations: 
          // var - global variable, can be reassigned
    
          // (preferred variable declarations are let and const)
          // let - can be reassigned
          // const - cannot be reassigned!
    
        // Name variable - use descriptive names in camelCase
          // Camelcase - first letter is lower case, all sequential words will be capitalized
        
        // Assignment operator - single equal sign, assigning value to variable (not evaluating equality!)
        
        // Assigned value - follows the equal sign and is the value that will be used when variable is called.  Can be any valid data type
    
    var myFavoriteNumber = 42
    console.log(myFavoriteNumber) // 42
    console.log(myFavoriteNumber + 10) // 52
    console.log(myFavoriteNumber) // 42
    
    // Reassigning variables:
    myFavoriteNumber = 15
    console.log(myFavoriteNumber) // 15
    
    var yourFavoriteNumber = 42
    console.log(yourFavoriteNumber + myFavoriteNumber) // 57
    
    
    // Concatinating with variables:
    console.log("My favorite number is " + myFavoriteNumber) // "My favorite number is 15"
    
    // _________________
    
    // String Properties and Built-in Methods
    
      var message = "Hello world!"
    
      // length property - tells us how many characters the value of the variable is
    
    console.log(message.length) // 12
    
      // index - tells us the location of each character within the string (returns a number).  
        // Computers use zero indexing so the first character starts at 0.
        // To access a character at a specific index, use bracket notation
    
    console.log(message[0]) // "H"
      // charAt() - returns the letter at a specific index
    console.log(message.charAt(4)) // "o"
    
      // includes() - checks for subset of characters, returns a Boolean
    console.log(message.includes("lo")) // true
    
      // slice() - returns a subset of characters. Takes 2 arguements: start of subset, end of subset  
    console.log(message.slice(0, 5))
    
    // Arguments are extra pieces of information passed into methods to perform operation