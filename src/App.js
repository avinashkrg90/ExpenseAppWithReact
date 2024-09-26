import { useReducer, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

function expensesReducer(state, action){
  switch(action.type){
      case "ADD":
          return [action.expense, ... state];
      case "DELETE":
          return state.filter((expense, index)=> index!== action.index);
      default:
          return [];
  }
}

export default function App(){
  // Create state for the expenses here
  // const [expenses, setExpenses] = useState([])
  const [expenses, dispatch] = useReducer(expensesReducer, []);

  
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          {/* Render expense form here */}
          <ExpenseForm expenses = {expenses} dispatch = {dispatch}/>
          <div className="expenseContainer">
            {/* Render Expense Info here
            Render Expense List here */}
          <ExpenseInfo expenses = {expenses} dispatch = {dispatch}/>
          <ExpenseList expenses = {expenses} dispatch = {dispatch}/>
          </div>
        </div>
      </>
    )
}
