import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './components/TableComponents';
import { User } from './interfaces/User';

function App() {

  const users:User[]=[
    {
      id:1,
      name:"Madhusmita",
      email:"madhu@gmail.com",
      phone:"7846871663"
    },
    {
      id:2,
      name:"Prangya",
      email:"prangya@gmail.com",
      phone:"7846871663"
    },
    {
      id:3,
      name:"Simma",
      email:"simma@gmail.com",
      phone:"7846871663"
    },
    {
      id:4,
      name:"Trupti",
      email:"trupti@gmail.com",
      phone:"7846871663"
    },
  ]

  return (
    <div className="App">
      <h1 style={{marginBottom:'20px'}}><u>User List</u></h1>
      <TableComponent users={users}/>
    </div>
  );
}

export default App;
