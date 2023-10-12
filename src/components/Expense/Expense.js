import React from 'react';
import "./expense.css";
import moment from 'moment';


function Expense(props) {
 
const {expenseItem,
    data,
    setExpense,
    index} = props;

    function handleClick(){
        data.splice(index,1);
       setExpense((prevState) =>{
        return [...prevState];
       })
    }
    

    return (
        <div className="card">
            <div className="contents">
                <div className="card-category">
                    <h3 style={{ textAlign: "center" }}>{expenseItem.expenseName }</h3>
                </div>
                <p>{moment(expenseItem.date).format("YYYY-MM-DD")}</p>
                <h5>
                    {" "}
                    <strong>{expenseItem.amount} {expenseItem.currency} </strong>
                </h5>
                <p> {expenseItem.description}</p>
                <div className="button-field">
                    <button className="delete-btn" onClick={handleClick}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Expense;
