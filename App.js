import Expences from "./components/Expences";
import React, { useState,useEffect } from 'react';
import NewExpense from "./components/NewExpense"

  // let expenseDate = new Date(2022,3,28);
  // let expenseTitle = "School Fee";
  // let expenseAmount =300;
let dumy_Expense = [
  // {
  //   id : 'e1',
  //   title: 'School Fee',
  //   amount:'250',
  //   date : new Date(2021,5,12)
  // },
  // {
  //   id : 'e2',
  //   title: 'Books',
  //   amount:'260',
  //   date : new Date(2022,5,1)
  // },
  // {
  //   id : 'e3',
  //   title: 'House Rent',
  //   amount:'200',
  //   date : new Date(2023,2,23)
  // },
  // {
  //   id : 'e4',
  //   title: 'Food',
  //   amount:'300',
  //   date : new Date(2024,8,19)
  // }
]
let  App = () => {
  const[expenses,setExpenses] = useState(dumy_Expense)
      function fetchData(){
        fetch('http://localhost:3000/user').then(
          response =>{
            return response.json()
          }
        ).then(
            data =>{
            //  console.log(data)
              setExpenses(data)
            }
        );
      }

    useEffect(() => {
      fetchData();
    },[]);

  

  const addExpenseHandler = (expense) =>{

    fetch('http://localhost:3000/user', {
        method :'POST',
        body:JSON.stringify(expense),
        headers : {
          'content-Type' : 'application/Json'
        }
    }).then(
      response => {
        fetchData();
      }
    );
    const updatedExpense = [expense , ...expenses]
    setExpenses(updatedExpense)
    // console.log(expense)
  }

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler} />
       <Expences item ={expenses}/>
    </div>
  
  );
}

export default App;
