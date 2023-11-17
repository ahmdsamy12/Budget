import React, { useState, useEffect } from "react";
import localforage from "localforage";
import AddRecordForm from "./components/AddRecordForm";
import RecordList from "./components/RecordList";
import SummaryView from "./components/SummaryView";

const App = () => {
  const [records, setRecords] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track the index of the record being edited
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    const loadDataFromStorage = async () => {
      try {
        const storedRecords = (await localforage.getItem("records")) || [];
        console.log("Stored Records:", storedRecords);
        setRecords(storedRecords);
      } catch (error) {
        console.error("Error loading data from storage:", error);
      }
    };

    loadDataFromStorage();
  }, []);

  useEffect(() => {
    const saveDataToStorage = async () => {
      try {
        await localforage.setItem("records", records);
      } catch (error) {
        console.error("Error saving data to storage:", error);
      }
    };

    saveDataToStorage();
  }, [records]);

  const handleAddRecord = (record) => {
    const newRecords = [...records, record];
    setRecords(newRecords);
    localStorage.setItem("records", JSON.stringify(newRecords));
  };

  const handleEditRecord = (index) => {
    setEditingIndex(index);
    setEditModalOpen(true);
  };

  const handleSaveEdit = (updatedRecord) => {
    const updatedRecords = [...records];
    updatedRecords[editingIndex] = updatedRecord;
    setRecords(updatedRecords);
    setEditingIndex(null);
    setEditModalOpen(false);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditModalOpen(false);
  };

  const handleDeleteRecord = (index) => {
    const updatedRecords = [...records];
    updatedRecords.splice(index, 1);
    setRecords(updatedRecords);
  };

  const calculateTotal = (type) => {
    return records.reduce(
      (total, record) =>
        type === "income" ? total + record.amount : total - record.amount,
      0
    );
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4 mx-auto p-2 bg-slate-200 text-center">
        Personal Budget Tracker
      </h1>
      <AddRecordForm onAddRecord={handleAddRecord} />
      <RecordList
        records={records}
        onEditRecord={handleEditRecord}
        onDeleteRecord={handleDeleteRecord}
      />
      <SummaryView
        totalIncome={calculateTotal("income")}
        totalExpenses={calculateTotal("expenses")}
        balance={calculateTotal("income") - calculateTotal("expenses")}
      />

      {/* Edit Record Modal */}
      {editModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md w-2/3">
            <h2 className="text-xl font-semibold mb-2">Edit Record</h2>
            <AddRecordForm
              onAddRecord={handleSaveEdit}
              initialRecord={records[editingIndex]}
              onCancel={handleCancelEdit}
            />
            <button
              onClick={handleCancelEdit}
              className="py-2 px-8 bg-red-400 text-white flex justify-end ml-auto my-0 "
            >
              cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
