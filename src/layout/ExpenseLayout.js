import React from 'react';
import './expense_layout.css';
import Expense from '../components/Expense/Expense';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function ExpenseLayout({ data,setExpense}){


    return(
        
        <div className='expenselayout'>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 12 }}>
          {data.map((expenseItem, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
               <Expense expenseItem={expenseItem} setExpense={setExpense} index={index} data={data}/>
            </Grid>
          ))}
        </Grid>
      </Box>
      </div>
    );

}