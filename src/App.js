import './App.css';
import { useEffect , useState } from 'react';
import React , {Component} from 'react';
import jsonData from './sample-data.json';
import Header from './components/Header/Header';
import ExpenseLayout from './layout/ExpenseLayout';
import Input from './components/Input/Input';
import Footer from './components/Footer/Footer';
import Location from './components/Location/Location'

// js = camelCase
// components= PascalCase


function App() {

  const[expense,setExpense] =useState(jsonData);
  

  
  
  return (
    <div className="App">
    <Header/>
    <Location/>
    <Input expense={expense} setExpense={setExpense}/>
    <ExpenseLayout data={expense} setExpense={setExpense}/>
    <Footer/>

    </div>
  );
}

export default App;
