// src/components/AddRecordForm.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddRecordForm = ({ onAddRecord }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");

  const handleAddRecord = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const newRecord = {
      amount: parseFloat(amount),
      category,
      date,
      description,
    };

    onAddRecord(newRecord);

    setAmount("");
    setCategory("");
    setDate(new Date());
    setDescription("");
  };

  return (
    <div className="my-4 mx-auto w-1/2 p-4 shadow-2xl rounded-xl max-sm:w-full">
      <h2 className="text-xl font-semibold mb-2">Add New Record</h2>
      <div className="flex flex-col space-y-2">
        <label htmlFor="amount" className="text-sm">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 outline-green-200 focus:shadow-lg"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="category" className="text-sm">
          Category
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 outline-green-200 focus:shadow-lg"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="date" className="text-sm">
          Date
        </label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          className="border p-2 outline-green-200 focus:shadow-lg"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="description" className="text-sm">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 outline-green-200 focus:shadow-lg"
        />
      </div>
      <button
        onClick={handleAddRecord}
        className="bg-blue-500 text-white p-2 mt-4"
      >
        Add Record
      </button>
    </div>
  );
};

export default AddRecordForm;
