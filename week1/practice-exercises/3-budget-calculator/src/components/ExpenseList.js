import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

export const ExpenseList = ({
  expenses,
  handleDelete,
  handleEdit,
  clearItems,
}) => {
  return (
    <>
      <ul className="list">
        {expenses.map((exp) => {
          return (
            <ExpenseItem
              key={exp.id}
              expense={exp}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          CLEAR EXPENSES <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};
