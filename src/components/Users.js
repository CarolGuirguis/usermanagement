import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchUsers,editUser,deleteUser } from "../store/users/users.actions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DataGrid,GridToolbar  } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {AiOutlineSearch} from 'react-icons/ai';
import { Button } from "bootstrap";
import './Users.css';


const columns = [
  { field: 'id', headerName: 'id', width: 130,hide:true },
  { field: 'firstName', headerName: 'First name', width: 130,editable: true },
  { field: 'lastName', headerName: 'Last name', width: 130,editable: true }

];

export default function Users () {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users.data);
  const [show, setShow] = useState(false);
  const [id, setID] = useState('');
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

 
  const handleEdit = () => { 
  
   };
   const handleSelection = (newSelectionModel) => { 
    
    if(newSelectionModel.length>0){
    setShow(true);
    setID(newSelectionModel[0])
    
    }
    else{
      setShow(false);
    }
  };
 
  const handleDelete = () => { 
    dispatch(deleteUser(id));
    
 };


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
     
     
    <div style={{ height: 400, width: '100%' }}>
   { show && <button type="button" className="btn  btn-danger buttonclass" onClick={handleDelete} >Delete</button>}
    <DataGrid
      rows={Object.values(users)[0]}
      columns={columns}
      pageSize={25}
      rowsPerPageOptions={[5]}
      
      onSelectionModelChange={(newSelectionModel) => {
        handleSelection(newSelectionModel);
      }} 
      components={{ Toolbar: GridToolbar }}
      onCellEditCommit={({id,field,value})=>dispatch(editUser(id,field,value))}
      experimentalFeatures={{ handleEdit }}
      
    />
  </div>
        </Paper>
    </Box>

     
  </div>
  );}
  }
