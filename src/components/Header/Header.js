import React from 'react';
import  "./header.css"

function Header() {
  return (
    <>
    <div className="navbar">
  <a
    href="#"
    id="menu-icon"
    className="menu-icon"
    onclick="toggleMenu()"
    style={{ float: "left", fontSize: 23 }}
  >
    <i
      className="fa-solid fa-wallet"
      style={{ color: "#dedede", fontSize: 30 }}
    />{" "}
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Expense Tracker
  </a>
  <div className="navbar-links">
    <a className="active" href="#">
      <i className="fa fa-fw fa-home" /> Home
    </a>
    <a href="#expense"> Add Expense</a>
    <a href="#">
      <i className="fa fa-fw fa-user" /> Login
    </a>
  </div>
</div>
    </>
  )
}

export default Header

