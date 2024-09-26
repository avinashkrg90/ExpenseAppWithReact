
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

export default function ExpenseList({expenses, dispatch}){

    return (
      <div className={styles.expenseListContainer}>
        <h3>Transactions</h3>
        <ul className={styles.transactionList}>
          {/* Display transactions here */}
          {expenses.map((expense, index)=>
              <Transaction expense={expense} index={index} expenses={expenses} dispatch = {dispatch}/>
          )}
        </ul>
      </div>
    );
  
}
