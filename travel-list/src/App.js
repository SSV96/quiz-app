import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    // setItems(items=>items.push(item))
    // we cant do like this  because it is mutatinng the array
    setItems([...items, newItem]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (items.length === 0) {
      alert("Nothing to clear!");
      return;
    }
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        packingList={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
