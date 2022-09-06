import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchUsers } from "../store/users/users.actions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {AiOutlineSearch} from 'react-icons/ai';



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
  
      <div>
            <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 500,
        },
      }}
    >
      
      <Paper elevation={3} >
     
      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginBottom:'1rem',
        marginTop:'1rem',
        marginLeft:'1rem'
      }}
    >
      <TextField fullWidth label="Search by first name.." id="fullWidth" />
    </Box>
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={Object.values(users)[0]}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[10]}
      checkboxSelection
    />
  </div>
        </Paper>
    </Box>

     
  </div>
  );}
  }
