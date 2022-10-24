// React Component's Display information to users 
  // what does this component display? 
import React, { useState } from 'react'
// Import section

// Component Declaration and Logical section  
const IpAddress = () => {
//  Let's make a component that displays my current IP address

const [ip, setIp] = useState({})

  const getIp = () => {
  //  console.log("Hey this get IP thing works") 
    // fetch("https://ipapi.co/json").then(response => console.log(response))
    fetch("https://ipapi.co/json")
    .then(response => response.json())
    .then(payload => setIp(payload))
    .catch(errors => console.log(errors))
  }

console.log("ip:", ip)
// Display Section
  return (

    <div>
      <h1>
        Hello Foxtrot, I am located at the IP address of { ip.ip }
      </h1>
      <button onClick={getIp}>
        Press the Button!
      </button>

    </div>
  )
}

export default IpAddress