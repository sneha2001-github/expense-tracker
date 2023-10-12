
import React from 'react'
import {useState} from 'react';
import './input.css';

function Input({setExpense}) {

  const[expenses ,setInput] =useState({
    expenseName:" ",
    date : " ",
    amount : 0,
    description : " "

   });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...expenses,
      [name]: value,
    });
  };

  
  const handleSubmit = () => {
    setExpense((prevState) =>{
      return [...prevState,expenses];
     })
  };


  console.log(expenses);
  

  return (
    <div className="expense">
        <h1>Expense Tracker</h1>
  <div className="expense-contents">
    <div className="label-input">
      <label htmlFor="category">
        <strong>Category</strong>
      </label>
      <input
        type="text"
        name="expenseName"
        id="category"
        className="input-fields"
        placeholder="category"
        value={expenses.category}
        onChange={handleChange}
        style={{ fontSize: 20, marginBottom: 20 }}
      />
    </div>
    
    <div className="label-input">
      <label htmlFor="category">
        <strong>Date</strong>
      </label>
      <input
        type="date"
        name="date"
        id="date"
        className="input-fields"
        placeholder="date"
        value={expenses.date}
        onChange={handleChange}
        style={{ fontSize: 20, marginBottom: 20 }}
      />
    </div>
    <div className="label-input">
      <label htmlFor="category">
        <strong>Description</strong>
      </label>
      <input
        type="text"
        name="description"
        id="category"
        className="input-fields"
        placeholder="description"
        value={expenses.description}
        onChange={handleChange}
        style={{ fontSize: 20, marginBottom: 20 }}
      />
    </div>
    <div className="label-input">
      <label htmlFor="category">
        <strong>Amount</strong>
      </label>
      <input
        type="number"
        name="amount"
        id="amount"
        className="input-fields"
        placeholder="amount"
        value={expenses.amount}
        onChange={handleChange}
        style={{ fontSize: 20, marginBottom: 20 }}
      />
    </div>
    <div className="expense-btn-div">
      <button className="add-expense-btn" onClick={handleSubmit}>Add Expense</button>
    </div>
  </div>
</div>

  )
}

export default Input




