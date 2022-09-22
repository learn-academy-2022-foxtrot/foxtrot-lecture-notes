import "./App.css";
import React, { useState } from "react";
import MenuItem from "./components/MenuItem";

const App = () => {
  const [menu, setMenu] = useState([
    { name: "Hamburger", ordered: false },
    { name: "Brisket", ordered: false },
    { name: "Pulled Pork", ordered: false },
    { name: "Burnt Ends", ordered: false },
    { name: "Babyback Ribs", ordered: false },
    { name: "Veggie Burger", ordered: false },
  ]);

  // create a function w/arg that we pass down to MenuItem that will be called when button clicked

  const orderItem = (selectedItem) => {
    // finding the item by index(selectedItem) in the menu array, the accessing the ordered property and reassigning value to true
    menu[selectedItem].ordered = true
    // spread operator
    setMenu([...menu])
  };

  return (
    <>
      <h1>Fancy Foxtrot BBQ</h1>
      <h2>Menu</h2>
      {menu.map((item, index) => {
        return <MenuItem item={item} 
                          key={index} 
                          orderItem={orderItem}
                          index={index} />;
      })}
    </>
  );
};

export default App;
