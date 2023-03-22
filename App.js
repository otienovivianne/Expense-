import { useState, useEffect } from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";

const App = () => {
  const myItems = JSON.parse(localStorage.getItem("items"));
  const [expenses, setExpenses] = useState(myItems || []);

  const addExpenseHandler = (item) => {
    setExpenses([...expenses, item]);
  };

  const removeItem = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const updateItem = (id, updateExpense) => {
    const todoExpense = expenses.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: updateExpense.title,
          date: updateExpense.date,
          amount: updateExpense.amount,
        };
      }
      return item;
    });
    setExpenses([...todoExpense]);
  };

  useEffect(() => {
    const dataItems = JSON.stringify(expenses);
    localStorage.setItem("items", dataItems);
  }, [expenses]);

  return (
    <div className="app">
      <h2>Expense-App</h2>
      <NewExpense addExpense={addExpenseHandler} />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            removeData={removeItem}
            updateData={updateItem}
          />
        );
      })}
    </div>
  );
};

export default App;
