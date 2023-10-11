import React from 'react';
import "./expense.css";
import moment from 'moment';

function Expense(props) {

    const { expense } = props;

    return (
        <div className="card">
            <div className="contents">
                <div className="card-category">
                    <h3 style={{ textAlign: "center" }}>{expense.expenseName}</h3>
                </div>
                <p>{moment(expense.date).format("MM DD YY").slice(0,10)}</p>
                <h5>
                    {" "}
                    <strong>{expense.amount} </strong>
                </h5>
                <p> {expense.description}</p>
                <div className="button-field">
                    <button className="delete-btn">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Expense;
