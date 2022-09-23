import React, { useState } from 'react'
import Yelling from './components/Yelling'

const App = () => {
  const [userName, setUserName] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value)
    setUserName(e.target.value)
  }

  return (
    <>
      <h1>Hello Foxtrot</h1>
      <label>Enter Your Name</label>
      <br />
      <input type="text" value={userName} onChange={handleChange}/>
      <Yelling userName={userName}/>
    </>
  )
}

export default App
