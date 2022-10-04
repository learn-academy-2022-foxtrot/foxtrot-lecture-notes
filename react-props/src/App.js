import './App.css';
import Card from './components/Card'
import React, {useState} from 'react'

const App = () => {

  const [cards, setCards] = useState(["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"])
  const [randomIndex, setRandomIndex] = useState(0)

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * cards.length)
    setRandomIndex(randomNumber)
  }

  return (
    <>
      <h1 className="blue">CARD DRAW</h1>
      <button onClick={handleClick}>Draw Card</button>
      <Card card={cards} index={randomIndex}/>
  
    </>

  );
}

export default App;
