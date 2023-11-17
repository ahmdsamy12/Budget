// src/components/RecordList.js
import React from "react";

const RecordList = ({ records, onEditRecord, onDeleteRecord }) => {
  return (
    <div className="my-20 w-1/2 mx-auto max-sm:w-full">
      <h2 className="text-xl font-semibold mb-2">Record List</h2>
      <ul className=" list-none">
        {records.map((record, index) => (
          <li
            key={index}
            className="my-4 bg-gray-200 p-2 rounded-lg text-black"
          >
            <span className=" text-green-700 font-black">Amount</span>:{" "}
            {record.amount}, <br />
            <span className=" text-green-700 font-black">Category</span>:{" "}
            {record.category}, <br />
            <span className=" text-green-700 font-black">Date</span>:{" "}
            {record.date.toDateString()}, <br />
            <span className=" text-green-700 font-black">
              Description
            </span>: {record.description}
            <div className="actions mt-2 ml-auto mb-0 mr-0">
              <button
                onClick={() => onEditRecord(index)}
                className="py-2 px-8 bg-green-500 text-white rounded-lg mx-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteRecord(index)}
                className="py-2 px-8 bg-red-600 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecordList;
