import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchUsers } from "../store/users/users.actions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';


const columns = [
 
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 }

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


export default function Users () {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users.data);
  
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  if (users.length !== 0){
    return (
      <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={Object.values(users)[0]}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[10]}
      checkboxSelection
    />
  </div>);}
  }
