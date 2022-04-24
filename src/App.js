import React, { useState } from "react";
import "./App.css";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

function App() {
  const [itemsList, setItemsList] = useState([]);

  const addItemHandler = (iName) => {
    setItemsList((prevItemsList) => {
      return [
        ...prevItemsList, 
        { name: iName, id: Math.random().toString() }];
    });
  };

  return (
    <div className="App">
      <AddItem onAddItem={addItemHandler} />
      <ItemList items={itemsList} />
    </div>
  );
}

export default App;
