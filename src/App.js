import './App.css';
import React , {Component} from 'react';
import jsonData from './sample-data.json';
import Header from './components/Header/Header';
import ExpenseLayout from './layout/ExpenseLayout';
import Input from './components/Input/Input';
import Footer from './components/Footer/Footer';

// js = camelCase
// components= PascalCase


function App() {
  
  return (
    <div className="App">
    <Header/>
      <Input/>
    <ExpenseLayout data={jsonData}/>
    <Footer/>

    </div>
  );
}

export default App;
