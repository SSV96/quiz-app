import React from "react";
import Button from "./Button";
import { useState } from "react";
const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const newFriend = {
      name: name,
      image: image,
      balance: 0,
      id: crypto.randomUUID(),
    };

    console.log(newFriend);
    setName("");
    setImage("");
    onAddFriend(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🤷‍♂️Friend Name:</label>
      <input
        type="text"
        placeholder="Enter friend name"
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼️Image URL:</label>
      <input
        type="text"
        placeholder="Enter image URL"
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add Friend</Button>
    </form>
  );
};

export default FormAddFriend;
