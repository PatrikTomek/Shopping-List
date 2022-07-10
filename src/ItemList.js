import React from "react";

export default function ItemList(props) {

  return (
    <div className="item-list">
      <h2>List</h2>
      <ul>
        {props.items.map((item) => (
          <li className="single-items" key={item.id}>
            <input 
            className="item-checkbox" 
            type="checkbox" 
            value={item.name} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
