import React from 'react'

const Yelling = (props) => {

  const whyAreYouYelling = (input) => {
    let firstLetter = input.charAt(0).toUpperCase()
    let restOfWord = input.slice(1)
    return `${firstLetter}${restOfWord}`
  }

  return (
    <>
      <h3>{whyAreYouYelling(props.userName)}</h3>
    </>
  )
}

export default Yelling
