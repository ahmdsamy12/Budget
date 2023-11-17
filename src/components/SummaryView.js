// src/components/SummaryView.js
import React from "react";

const SummaryView = ({ totalIncome, totalExpenses, balance }) => {
  return (
    <div className="my-4 mx-auto w-1/2 bg-gray-300 p-4 rounded-lg max-sm:w-full">
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <div className="content flex gap-5 flex-wrap">
        <p className=" bg-blue-500 p-5 text-white rounded-lg max-sm:w-full">
          Total Income: {totalIncome}
        </p>
        <p className="p-5 bg-red-500 text-white rounded-lg max-sm:w-full">
          Total Expenses: {totalExpenses}
        </p>
        <p className="p-5 bg-green-700 text-white rounded-lg max-sm:w-full">
          Balance: {balance}
        </p>
      </div>
    </div>
  );
};

export default SummaryView;
