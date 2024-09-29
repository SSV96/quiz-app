import React from "react";
import Button from "./Button";

const FormSplitBill = ({ friend, onSplitBill }) => {
  const [bill, setBill] = React.useState("");
  const [userExpence, setuserExpence] = React.useState("");
  const friendsExpense = bill ? bill - userExpence : "";
  const [whoIsPaying, setWhoIsPaying] = React.useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !userExpence) return alert("Please enter the values");

    if (whoIsPaying === "user") {
      onSplitBill(+friendsExpense);
    } else {
      onSplitBill(-userExpence);
    }
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the Bill with {friend.name}</h2>

      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🙍‍♂️ Your Expense</label>
      <input
        type="text"
        value={userExpence}
        onChange={(e) =>
          setuserExpence(
            Number(e.target.value) > bill ? userExpence : Number(e.target.value)
          )
        }
      />

      <label>👯‍♀️{friend.name}'s Expense</label>
      <input type="text" disabled value={friendsExpense} />

      <label>🤑 Who is paying the Bill</label>

      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
