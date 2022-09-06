import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchUsers } from "../store/users/users.actions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';


const columns = [
 
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 }

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
