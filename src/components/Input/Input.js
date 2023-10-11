
import React from 'react'
import './input.css';

function Input() {
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
        name="category"
        id="category"
        className="input-fields"
        placeholder="category"
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
        style={{ fontSize: 20, marginBottom: 20 }}
      />
    </div>
    <div className="label-input">
      <label htmlFor="category">
        <strong>Amount</strong>
      </label>
      <input
        type="text"
        name="amount"
        id="amount"
        className="input-fields"
        placeholder="amount"
        style={{ fontSize: 20, marginBottom: 20 }}
      />
    </div>
    <div className="expense-btn-div">
      <button className="add-expense-btn">Add Expense</button>
    </div>
  </div>
</div>

  )
}

export default Input




