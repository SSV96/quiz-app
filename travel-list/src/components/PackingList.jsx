import React from "react";
import Item from "./Item";
import { useState } from "react";
const PackingList = ({
  packingList,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = packingList;

  if (sortBy === "description")
    sortedItems = packingList.sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sortBy === "packed")
    sortedItems = packingList.sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={() => onClearList()}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
