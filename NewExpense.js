import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm addItem={props.addExpense} />
    </div>
  );
};

export default NewExpense;
