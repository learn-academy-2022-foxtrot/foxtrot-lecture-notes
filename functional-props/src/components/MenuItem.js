import React from 'react'

const MenuItem = (props) => {
// destructured to access the props without using props with dot notation
    // const [index, item, orderItem] = props

    console.log(props)
  return (
    <>
    <h2>{props.item.name}</h2>
    {/* // when the item ordered (ordered = true) display "Ordered" */}
    {/* conditional rendering */}
    {props.item.ordered && <h3>Ordered</h3>}
    {/* add anonymous function to make function wait until clicked to run */}
    <button onClick={() => props.orderItem(props.index)}>Order</button>
    </>
  )
}

export default MenuItem

