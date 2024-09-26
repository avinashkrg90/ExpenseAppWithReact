import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

export default function App(){
  // Create state for the expenses here
  const [expenses, setExpenses] = useState([])

  
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          {/* Render expense form here */}
          <ExpenseForm expenses = {expenses} setExpenses = {setExpenses}/>
          <div className="expenseContainer">
            {/* Render Expense Info here
            Render Expense List here */}
          <ExpenseInfo expenses = {expenses} setExpenses = {setExpenses}/>
          <ExpenseList expenses = {expenses} setExpenses = {setExpenses}/>
          </div>
        </div>
      </>
    )
}
