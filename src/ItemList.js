import React from "react";

export default function ItemList(props) {
  return (
    <div className="item-list">
      <h2>List</h2>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
