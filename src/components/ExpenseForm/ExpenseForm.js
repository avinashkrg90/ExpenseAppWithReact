
import { useState } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm({expenses, dispatch}) {
  // Create state or ref for the inputs here
  const [textContent, setTextContent] = useState();
  const [amountContent, setAmountContent] = useState();

  function handleSubmit(e){
      e.preventDefault();
      // setExpenses([...expenses, {text: textContent, amount: parseFloat(amountContent)}])
      dispatch({type: "ADD", expense:{text: textContent, amount: parseFloat(amountContent)}})
  }

    return (
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          onChange={(e)=>setTextContent(e.target.value)}
          value = {textContent}
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          required
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense,positive-income)</div>
        </div>
        <input
          onChange={(e)=>setAmountContent(e.target.value)}
          value = {amountContent}
          className={styles.input}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          required
        />
        <button className={styles.submitBtn}>Add Transaction</button>
      </form>
    );
}
