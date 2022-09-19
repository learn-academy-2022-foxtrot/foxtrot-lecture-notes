# React State

State is a variable that holds information within your application that belongs to the React component.

State gives us 2 things, we have a variable that can be displayed and a method that will update that variable.  

``` javascript
import React, {useState} from 'react'

const App = () => {
  // miles is the name of the state variable
  // setMiles is the method to update the state variable
  // useState is a built in piece of React functionality called a state hook
  // Set initial value inside the parenthesis (can be any valid data type, ex: array, boolean, number, string)
  const [miles, setMiles] = useState(0)

  const addMile = () => {
    // We can update miles in our function by calling on the method setMiles and passing any information that we need to update state
    setMiles(miles + 1)
  }

  return (
    <>
      <h1>Mile Tracker</h1>
      <p>Miles: {miles}</p>
      <button onClick={addMile}>Add a mile</button>
    </>

  )
}

export default App
```