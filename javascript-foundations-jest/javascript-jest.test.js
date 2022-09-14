// Jest - Javascript testing framework, a collection of files managed by yarn.


// Yarn - a package manager for javascript that contains code being shared from other developers

// $ yarn add jest

// TDD - Test Driven Development
// Red - Green - Refactor
  // 1. Write your test first!
  // 2. Run the testing suite to see it fail (Red)
  // 3. Write the code
  // 4. Run the testing suite to see it pass (Green)
  // 5. Refactor if necessary


  // Create a function called greeter that returns a string that says Hi, Foxtrot 2022!!!

  // Input: none
  // Output: "Hi, Foxtrot 2022!!!"

  // describe method lists the name of function and is passed an anonymous function
  describe("greeter", () => {
    // it method nested inside describe block describes what the function does
    it("returns a string that says Hi, Foxtrot 2022!!!", () => {
      // expect will invoke the function and compare the result to a predetermined expected output using .toEqual matcher
      expect(greeter()).toEqual("Hi, Foxtrot 2022!!!")
    })
  })

  // console.log(greeter()) === "Hi, Foxtrot 2022!!!"

  // To run your test $ yarn jest

  // Good Failed test - ReferenceError: greeter is not defined 

const greeter = () => {
  return "Hi, Foxtrot 2022!!!"
}

// Passed!!


// Create a function that returns "help others" if you do understand or "ask questions" if you do not understand

// Input 1: "yes"
// Output 1: "help others"

// Input 2: "no"
// Output 2: "ask questions"

describe("doYouUnderstand", () => {
  it("returns 'help others' if you do understand or 'ask questions' if you do not understand", () => {
    expect(doYouUnderstand("yes")).toEqual("help others")
    expect(doYouUnderstand("no")).toEqual("ask questions")
    expect(doYouUnderstand("YES")).toEqual("help others")
  })
})

// Good fail: ReferenceError: doYouUnderstand is not defined


// Pseudocode
// Create function called doYouUnderstand that takes in a string as an arguement
  // One parameter: string
  // Write a conditional to evaluate if string equals "yes"
    // return "help others"
  // Otherwise evaluate if string equals "no"
    // return "ask questions"

const doYouUnderstand = (string) => {
  if(string.toLowerCase() === "yes") {
    return "help others"
  } else if(string.toLowerCase() === "no") {
    return "ask questions"
  } else {
    return "Ooops"
  }
}


// Create a function that takes in an array and a string and appends the string to the end of the array

// Input: ["take notes", "pay attention", "practice", "take breaks"], "ask questions"
// Output: ["take notes", "pay attention", "practice", "take breaks", "ask questions"]

//Template test:
// describe("", () => {
//   it("", () => {
//     expect().toEqual()
//   })
// })

describe("becomeADeveloper", () => {
  it("takes in an array and a string and appends the string to the end of the array", () => {
    let developerList = ["take notes", "pay attention", "practice", "take breaks"]
    let developerString = "ask questions"
    let result = ["take notes", "pay attention", "practice", "take breaks", "ask questions"]
    expect(becomeADeveloper(developerList, developerString)).toEqual(result)
    
    // expect(becomeADeveloper(["take notes", "pay attention", "practice", "take breaks"], "ask questions")).toEqual(["take notes", "pay attention", "practice", "take breaks", "ask questions"])
  })
})

// Good Fail: ReferenceError: becomeADeveloper is not defined

const becomeADeveloper = (array, string) => {
  return array.concat(string)
}