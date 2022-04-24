import React, { useState } from "react";

export default function AddItem(props) {
  const [enteredItem, setEnteredItem] = useState("");

  const addItemSubmiter = (e) => {
    e.preventDefault();
    props.onAddItem(enteredItem);
    setEnteredItem("");
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
