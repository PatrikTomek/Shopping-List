import React, { useState } from "react";

export default function AddItem() {
  const [enteredItem, setEnteredItem] = useState("");

  const addItem = () => {
    console.log(enteredItem);
    setEnteredItem("");
  };

  const addItemSubmiter = (e) => {
    e.preventDefault();
    addItem();
  };

  const addItemChangeHandler = (e) => {
    setEnteredItem(e.target.value);
  };

  return (
    <div className="add-item">
      <h1>My Shopping List</h1>
      <form onSubmit={addItemSubmiter}>
        <input className="input" type="text" value={enteredItem} onChange={addItemChangeHandler} />
        <button className="submit-btn" type="submit">
          Add item
        </button>
      </form>
    </div>
  );
}
