import { useState } from "react";
import moment from "moment";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const [date, setDate] = useState(props.date);
  const dateItem = moment(props.date).format("MMMM Do, YYYY");

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const amountChange = (e) => {
    setAmount(e.target.value);
  };
  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: date,
    };
    props.updateData(props.id, expenseData);
    setEditing(false);
  };

  let result;

  if (editing) {
    result = (
      <div className="edit-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" value={title} onChange={titleChange} />
          </div>
          <div>
            <input type="number" value={amount} onChange={amountChange} />
          </div>
          <div>
            <input type="date" value={date} onChange={dateChange} />
          </div>
          <button>edit-expense</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="expense-item">
        <div className="date">{dateItem}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Kshs. {props.amount}</div>
        </div>
        <button
          className="btn-expense"
          onClick={() => props.removeData(props.id)}
        >
          remove
        </button>
        <button onClick={toggleEdit} className="btn-expense">
          edit
        </button>
      </div>
    );
  }

  return result;
}

export default ExpenseItem;
