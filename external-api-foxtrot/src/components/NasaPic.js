import React, { useState } from 'react'
import mockNasa from "../mockNasa"
// Imports ^

// Component declaration and logic 
const App = () => {
  // somewhere to store local data
  const [nasaData, setNasaData] = useState(null)


  const API_KEY = process.env.REACT_APP_API_KEY

  const nasaFetch = () => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(payload => setNasaData(payload))
    .catch(errors => console.log(errors))
  }


  // My components display
  return (
    <>
      <button onClick={nasaFetch}> Click me for mars pictures</button>
      
      {nasaData && nasaData.photos.map((obj, index) => {
        return <img src={obj.img_src} alt="" key={index} />
      })}

    </>
  )
}

export default App