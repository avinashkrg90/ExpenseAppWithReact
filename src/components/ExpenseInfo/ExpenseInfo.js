
import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo({expenses}) {

    let balanceAmount = 0;
    let incomeAmount = 0;
    let expenseAmount = 0;
    expenses.map((expense)=>{
        balanceAmount += expense.amount;
        if(expense.amount >=0)
            incomeAmount += expense.amount;
        else
            expenseAmount += expense.amount;
    })

    return (
      <div className={styles.expenseInfoContainer}>
        <div className={styles.balance}>
          <h4>YOUR BALANCE</h4>
          <h1>${balanceAmount}</h1>
        </div>
        <div className={styles.incomeExpenseContainer}>
          <div>
            <h4>Income</h4>
            <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
              +${incomeAmount}
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
              -${-expenseAmount}
            </p>
          </div>
        </div>
      </div>
    );
  
}
