import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ExpensesContext } from "../../App";

export const ExpenseDetails = () => {
  const { id } = useParams();
  const expenses = useContext(ExpensesContext).expenses;

  return <div>dziala ID: {id} </div>;
};
