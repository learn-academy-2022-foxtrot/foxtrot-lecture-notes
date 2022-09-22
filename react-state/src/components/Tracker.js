import React, {useState} from 'react'

const Tracker = () => {
  const [miles, setMiles] = useState(0)
  const [color, setColor] = useState("pink")

  const addMile = () => {
    setMiles(miles + 1)
  }


  return (
    <>
      <p>Miles: {miles}</p>
      <button onClick={addMile} style={{backgroundColor: color}}>Add a mile</button>
    </>
  )
}

export default Tracker