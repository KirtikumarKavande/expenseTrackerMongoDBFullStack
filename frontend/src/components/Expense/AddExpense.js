import React, { useRef, useState } from "react";
import Expenses from "./ShowExpenses";

const AddExpense = () => {
  const [expenseData, setExpenseData] = useState([]);

  const titleRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();

  const handleAddexpenseSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const title = titleRef.current.value;
    const category = categoryRef.current.value;
    const amount = amountRef.current.value;
    const obj = { title, category, amount };

    setExpenseData([...expenseData, obj]);

    fetch("http://localhost:4000/addexpense", {
      method: "POST",
      headers: { "content-type": "application/json", "Authorization": token },
      body: JSON.stringify(obj),
    });
    titleRef.current.value = "";
    categoryRef.current.value = "";
    amountRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleAddexpenseSubmit} className=" flex flex-col w-96 m-auto space-y-3 p-3 border border-gray-400 shadow-lg   rounded-md font-semibold">
        <label>Title</label>
        <input
          placeholder="Title of Expense"
          type="text"
          className="border border-gray-500 p-2"
          ref={titleRef}
        />
        <label for="cars">Category</label>

        <select className="border border-gray-500" ref={categoryRef}>
          <option>Select</option>

          <option>Grocery</option>
          <option>Game</option>
          <option>Party</option>
          <option>Daily Essential</option>
        </select>
        <label>Amount</label>
        <input
          type="number"
          className="border border-gray-500 p-2 pb-3"
          placeholder="Amount spend"
          ref={amountRef}
        />
        <button className="p-2  bg-blue-600">Add Expense</button>
      </form>
      <Expenses setExpenseData={setExpenseData} expenseData={expenseData} />
    </>
  );
};

export default AddExpense;
